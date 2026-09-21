export interface SearchMetrics {
  lexicalSearchDurationMilliseconds: number
  semanticEvaluationDurationMilliseconds: number
  totalDurationMilliseconds: number
  estimatedCostUsd: number
  candidateCount: number
}
