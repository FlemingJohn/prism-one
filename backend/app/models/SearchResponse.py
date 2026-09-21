from pydantic import BaseModel
from app.models.ScoredDocument import ScoredDocument
from app.models.SearchMetrics import SearchMetrics


class SearchResponse(BaseModel):
    query: str
    lexicalResults: list[ScoredDocument]
    semanticResults: list[ScoredDocument]
    metrics: SearchMetrics
