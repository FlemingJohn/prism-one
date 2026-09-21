'use client'

import { NavigationTab } from '@/types/NavigationTab'
import { ProductBenchmarksTable } from './ProductBenchmarksTable'
import { ProductLandingHero } from './ProductLandingHero'
import { ProductPrimitivesSection } from './ProductPrimitivesSection'

interface ProductLandingViewProps {
  onNavigate: (tab: NavigationTab) => void
}

export function ProductLandingView({ onNavigate }: ProductLandingViewProps) {
  function handleLaunchStudio() {
    onNavigate('studio')
  }

  function handleExploreCorpus() {
    onNavigate('corpus')
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-12 pb-24 space-y-20 w-full">
      <ProductLandingHero
        onLaunchStudio={handleLaunchStudio}
        onExploreCorpus={handleExploreCorpus}
      />
      <ProductPrimitivesSection />
      <ProductBenchmarksTable />
      <section className="rounded-3xl p-10 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-rose-600/20">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-bold tracking-tight">Ready to test real queries?</h3>
          <p className="text-xs text-rose-100 max-w-lg">
            Open the Search Studio to run live queries against our seeded enterprise document corpus
            and observe parallel BM25 and Jev evaluations.
          </p>
        </div>
        <button
          onClick={handleLaunchStudio}
          className="px-8 py-4 rounded-2xl bg-white text-rose-700 font-bold text-sm hover:bg-rose-50 transition-all shadow-md shrink-0"
        >
          Open Search Studio Now
        </button>
      </section>
    </div>
  )
}
