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
      return 'px-4 py-1.5 rounded-xl font-semibold bg-rose-600 text-white shadow-xs'
    }
    return 'px-4 py-1.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-rose-50/60 transition-colors'
  }

  return (
    <header className="bg-white/85 backdrop-blur-xl border-b border-rose-200/60 h-16 px-6 flex items-center justify-between sticky top-0 z-40">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => onTabChange('landing')}
      >
        <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-rose-500 via-pink-600 to-amber-400 p-[1px] shadow-sm shadow-rose-500/25">
          <div className="h-full w-full bg-white rounded-[11px] flex items-center justify-center">
            <svg
              className="w-5 h-5 text-rose-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
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
          <span className="font-bold text-slate-900 tracking-tight text-lg">
            PrismOne
          </span>
          <span className="text-[10px] font-semibold bg-rose-50 border border-rose-200 text-rose-700 px-2 py-0.5 rounded-full font-mono uppercase tracking-wider">
            SYSTEM ONE
          </span>
        </div>
      </div>

      <nav className="flex items-center gap-1 bg-white/80 p-1 rounded-2xl border border-rose-200/60 shadow-xs text-xs font-medium">
        <button
          onClick={() => onTabChange('landing')}
          className={getTabClassName('landing')}
        >
          Product Overview
        </button>
        <button
          onClick={() => onTabChange('studio')}
          className={getTabClassName('studio')}
        >
          Search Studio
        </button>
        <button
          onClick={() => onTabChange('corpus')}
          className={getTabClassName('corpus')}
        >
          Document Corpus
        </button>
        <button
          onClick={() => onTabChange('evals')}
          className={getTabClassName('evals')}
        >
          RLCD Calibration
        </button>
      </nav>

      <div className="flex items-center gap-3 text-xs">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px]">jev-system-one</span>
          <span className="text-slate-300">|</span>
          <span className="font-mono text-[11px] text-emerald-800 font-semibold">
            84ms P50
          </span>
        </div>

        <button
          onClick={() => onTabChange('studio')}
          className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-rose-500 to-rose-700 text-white font-medium text-xs flex items-center gap-1.5 shadow-xs hover:opacity-95"
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
