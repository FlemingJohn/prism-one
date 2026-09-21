from pydantic import BaseModel


class SearchMetrics(BaseModel):
    lexicalSearchDurationMilliseconds: float
    semanticEvaluationDurationMilliseconds: float
    totalDurationMilliseconds: float
    estimatedCostUsd: float
    candidateCount: int
