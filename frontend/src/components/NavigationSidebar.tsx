'use client'

interface NavigationSidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

export function NavigationSidebar({
  isCollapsed,
  onToggle,
}: NavigationSidebarProps) {
  const widthClass = isCollapsed ? "w-20" : "w-64"

  return (
    <aside
      className={`${widthClass} border-r border-pink-100 bg-white/75 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 z-30 shrink-0`}
    >
      <div className="p-3.5 space-y-5">
        <div className="flex items-center justify-between px-2 pt-1">
          {!isCollapsed && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Workspace
            </span>
          )}
          <button
            onClick={onToggle}
            className="p-1.5 rounded-xl hover:bg-pink-50 text-slate-400 hover:text-primary-600 transition-colors ml-auto"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
              <path d="m14 9-3 3 3 3" />
            </svg>
          </button>
        </div>

        <nav className="space-y-1.5">
          <SidebarLink
            label="Re-ranking Studio"
            isActive={true}
            isCollapsed={isCollapsed}
            iconPath="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
          <SidebarLink
            label="Document Corpus"
            isActive={false}
            isCollapsed={isCollapsed}
            iconPath="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
          />
          <SidebarLink
            label="Continuous Triage"
            isActive={false}
            isCollapsed={isCollapsed}
            iconPath="M22 12h-4l-3 9L9 3l-3 9H2"
          />
          <SidebarLink
            label="Calibration Evals"
            isActive={false}
            isCollapsed={isCollapsed}
            iconPath="M12 20V10M18 20V4M6 20v-4"
          />
        </nav>
      </div>

      {!isCollapsed && <SidebarFooter />}
    </aside>
  )
}

function SidebarLink({
  label,
  isActive,
  isCollapsed,
  iconPath,
}: {
  label: string
  isActive: boolean
  isCollapsed: boolean
  iconPath: string
}) {
  const activeClass = isActive
    ? "bg-gradient-to-r from-pink-50 to-rose-50 text-primary-600 font-semibold border-pink-200/80 shadow-xs"
    : "text-slate-600 hover:bg-pink-50/60 hover:text-primary-600 font-medium border-transparent"

  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl border text-xs transition-colors ${activeClass}`}
      title={isCollapsed ? label : undefined}
    >
      <svg
        className="w-4 h-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={iconPath} />
      </svg>
      {!isCollapsed && <span>{label}</span>}
    </a>
  )
}

function SidebarFooter() {
  return (
    <div className="p-4 m-3 rounded-2xl bg-gradient-to-b from-pink-50/50 to-pink-100/30 border border-pink-200/60 text-xs space-y-2">
      <div className="flex items-center justify-between font-semibold text-slate-700">
        <span>Corpus Index</span>
        <span className="font-mono text-primary-600">7 docs</span>
      </div>
      <div className="text-[11px] text-slate-500 flex justify-between">
        <span>Index Engine:</span>
        <span className="font-mono text-slate-700">SQLite FTS5</span>
      </div>
      <div className="text-[11px] text-slate-500 flex justify-between">
        <span>Jev Sampling:</span>
        <span className="font-mono text-emerald-600 font-medium">Parallel</span>
      </div>
    </div>
  )
}
