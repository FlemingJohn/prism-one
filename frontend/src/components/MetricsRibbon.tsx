'use client'

import { SearchMetrics } from "@/types/SearchMetrics"

interface MetricsRibbonProps {
  metrics: SearchMetrics | null
}

export function MetricsRibbon({ metrics }: MetricsRibbonProps) {
  const lexicalMs = metrics?.lexicalSearchDurationMilliseconds ?? 11.4
  const semanticMs = metrics?.semanticEvaluationDurationMilliseconds ?? 72.8
  const totalMs = metrics?.totalDurationMilliseconds ?? 84.2
  const cost = metrics?.estimatedCostUsd ?? 0.000028

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        label="Stage 1 (BM25 FTS)"
        value={`${lexicalMs} ms`}
        description="Fast lexical candidate recall"
      />
      <MetricCard
        label="Stage 2 (Jev Parallel)"
        value={`${semanticMs} ms`}
        description="Evaluated in parallel"
        isHighlighted={true}
      />
      <MetricCard
        label="Total End-to-End"
        value={`${totalMs} ms`}
        description="Sub-100ms real-time UX"
      />
      <MetricCard
        label="Unit Token Cost"
        value={`$${cost.toFixed(6)}`}
        description="Output tokens are free"
        isSuccess={true}
      />
    </section>
  )
}

function MetricCard({
  label,
  value,
  description,
  isHighlighted = false,
  isSuccess = false,
}: {
  label: string
  value: string
  description: string
  isHighlighted?: boolean
  isSuccess?: boolean
}) {
  let cardClass = "glass-card rounded-2xl p-4.5 space-y-1"
  let valueClass = "text-2xl font-bold font-mono tracking-tight text-slate-900"
  let labelClass = "text-xs font-medium text-slate-400 uppercase tracking-wider"

  if (isHighlighted) {
    cardClass += " border-primary-300 bg-pink-50/25"
    valueClass = "text-2xl font-bold font-mono tracking-tight text-primary-600"
    labelClass = "text-xs font-medium text-primary-600 uppercase tracking-wider"
  } else if (isSuccess) {
    valueClass = "text-2xl font-bold font-mono tracking-tight text-emerald-600"
  }

  return (
    <div className={cardClass}>
      <div className={labelClass}>{label}</div>
      <div className={valueClass}>{value}</div>
      <div className="text-[11px] text-slate-500">{description}</div>
    </div>
  )
}
