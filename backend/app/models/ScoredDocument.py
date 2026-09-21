from pydantic import BaseModel
from app.models.Document import Document
from app.models.SemanticEvaluation import SemanticEvaluation


class ScoredDocument(BaseModel):
    document: Document
    lexicalScore: float
    semanticEvaluation: SemanticEvaluation | None = None
