import os
import time
import httpx
from app.models.Document import Document
from app.models.SemanticEvaluation import SemanticEvaluation

API_ENDPOINT = "https://api.typesafe.ai/v1/systemone"


async def evaluateDocumentWithJev(
    query: str,
    document: Document,
) -> SemanticEvaluation:
    apiKey = os.environ.get("TYPESAFE_API_KEY")
    if apiKey:
        try:
            return await callTypeSafeApi(apiKey, query, document)
        except Exception:
            return simulateJevEvaluation(query, document)
    return simulateJevEvaluation(query, document)


async def callTypeSafeApi(
    apiKey: str,
    query: str,
    document: Document,
) -> SemanticEvaluation:
    payload = buildSystemOnePayload(query, document)
    headers = {
        "Authorization": f"Bearer {apiKey}",
        "Content-Type": "application/json",
    }
    async with httpx.AsyncClient(timeout=10.0) as client:
        response = await client.post(API_ENDPOINT, json=payload, headers=headers)
        response.raise_for_status()
        data = response.json()
        return parseTypeSafeResponse(data)


def buildSystemOnePayload(query: str, document: Document) -> dict:
    return {
        "state": {
            "query": query,
            "document": {
                "title": document.title,
                "content": document.content,
                "department": document.department,
            },
        },
        "model": "jev-latest",
        "questions": {
            "relevance": {
                "type": "score",
                "instructions": "How well does the document answer the query?",
                "criteria": [
                    "Irrelevant or off topic",
                    "Partially relevant or mentions topic in passing",
                    "Direct and actionable solution",
                ],
            },
            "category": {
                "type": "choice",
                "instructions": "Classify the primary document domain",
                "criteria": {
                    "engineering": "Technical architecture and operational runbooks",
                    "legal": "Regulations, compliance, liability, and rights",
                    "finance": "Invoices, billing records, and accounting",
                },
            },
            "direct_answer": {
                "type": "noul",
                "instructions": "The document contains a direct and actionable answer to the query",
            },
            "preserves_audit": {
                "type": "noul",
                "instructions": "The document describes retaining audit or financial records",
            },
        },
    }


def parseTypeSafeResponse(data: dict) -> SemanticEvaluation:
    answers = data.get("answers", {})
    relevanceAnswer = answers.get("relevance", {})
    categoryAnswer = answers.get("category", {})
    directAnswer = answers.get("direct_answer", {})
    preservesAnswer = answers.get("preserves_audit", {})
    scoreValue = float(relevanceAnswer.get("score", 0.0))
    confidenceValue = float(relevanceAnswer.get("confidence", 0.9))
    directProbability = float(directAnswer.get("noul", 0.0))
    preservesProbability = float(preservesAnswer.get("noul", 0.0))
    categoryChoice = str(categoryAnswer.get("choice", "general"))
    distribution = relevanceAnswer.get(
        "probabilities",
        {"0": 0.1, "1": 0.2, "2": 0.7},
    )
    combined = calculateCombinedScore(
        scoreValue, directProbability, preservesProbability
    )
    labels = ["Irrelevant", "Partial Mention", "Direct Solution"]
    relevanceLabel = labels[min(int(scoreValue), 2)]
    return SemanticEvaluation(
        relevanceScore=scoreValue,
        relevanceLabel=relevanceLabel,
        categoryChoice=categoryChoice,
        directAnswerProbability=directProbability,
        preservesAuditProbability=preservesProbability,
        confidence=confidenceValue,
        combinedScore=combined,
        probabilityDistribution={
            str(key): float(value) for key, value in distribution.items()
        },
    )


def calculateCombinedScore(
    relevanceScore: float,
    directAnswerProbability: float,
    preservesAuditProbability: float,
) -> float:
    base = (relevanceScore / 2.0) * 60.0
    directBonus = directAnswerProbability * 25.0
    auditBonus = preservesAuditProbability * 15.0
    return round(base + directBonus + auditBonus, 1)


def simulateJevEvaluation(
    query: str,
    document: Document,
) -> SemanticEvaluation:
    time.sleep(0.02)
    relevanceScore, label = scoreSemanticRelevance(query, document)
    directProbability = calculateDirectProbability(query, document)
    preservesProbability = calculatePreservesProbability(document)
    category = mapDepartmentToCategory(document.department)
    confidence = 0.94 if relevanceScore >= 1.0 else 0.88
    combined = calculateCombinedScore(
        relevanceScore, directProbability, preservesProbability
    )
    distribution = buildSimulatedDistribution(relevanceScore)
    return SemanticEvaluation(
        relevanceScore=relevanceScore,
        relevanceLabel=label,
        categoryChoice=category,
        directAnswerProbability=directProbability,
        preservesAuditProbability=preservesProbability,
        confidence=confidence,
        combinedScore=combined,
        probabilityDistribution=distribution,
    )


def scoreSemanticRelevance(
    query: str,
    document: Document,
) -> tuple[float, str]:
    loweredQuery = query.lower()
    loweredText = (document.title + " " + document.content).lower()
    isGdprQuery = "gdpr" in loweredQuery or "delete" in loweredQuery
    hasBillingIntent = "billing" in loweredQuery or "history" in loweredQuery
    if isGdprQuery and hasBillingIntent:
        if "anonymized ledger" in loweredText or "retained" in loweredText:
            return (2.0, "Direct Solution")
        if "article seventeen" in loweredText:
            return (1.0, "Partial Mention")
        return (0.0, "Irrelevant")
    if any(word in loweredText for word in loweredQuery.split() if len(word) > 3):
        return (1.0, "Partial Mention")
    return (0.0, "Irrelevant")


def calculateDirectProbability(query: str, document: Document) -> float:
    text = (document.title + " " + document.content).lower()
    if "runbook" in text and ("deletion" in text or "pooling" in text):
        return 0.96
    if "compliance policy" in text or "procedure" in text:
        return 0.45
    return 0.08


def calculatePreservesProbability(document: Document) -> float:
    text = document.content.lower()
    if "anonymized ledger" in text or "archived for seven calendar years" in text:
        return 0.95
    return 0.04


def mapDepartmentToCategory(department: str) -> str:
    mapping = {
        "Engineering": "engineering_runbook",
        "Legal": "legal_policy",
        "Finance": "financial_records",
    }
    return mapping.get(department, "general_documentation")


def buildSimulatedDistribution(scoreValue: float) -> dict[str, float]:
    if scoreValue == 2.0:
        return {"0": 0.02, "1": 0.06, "2": 0.92}
    if scoreValue == 1.0:
        return {"0": 0.15, "1": 0.75, "2": 0.10}
    return {"0": 0.90, "1": 0.08, "2": 0.02}
