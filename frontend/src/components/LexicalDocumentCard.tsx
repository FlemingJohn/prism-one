'use client'

import { ScoredDocument } from "@/types/ScoredDocument"

interface LexicalDocumentCardProps {
  rank: number
  scoredDocument: ScoredDocument
}

export function LexicalDocumentCard({
  rank,
  scoredDocument,
}: LexicalDocumentCardProps) {
  const { document, lexicalScore } = scoredDocument

  return (
    <div className="glass-card rounded-2xl p-4.5 space-y-2 opacity-90 border-slate-200">
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="text-[11px] font-mono font-medium text-slate-400">
            #{rank} (Lexical Frequency)
          </span>
          <h4 className="font-semibold text-slate-900 text-sm">
            {document.title}
          </h4>
        </div>
        <span className="font-mono text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium shrink-0">
          BM25: {lexicalScore}
        </span>
      </div>

      <p className="text-xs text-slate-600 leading-relaxed">
        {document.content.slice(0, 140)}...
      </p>

      <LexicalWarning rank={rank} />
    </div>
  )
}

function LexicalWarning({ rank }: { rank: number }) {
  const message =
    rank === 1
      ? "Ranked #1 due to keyword frequency, but lacks implementation steps."
      : "Matches keyword terms, but misses the core user intent."

  return (
    <div className="flex items-center gap-2 p-2 rounded-xl bg-amber-50/70 border border-amber-200/60 text-[11px] text-amber-800">
      <svg
        className="w-4 h-4 text-amber-600 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
      <span>{message}</span>
    </div>
  )
}
