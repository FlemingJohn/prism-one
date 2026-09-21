import { ScoredDocument } from "@/types/ScoredDocument"
import { SearchMetrics } from "@/types/SearchMetrics"

export interface SearchResponse {
  query: string
  lexicalResults: ScoredDocument[]
  semanticResults: ScoredDocument[]
  metrics: SearchMetrics
}
