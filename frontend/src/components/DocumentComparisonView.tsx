'use client'

import { LexicalDocumentCard } from "@/components/LexicalDocumentCard"
import { SemanticDocumentCard } from "@/components/SemanticDocumentCard"
import { ScoredDocument } from "@/types/ScoredDocument"

interface DocumentComparisonViewProps {
  lexicalResults: ScoredDocument[]
  semanticResults: ScoredDocument[]
  onInspect: (item: ScoredDocument) => void
}

export function DocumentComparisonView({
  lexicalResults,
  semanticResults,
  onInspect,
}: DocumentComparisonViewProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <LexicalColumn results={lexicalResults} />
      <SemanticColumn results={semanticResults} onInspect={onInspect} />
    </section>
  )
}

function LexicalColumn({ results }: { results: ScoredDocument[] }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-1 pb-1 border-b border-pink-100">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Baseline: Lexical Search (BM25)
        </span>
        <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/80">
          Keyword Matching Only
        </span>
      </div>

      <div className="space-y-3">
        {results.map((item, index) => (
          <LexicalDocumentCard
            key={item.document.id}
            rank={index + 1}
            scoredDocument={item}
          />
        ))}
      </div>
    </div>
  )
}

function SemanticColumn({
  results,
  onInspect,
}: {
  results: ScoredDocument[]
  onInspect: (item: ScoredDocument) => void
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-1 pb-1 border-b border-pink-200">
        <span className="text-xs font-bold uppercase tracking-wider text-primary-600">
          Stage 2: Jev Calibrated Re-rank
        </span>
        <span className="text-[11px] font-semibold text-primary-600 bg-primary-50 px-2.5 py-0.5 rounded-full border border-primary-200">
          System One Intelligence
        </span>
      </div>

      <div className="space-y-3">
        {results.map((item, index) => (
          <SemanticDocumentCard
            key={item.document.id}
            rank={index + 1}
            scoredDocument={item}
            onInspect={onInspect}
            isTopPick={index === 0}
          />
        ))}
      </div>
    </div>
  )
}
