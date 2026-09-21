'use client'

export function ApplicationHeader() {
  return (
    <header className="glass-nav h-16 px-6 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-primary-500 to-rose-400 p-[1px] shadow-sm shadow-primary-500/20">
          <div className="h-full w-full bg-white rounded-[11px] flex items-center justify-center">
            <svg
              className="w-5 h-5 text-primary-500"
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
          <span className="text-[11px] font-semibold text-primary-600 bg-primary-50 border border-primary-200/80 px-2 py-0.5 rounded-full font-mono">
            JEV SYSTEM ONE
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs">
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50/80 border border-emerald-200 text-emerald-700 font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px]">jev-latest</span>
          <span className="text-slate-300">|</span>
          <span className="font-mono text-[11px] text-emerald-800">84ms</span>
        </div>

        <a
          href="https://docs.typesafe.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-slate-500 hover:text-primary-600 transition-colors font-medium"
        >
          <span>Docs</span>
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>

        <div className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-medium shadow-xs">
          API Ready
        </div>
      </div>
    </header>
  )
}
