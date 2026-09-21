import { ProbabilityDistribution } from "@/types/ProbabilityDistribution"

export interface SemanticEvaluation {
  relevanceScore: number
  relevanceLabel: string
  categoryChoice: string
  directAnswerProbability: number
  preservesAuditProbability: number
  confidence: number
  combinedScore: number
  probabilityDistribution: ProbabilityDistribution
}
