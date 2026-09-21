from pydantic import BaseModel


class SearchRequest(BaseModel):
    query: str
    candidateLimit: int = 10
    departmentFilter: str | None = None
    minimumConfidence: float = 0.5
