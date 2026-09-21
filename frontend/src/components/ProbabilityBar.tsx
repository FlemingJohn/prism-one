'use client'

interface ProbabilityBarProps {
  label: string
  probability: number
  isPrimary?: boolean
}

export function ProbabilityBar({
  label,
  probability,
  isPrimary = false,
}: ProbabilityBarProps) {
  const percentage = Math.round(probability * 100)
  const barClass = isPrimary
    ? "h-full bg-gradient-to-r from-primary-500 to-rose-400 rounded-full"
    : "h-full bg-slate-300 rounded-full"

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[11px]">
        <span className="text-slate-600">{label}</span>
        <span className="font-mono font-semibold text-slate-800">
          {percentage}%
        </span>
      </div>
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={barClass}
          style={{ width: `${Math.max(percentage, 2)}%` }}
        />
      </div>
    </div>
  )
}
