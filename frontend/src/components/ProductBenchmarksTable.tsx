'use client'

export function ProductBenchmarksTable() {
  return (
    <section className="bg-white/85 backdrop-blur-xl border border-rose-200/80 rounded-3xl p-8 space-y-6 shadow-xs">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Generative LLMs vs System One
        </h2>
        <p className="text-xs text-slate-500">
          Comparing autoregressive chatbots with non-autoregressive decision models.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-rose-200/60 font-mono uppercase text-[11px] text-slate-500 bg-rose-50/30">
            <tr>
              <th className="py-3 px-4">Evaluation Criterion</th>
              <th className="py-3 px-4 text-slate-400">Autoregressive LLM (GPT-4 / Claude)</th>
              <th className="py-3 px-4 text-rose-700 font-bold">TypeSafe Jev System One</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rose-100/60">
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-800">Sampling Mechanism</td>
              <td className="py-3 px-4 text-slate-500">Token-by-token sequential loop</td>
              <td className="py-3 px-4 text-rose-700 font-semibold font-mono">Parallel speculative scoring</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-800">P50 Decision Latency</td>
              <td className="py-3 px-4 text-slate-500 font-mono">2,500ms - 6,000ms</td>
              <td className="py-3 px-4 text-emerald-600 font-bold font-mono">70ms - 95ms (40x faster)</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-800">Schema Error Rate</td>
              <td className="py-3 px-4 text-slate-500 font-mono">2% - 8% json parsing failures</td>
              <td className="py-3 px-4 text-emerald-600 font-bold font-mono">0% (Mathematically guaranteed)</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-800">Token Pricing</td>
              <td className="py-3 px-4 text-slate-500 font-mono">$5.00+ / 1M output tokens</td>
              <td className="py-3 px-4 text-emerald-600 font-bold font-mono">$0.042 / 1M in, outputs FREE</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-800">Calibration</td>
              <td className="py-3 px-4 text-slate-500">Severely overconfident</td>
              <td className="py-3 px-4 text-rose-700 font-semibold font-mono">RLCD Empirical alignment</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
