'use client'

export function CalibrationAnalyticsView() {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-8 space-y-6 w-full">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          RLCD Calibration Analytics
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Statistical verification of Jev System One reported confidence vs empirical test accuracy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/85 backdrop-blur-xl border border-rose-200/80 rounded-3xl p-6 space-y-4 shadow-xs">
          <h3 className="font-bold text-slate-900 text-sm">Confidence vs True Accuracy</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Unlike traditional LLMs which exhibit severe overconfidence, RLCD forces a 90%
            confidence score to accurately represent 90% empirical precision.
          </p>
          <div className="space-y-3 pt-2">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span>90% - 100% Confidence Bracket:</span>
                <span className="text-emerald-600 font-bold">98.2% Accuracy</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '98.2%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span>70% - 90% Confidence Bracket:</span>
                <span className="text-rose-600 font-bold">81.4% Accuracy</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-rose-500 to-pink-600 rounded-full"
                  style={{ width: '81.4%' }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span>Under 70% (Escalate to Human):</span>
                <span className="text-amber-600 font-bold">58.0% Accuracy</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '58%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/85 backdrop-blur-xl border border-rose-200/80 rounded-3xl p-6 space-y-4 shadow-xs">
          <h3 className="font-bold text-slate-900 text-sm">Decision Latency Distribution</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Non-autoregressive parallel sampling produces stable latency distributions
            independent of sequence length.
          </p>
          <div className="grid grid-cols-3 gap-3 pt-4 text-center">
            <div className="p-4 bg-white/80 rounded-2xl border border-rose-100">
              <div className="text-[11px] font-mono text-slate-400 uppercase">p50</div>
              <div className="text-2xl font-bold font-mono text-slate-800">72ms</div>
              <div className="text-[10px] text-slate-400 mt-1">Keystroke fast</div>
            </div>
            <div className="p-4 bg-white/80 rounded-2xl border border-rose-100">
              <div className="text-[11px] font-mono text-slate-400 uppercase">p95</div>
              <div className="text-2xl font-bold font-mono text-rose-600">88ms</div>
              <div className="text-[10px] text-slate-400 mt-1">SLA guarantee</div>
            </div>
            <div className="p-4 bg-white/80 rounded-2xl border border-rose-100">
              <div className="text-[11px] font-mono text-slate-400 uppercase">p99</div>
              <div className="text-2xl font-bold font-mono text-slate-800">105ms</div>
              <div className="text-[10px] text-slate-400 mt-1">Tail latency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
