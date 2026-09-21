import { Document } from "@/types/Document"
import { SemanticEvaluation } from "@/types/SemanticEvaluation"

export interface ScoredDocument {
  document: Document
  lexicalScore: number
  semanticEvaluation?: SemanticEvaluation
}
