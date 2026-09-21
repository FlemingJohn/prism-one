from pydantic import BaseModel


class SemanticEvaluation(BaseModel):
    relevanceScore: float
    relevanceLabel: str
    categoryChoice: str
    directAnswerProbability: float
    preservesAuditProbability: float
    confidence: float
    combinedScore: float
    probabilityDistribution: dict[str, float]
