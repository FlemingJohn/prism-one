'use client'

export function ProductPreviewFrame() {
  return (
    <div className="bg-white rounded-2xl border border-black/[0.07] shadow-2xl overflow-hidden mt-4">
      <div className="h-10 bg-zinc-50 border-b border-black/[0.07] px-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[11px] font-mono text-zinc-400">
          PrismOne Studio — Parallel Re-ranking Console
        </span>
        <div className="w-12" />
      </div>

      <div className="p-6 bg-white space-y-5">
        <div className="flex items-center justify-between p-3.5 bg-zinc-50 border border-black/[0.07] rounded-xl text-xs font-medium text-zinc-900">
          <div className="flex items-center gap-2.5">
            <svg
              className="w-4 h-4 text-zinc-400"
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
            <span>How do we delete user data for GDPR compliance without breaking billing history?</span>
          </div>
          <span className="font-mono text-[11px] font-semibold bg-rose-50 text-rose-600 px-2 py-0.5 rounded border border-rose-200/60">
            78ms P50
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
          <div className="space-y-3">
            <div className="flex justify-between font-bold uppercase tracking-wider text-[11px] text-zinc-400 pb-1 border-b border-black/[0.07]">
              <span>Stage 1 · Lexical BM25</span>
              <span>Keywords Only</span>
            </div>
            <div className="p-4 rounded-xl border border-black/[0.07] bg-white space-y-1.5">
              <h5 className="font-semibold text-zinc-900 text-sm">General Data Protection Regulation Compliance Policy</h5>
              <p className="text-zinc-500 text-xs">High-level statutory policy lacking technical steps for audit preservation.</p>
              <span className="font-mono text-[11px] text-zinc-400 block pt-1">Rank #1 · BM25: 19.4</span>
            </div>
            <div className="p-4 rounded-xl border border-black/[0.07] bg-white opacity-75 space-y-1.5">
              <h5 className="font-semibold text-zinc-900 text-sm">User Data Deletion and Audit Ledger Runbook</h5>
              <p className="text-zinc-500 text-xs">Operational engineering steps to delete PII while preserving billing audit ledger.</p>
              <span className="font-mono text-[11px] text-zinc-400 block pt-1">Rank #3 · BM25: 8.6</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between font-bold uppercase tracking-wider text-[11px] text-rose-600 pb-1 border-b border-black/[0.07]">
              <span>Stage 2 · Jev Semantic Decision</span>
              <span>3 Primitives Evaluated</span>
            </div>
            <div className="p-4 rounded-xl border border-rose-300/80 bg-rose-50/20 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <h5 className="font-bold text-zinc-950 text-sm">User Data Deletion and Audit Ledger Runbook</h5>
                <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px] border border-emerald-200">
                  +2 Ranks
                </span>
              </div>
              <p className="text-zinc-600 text-xs">Direct technical match. Score: 0.96 Relevance, 0.95 Audit Preserved.</p>
              <span className="font-mono text-xs font-bold text-rose-600 block">Top Decision · 96.8 / 100</span>
            </div>
            <div className="p-4 rounded-xl border border-black/[0.07] bg-white opacity-85 space-y-1.5">
              <div className="flex items-center justify-between">
                <h5 className="font-semibold text-zinc-900 text-sm">General Data Protection Regulation Compliance Policy</h5>
                <span className="font-mono text-zinc-400 text-[10px]">-1 Rank</span>
              </div>
              <p className="text-zinc-500 text-xs">Demoted because it lacks operational database ledger runbooks.</p>
              <span className="font-mono text-[11px] text-zinc-400 block pt-1">Rank #2 · 62.4 / 100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
