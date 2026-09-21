'use client'

import { NavigationTab } from '@/types/NavigationTab'

interface ApplicationHeaderProps {
  activeTab: NavigationTab
  onTabChange: (tab: NavigationTab) => void
}

export function ApplicationHeader({
  activeTab,
  onTabChange,
}: ApplicationHeaderProps) {
  function getTabClassName(tab: NavigationTab) {
    if (activeTab === tab) {
      return 'px-3.5 py-1.5 rounded-lg font-semibold bg-white text-zinc-900 shadow-xs text-xs transition-all'
    }
    return 'px-3.5 py-1.5 rounded-lg font-medium text-zinc-600 hover:text-zinc-900 text-xs transition-colors'
  }

  return (
    <header className="h-[68px] px-8 flex items-center justify-between sticky top-0 z-50 bg-white/85 backdrop-blur-2xl border-b border-black/[0.07]">
      <div
        className="flex items-center gap-3 cursor-pointer select-none"
        onClick={() => onTabChange('landing')}
      >
        <div className="w-9 h-9 rounded-xl p-[1px] bg-gradient-to-tr from-rose-500 via-pink-600 to-amber-400 shadow-md shadow-rose-500/20">
          <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
            <svg
              className="w-5 h-5 text-rose-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold tracking-tight text-zinc-950">
            PrismOne
          </span>
          <span className="text-[10px] font-semibold font-mono tracking-wider px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200/60">
            SYSTEM ONE
          </span>
        </div>
      </div>

      <nav className="flex items-center gap-1 bg-black/[0.03] p-1 rounded-xl">
        <button
          onClick={() => onTabChange('landing')}
          className={getTabClassName('landing')}
        >
          Overview
        </button>
        <button
          onClick={() => onTabChange('studio')}
          className={getTabClassName('studio')}
        >
          Search Studio
        </button>
      </nav>

      <div className="flex items-center gap-4 text-xs">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-xs shadow-emerald-500" />
          <span className="font-mono text-[11px]">84ms P50</span>
        </div>

        <button
          onClick={() => onTabChange('studio')}
          className="metallic-button px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2"
        >
          <span>Launch Studio</span>
          <svg
            className="w-3.5 h-3.5"
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
    </header>
  )
}
