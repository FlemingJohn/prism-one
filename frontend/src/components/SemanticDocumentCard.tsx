'use client'

import { ScoredDocument } from "@/types/ScoredDocument"

interface SemanticDocumentCardProps {
  rank: number
  scoredDocument: ScoredDocument
  onInspect: (item: ScoredDocument) => void
  isTopPick?: boolean
}

export function SemanticDocumentCard({
  rank,
  scoredDocument,
  onInspect,
  isTopPick = false,
}: SemanticDocumentCardProps) {
  const { document, semanticEvaluation } = scoredDocument
  const evaluation = semanticEvaluation
  const borderClass = isTopPick
    ? "border-primary-300/80 bg-gradient-to-b from-white to-pink-50/30 shadow-md shadow-primary-500/10"
    : "border-pink-100/90"

  return (
    <div className={`glass-card rounded-2xl p-5 space-y-3 transition-all ${borderClass}`}>
      <CardHeader
        rank={rank}
        title={document.title}
        department={document.department}
        rubricLabel={evaluation?.relevanceLabel ?? "Partial"}
        combinedScore={evaluation?.combinedScore ?? 0}
        confidence={evaluation?.confidence ?? 0.9}
        isTopPick={isTopPick}
      />

      <p className="text-xs text-slate-700 leading-relaxed">
        {document.content.slice(0, 160)}...
      </p>

      {evaluation && <ProbabilitiesRow evaluation={evaluation} />}

      <div className="pt-1 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 font-mono">
          ID: {document.id}
        </span>
        <button
          onClick={() => onInspect(scoredDocument)}
          className="px-3 py-1.5 text-xs rounded-xl bg-white hover:bg-pink-50 text-primary-600 border border-pink-200 font-semibold transition-all shadow-2xs hover:shadow-xs flex items-center gap-1.5"
        >
          <span>Inspect Probabilities</span>
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function CardHeader({
  rank,
  title,
  department,
  rubricLabel,
  combinedScore,
  confidence,
  isTopPick,
}: {
  rank: number
  title: string
  department: string
  rubricLabel: string
  combinedScore: number
  confidence: number
  isTopPick: boolean
}) {
  const rankText = isTopPick ? `#${rank} (Jev Top Pick)` : `#${rank} (Jev Rank)`

  return (
    <div className="flex items-start justify-between gap-3">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-primary-600">
            {rankText}
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
            {rubricLabel}
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded-md bg-pink-50 text-primary-600 font-medium border border-primary-200">
            {department}
          </span>
        </div>
        <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
      </div>

      <div className="text-right shrink-0">
        <div className="text-lg font-bold font-mono text-primary-600">
          {combinedScore}{" "}
          <span className="text-xs text-slate-400 font-normal">/ 100</span>
        </div>
        <div className="text-[10px] font-mono text-emerald-600 font-medium">
          Confidence: {Math.round(confidence * 100)}%
        </div>
      </div>
    </div>
  )
}

function ProbabilitiesRow({
  evaluation,
}: {
  evaluation: NonNullable<ScoredDocument["semanticEvaluation"]>
}) {
  const directPercent = Math.round(evaluation.directAnswerProbability * 100)
  const preservesPercent = Math.round(evaluation.preservesAuditProbability * 100)

  return (
    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-pink-100/70 text-xs">
      <div className="flex items-center justify-between bg-white/70 p-2 rounded-xl border border-pink-100">
        <span className="text-slate-500 text-[11px]">Direct Answer Prob:</span>
        <span className="font-mono text-primary-600 font-bold">
          {directPercent}%
        </span>
      </div>
      <div className="flex items-center justify-between bg-white/70 p-2 rounded-xl border border-pink-100">
        <span className="text-slate-500 text-[11px]">Preserves Invoices:</span>
        <span className="font-mono text-emerald-600 font-bold">
          {preservesPercent}%
        </span>
      </div>
    </div>
  )
}
