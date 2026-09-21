'use client'

import { NavigationTab } from '@/types/NavigationTab'
import { ProductLandingHero } from './ProductLandingHero'

interface ProductLandingViewProps {
  onNavigate: (tab: NavigationTab) => void
}

export function ProductLandingView({ onNavigate }: ProductLandingViewProps) {
  function handleLaunchStudio() {
    onNavigate('studio')
  }

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-20 w-full">
        <ProductLandingHero onLaunchStudio={handleLaunchStudio} />
      </div>

      <footer className="border-t border-black/[0.07] px-8 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 bg-white gap-4">
        <div>PrismOne Decision Studio · Powered by TypeSafe AI Jev</div>
        <div className="flex items-center gap-6 font-mono text-[11px]">
          <span>System One Architecture</span>
          <span>RLCD Calibrated</span>
          <span>SQLite FTS5</span>
        </div>
      </footer>
    </div>
  )
}
