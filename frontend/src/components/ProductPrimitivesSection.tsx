'use client'

export function ProductPrimitivesSection() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Three Fast Primitives
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Typed, common-sense decision functions designed to be called directly in code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/85 backdrop-blur-xl border border-rose-200/80 rounded-3xl p-7 space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-lg">Score</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Rates content against ordered descriptive levels (Irrelevant, Partial, Direct Solution).
            Returns level, full probability spectrum, and calibrated confidence.
          </p>
          <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100 font-mono text-[11px] text-rose-900">
            score(doc, query, levels) &rarr; Spectrum
          </div>
        </div>

        <div className="bg-white/85 backdrop-blur-xl border border-rose-200/80 rounded-3xl p-7 space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-lg">Choice</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Classifies unstructured state into a closed category set (Engineering, Legal, Billing)
            accompanied by calibrated probabilities across all alternatives.
          </p>
          <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100 font-mono text-[11px] text-rose-900">
            choice(doc, categories) &rarr; Distribution
          </div>
        </div>

        <div className="bg-white/85 backdrop-blur-xl border border-rose-200/80 rounded-3xl p-7 space-y-4 shadow-xs">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-900 text-lg">Noul</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            A probabilistic boolean test. Evaluates whether a specific proposition is satisfied
            and returns an honest probability float between 0.0 and 1.0.
          </p>
          <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100 font-mono text-[11px] text-rose-900">
            noul(doc, &quot;preserves_audit&quot;) &rarr; 0.95
          </div>
        </div>
      </div>
    </section>
  )
}
