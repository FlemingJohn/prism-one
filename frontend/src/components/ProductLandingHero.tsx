'use client'

interface ProductLandingHeroProps {
  onLaunchStudio: () => void
  onExploreCorpus: () => void
}

export function ProductLandingHero({
  onLaunchStudio,
  onExploreCorpus,
}: ProductLandingHeroProps) {
  return (
    <section className="text-center space-y-6 max-w-3xl mx-auto pt-4">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700 shadow-xs">
        <svg
          className="w-3.5 h-3.5 text-rose-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
        <span>TypeSafe AI System One Architecture</span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
        Fuzzy decisions in code.{' '}
        <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 bg-clip-text text-transparent">
          Calibrated under 100ms.
        </span>
      </h1>

      <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
        Autonomous software cannot depend on 5-second autoregressive text generation.
        PrismOne embeds TypeSafe&apos;s Jev model directly into code for high-throughput
        semantic re-ranking, document classification, and zero-violation schema enforcement.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
        <button
          onClick={onLaunchStudio}
          className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-600 to-rose-700 text-white font-semibold text-sm shadow-lg shadow-rose-500/25 transition-all flex items-center gap-2 hover:opacity-95"
        >
          <span>Launch Search Studio</span>
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
        <button
          onClick={onExploreCorpus}
          className="px-6 py-3.5 rounded-2xl bg-white/90 border border-rose-200 text-rose-900 font-semibold text-sm hover:bg-rose-50/60 transition-colors shadow-xs"
        >
          Explore Document Corpus
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 text-left">
        <div className="bg-white/85 backdrop-blur-xl border border-rose-200/80 rounded-3xl p-6 text-center space-y-1 shadow-xs">
          <div className="text-3xl font-extrabold font-mono text-slate-900">84ms</div>
          <div className="text-xs font-bold uppercase tracking-wider text-rose-700">P50 Latency</div>
          <p className="text-[11px] text-slate-500">Real-time user keystroke speed</p>
        </div>
        <div className="bg-white/85 backdrop-blur-xl border border-rose-200/80 rounded-3xl p-6 text-center space-y-1 shadow-xs">
          <div className="text-3xl font-extrabold font-mono text-rose-600">0%</div>
          <div className="text-xs font-bold uppercase tracking-wider text-rose-700">Schema Errors</div>
          <p className="text-[11px] text-slate-500">Mathematically typed outputs</p>
        </div>
        <div className="bg-white/85 backdrop-blur-xl border border-rose-200/80 rounded-3xl p-6 text-center space-y-1 shadow-xs">
          <div className="text-3xl font-extrabold font-mono text-slate-900">$0.042</div>
          <div className="text-xs font-bold uppercase tracking-wider text-rose-700">Per 1M Input Tokens</div>
          <p className="text-[11px] text-slate-500">100x cheaper than LLMs</p>
        </div>
        <div className="bg-white/85 backdrop-blur-xl border border-rose-200/80 rounded-3xl p-6 text-center space-y-1 shadow-xs">
          <div className="text-3xl font-extrabold font-mono text-emerald-600">FREE</div>
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Output Tokens</div>
          <p className="text-[11px] text-slate-500">Outputs too cheap to meter</p>
        </div>
      </div>
    </section>
  )
}
