import asyncio
import time
from app.models.ScoredDocument import ScoredDocument
from app.models.SearchMetrics import SearchMetrics
from app.models.SearchRequest import SearchRequest
from app.models.SearchResponse import SearchResponse
from app.services.documentStore import searchLexicalDocuments
from app.services.typesafeService import evaluateDocumentWithJev


async def searchAndRerank(request: SearchRequest) -> SearchResponse:
    startTime = time.perf_counter()
    lexicalDocuments, lexicalDuration = executeLexicalStage(request)
    semanticDocuments, semanticDuration = await executeSemanticStage(
        request.query, lexicalDocuments, request.minimumConfidence
    )
    totalDuration = round((time.perf_counter() - startTime) * 1000.0, 2)
    metrics = buildSearchMetrics(
        lexicalDuration,
        semanticDuration,
        totalDuration,
        len(lexicalDocuments),
    )
    return SearchResponse(
        query=request.query,
        lexicalResults=lexicalDocuments,
        semanticResults=semanticDocuments,
        metrics=metrics,
    )


def executeLexicalStage(
    request: SearchRequest,
) -> tuple[list[ScoredDocument], float]:
    start = time.perf_counter()
    rawCandidates = searchLexicalDocuments(
        request.query,
        request.candidateLimit,
        request.departmentFilter,
    )
    duration = round((time.perf_counter() - start) * 1000.0, 2)
    scored = [
        ScoredDocument(document=document, lexicalScore=score)
        for document, score in rawCandidates
    ]
    return scored, duration


async def executeSemanticStage(
    query: str,
    candidates: list[ScoredDocument],
    minimumConfidence: float,
) -> tuple[list[ScoredDocument], float]:
    start = time.perf_counter()
    evaluations = await asyncio.gather(
        *[evaluateDocumentWithJev(query, item.document) for item in candidates]
    )
    duration = round((time.perf_counter() - start) * 1000.0, 2)
    reranked = [
        ScoredDocument(
            document=item.document,
            lexicalScore=item.lexicalScore,
            semanticEvaluation=evaluation,
        )
        for item, evaluation in zip(candidates, evaluations)
        if evaluation.confidence >= minimumConfidence
    ]
    reranked.sort(
        key=lambda item: (
            item.semanticEvaluation.combinedScore
            if item.semanticEvaluation
            else 0.0
        ),
        reverse=True,
    )
    return reranked, duration


def buildSearchMetrics(
    lexicalDuration: float,
    semanticDuration: float,
    totalDuration: float,
    candidateCount: int,
) -> SearchMetrics:
    estimatedTokensPerDocument = 350
    inputCostPerMillionTokens = 0.042
    totalTokens = candidateCount * estimatedTokensPerDocument
    estimatedCost = round((totalTokens / 1000000.0) * inputCostPerMillionTokens, 6)
    return SearchMetrics(
        lexicalSearchDurationMilliseconds=lexicalDuration,
        semanticEvaluationDurationMilliseconds=semanticDuration,
        totalDurationMilliseconds=totalDuration,
        estimatedCostUsd=estimatedCost,
        candidateCount=candidateCount,
    )
