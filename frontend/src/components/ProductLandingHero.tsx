'use client'

import { ProductPreviewFrame } from './ProductPreviewFrame'

interface ProductLandingHeroProps {
  onLaunchStudio: () => void
}

export function ProductLandingHero({ onLaunchStudio }: ProductLandingHeroProps) {
  return (
    <section className="text-center max-w-4xl mx-auto space-y-8">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-semibold text-rose-600 shadow-xs">
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
        <span>TypeSafe AI · System One Architecture</span>
      </div>

      <h1 className="text-5xl sm:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.08]">
        Fuzzy decisions in code. <br />
        <span className="metallic-text">Calibrated under 100ms.</span>
      </h1>

      <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto font-normal">
        PrismOne embeds TypeSafe&apos;s Jev model directly into code for high-throughput
        semantic re-ranking, document classification, and zero-violation schema enforcement.
      </p>

      <div className="flex items-center justify-center gap-3 pt-2">
        <button
          onClick={onLaunchStudio}
          className="metallic-button px-7 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2"
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
      </div>

      <ProductPreviewFrame />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
        <div className="bg-white border border-black/[0.07] rounded-2xl p-7 space-y-2 shadow-xs">
          <h4 className="text-base font-bold text-zinc-950 tracking-tight">Sub-100ms Latency</h4>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Non-autoregressive parallel scoring eliminates the slow token-by-token loop,
            guaranteeing real-time keystroke speed.
          </p>
          <span className="font-mono text-xs font-semibold text-rose-600 block pt-1">84ms P50 Latency</span>
        </div>

        <div className="bg-white border border-black/[0.07] rounded-2xl p-7 space-y-2 shadow-xs">
          <h4 className="text-base font-bold text-zinc-950 tracking-tight">Zero Type Errors</h4>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Structured decisions with mathematical guarantees. Output fields match your schema with 0% JSON syntax failures.
          </p>
          <span className="font-mono text-xs font-semibold text-rose-600 block pt-1">0% Schema Violations</span>
        </div>

        <div className="bg-white border border-black/[0.07] rounded-2xl p-7 space-y-2 shadow-xs">
          <h4 className="text-base font-bold text-zinc-950 tracking-tight">100x Cost Reduction</h4>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Input tokens billed at $0.042 per million, while decision output tokens are completely free. High volume is too cheap to meter.
          </p>
          <span className="font-mono text-xs font-semibold text-rose-600 block pt-1">$0.042 / 1M Input Tokens</span>
        </div>
      </div>
    </section>
  )
}
