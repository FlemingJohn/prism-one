'use client'

interface SearchInputBarProps {
  query: string
  onQueryChange: (query: string) => void
  selectedDepartment: string
  onDepartmentChange: (department: string) => void
  onSearch: () => void
  isLoading: boolean
}

const DEPARTMENTS = ["All", "Engineering", "Legal", "Finance"]

export function SearchInputBar({
  query,
  onQueryChange,
  selectedDepartment,
  onDepartmentChange,
  onSearch,
  isLoading,
}: SearchInputBarProps) {
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      onSearch()
    }
  }

  return (
    <section className="glass-card rounded-3xl p-6 glow-ring border border-pink-200/80 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-600">
          <svg
            className="w-4 h-4 text-primary-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          <span>Query Console (Parallel Speculative Fan-Out)</span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">
          Target Model: jev-latest
        </span>
      </div>

      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question or enter user intent..."
          className="w-full pl-5 pr-36 py-4 bg-white/90 border border-pink-200 rounded-2xl text-slate-900 text-sm font-medium focus:outline-none shadow-xs transition-all placeholder:text-slate-400"
        />
        <button
          onClick={onSearch}
          disabled={isLoading}
          className="absolute right-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-rose-400 hover:from-primary-600 hover:to-rose-500 text-white rounded-xl text-xs font-semibold transition-all shadow-sm shadow-primary-500/20 flex items-center gap-2 disabled:opacity-50"
        >
          <span>{isLoading ? "Evaluating..." : "Re-rank"}</span>
          <span className="font-mono text-[11px] bg-white/20 px-1.5 py-0.5 rounded">
            84ms
          </span>
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 pt-1">
        <div className="flex items-center gap-3">
          <span className="font-medium text-slate-700">Filter Scope:</span>
          <div className="flex items-center gap-1.5">
            {DEPARTMENTS.map((department) => (
              <DepartmentPill
                key={department}
                label={department}
                isSelected={selectedDepartment === department}
                onSelect={() => onDepartmentChange(department)}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="text-slate-500">Min Confidence:</span>
          <span className="px-2 py-0.5 rounded-md bg-white border border-pink-200 text-primary-600 font-bold">
            85%
          </span>
        </div>
      </div>
    </section>
  )
}

function DepartmentPill({
  label,
  isSelected,
  onSelect,
}: {
  label: string
  isSelected: boolean
  onSelect: () => void
}) {
  const pillClass = isSelected
    ? "bg-pink-50 text-primary-600 border-primary-200 font-semibold"
    : "bg-white hover:bg-slate-50 text-slate-600 border-slate-200"

  return (
    <button
      onClick={onSelect}
      className={`px-2.5 py-1 rounded-lg border text-[11px] transition-colors ${pillClass}`}
    >
      {label}
    </button>
  )
}
