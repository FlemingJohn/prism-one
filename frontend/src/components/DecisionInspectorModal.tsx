'use client'

import { ProbabilityBar } from "@/components/ProbabilityBar"
import { ScoredDocument } from "@/types/ScoredDocument"

interface DecisionInspectorModalProps {
  selectedDocument: ScoredDocument | null
  isOpen: boolean
  onClose: () => void
}

export function DecisionInspectorModal({
  selectedDocument,
  isOpen,
  onClose,
}: DecisionInspectorModalProps) {
  if (!isOpen || !selectedDocument || !selectedDocument.semanticEvaluation) {
    return null
  }

  const { document, semanticEvaluation: evaluation } = selectedDocument

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[500px] bg-white/95 backdrop-blur-2xl shadow-2xl border-l border-pink-200 p-6 flex flex-col justify-between z-50">
      <div className="space-y-6 overflow-y-auto pr-1">
        <DrawerHeader title={document.title} onClose={onClose} />
        <ModelBadge confidence={evaluation.confidence} />
        <PrimitivesSection evaluation={evaluation} />
        <FormulaCard evaluation={evaluation} />
      </div>

      <div className="pt-4 border-t border-pink-100 flex justify-end">
        <button
          onClick={onClose}
          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
        >
          Dismiss Inspector
        </button>
      </div>
    </div>
  )
}

function DrawerHeader({
  title,
  onClose,
}: {
  title: string
  onClose: () => void
}) {
  return (
    <div className="flex items-start justify-between pb-4 border-b border-pink-100">
      <div className="space-y-1">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary-600 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
          System One Decision Receipt
        </span>
        <h3 className="font-bold text-slate-900 text-base leading-snug">
          {title}
        </h3>
      </div>
      <button
        onClick={onClose}
        className="p-1.5 rounded-xl hover:bg-pink-50 text-slate-400 hover:text-slate-700 transition-colors"
        aria-label="Close inspector"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  )
}

function ModelBadge({ confidence }: { confidence: number }) {
  const percent = Math.round(confidence * 100)

  return (
    <div className="p-3.5 bg-gradient-to-r from-pink-50/60 to-rose-50/40 rounded-2xl border border-pink-200 text-xs space-y-1.5">
      <div className="flex justify-between">
        <span className="text-slate-500">Evaluated Model:</span>
        <span className="font-mono text-primary-600 font-bold">jev-latest</span>
      </div>
      <div className="flex justify-between">
        <span className="text-slate-500">Sampling Mode:</span>
        <span className="font-mono text-slate-800">Parallel Forward Pass</span>
      </div>
      <div className="flex justify-between">
        <span className="text-slate-500">Calibrated Certainty:</span>
        <span className="font-mono text-emerald-600 font-bold">
          {percent}% Confident
        </span>
      </div>
    </div>
  )
}

function PrimitivesSection({
  evaluation,
}: {
  evaluation: NonNullable<ScoredDocument["semanticEvaluation"]>
}) {
  const auditPercent = Math.round(evaluation.preservesAuditProbability * 100)

  return (
    <div className="space-y-4 text-xs">
      <div className="space-y-2.5 border border-pink-100 rounded-2xl p-4 bg-white shadow-2xs">
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-800 text-xs uppercase tracking-wide">
            1. PRIMITIVE: Score (relevance)
          </span>
          <span className="font-mono text-primary-600 font-semibold bg-pink-50 px-2.5 py-0.5 rounded-md border border-pink-200">
            {evaluation.relevanceLabel}
          </span>
        </div>
        <ProbabilityBar
          label="Level 2 (Direct Solution)"
          probability={evaluation.probabilityDistribution["2"] ?? 0.94}
          isPrimary={true}
        />
        <ProbabilityBar
          label="Level 1 (Partial Mention)"
          probability={evaluation.probabilityDistribution["1"] ?? 0.05}
        />
        <ProbabilityBar
          label="Level 0 (Irrelevant)"
          probability={evaluation.probabilityDistribution["0"] ?? 0.01}
        />
      </div>

      <div className="space-y-2 border border-pink-100 rounded-2xl p-4 bg-white shadow-2xs">
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-800 text-xs uppercase tracking-wide">
            2. PRIMITIVE: Choice (domain)
          </span>
          <span className="font-mono text-indigo-600 font-semibold bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-200">
            {evaluation.categoryChoice}
          </span>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed">
          Calibrated category assignment based on domain criteria.
        </p>
      </div>

      <div className="space-y-2 border border-pink-100 rounded-2xl p-4 bg-white shadow-2xs">
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-800 text-xs uppercase tracking-wide">
            3. PRIMITIVE: Noul (preserves_audit)
          </span>
          <span className="font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
            {auditPercent}% (YES)
          </span>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed">
          Calibrated probability that financial and invoice records are preserved.
        </p>
      </div>
    </div>
  )
}

function FormulaCard({
  evaluation,
}: {
  evaluation: NonNullable<ScoredDocument["semanticEvaluation"]>
}) {
  return (
    <div className="p-3.5 bg-slate-900 rounded-2xl text-slate-100 font-mono text-[11px] space-y-1.5 shadow-xs">
      <div className="text-slate-400"># Deterministic Python Formula in Code:</div>
      <div className="text-pink-300">
        Score = (Relevance * 30) + (DirectProb * 25) + (AuditProb * 15)
      </div>
      <div className="text-slate-300 pt-1">
        Final Calculated Score ={" "}
        <strong className="text-emerald-400">{evaluation.combinedScore}</strong> / 100
      </div>
    </div>
  )
}
