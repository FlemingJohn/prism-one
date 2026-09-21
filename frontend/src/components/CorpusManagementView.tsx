'use client'

const sampleDocuments = [
  {
    id: 'doc_eng_01',
    title: 'User Data Deletion and Audit Ledger Runbook',
    department: 'Engineering',
    tokens: 342,
    status: 'Indexed (FTS5)',
  },
  {
    id: 'doc_eng_02',
    title: 'PostgreSQL Database Connection Pooling Guide',
    department: 'Engineering',
    tokens: 298,
    status: 'Indexed (FTS5)',
  },
  {
    id: 'doc_legal_01',
    title: 'General Data Protection Regulation Compliance Policy',
    department: 'Legal',
    tokens: 312,
    status: 'Indexed (FTS5)',
  },
  {
    id: 'doc_finance_01',
    title: 'Customer Billing History and Invoice Retention Requirements',
    department: 'Finance',
    tokens: 275,
    status: 'Indexed (FTS5)',
  },
  {
    id: 'doc_eng_03',
    title: 'Distributed Cache Invalidation and Event Sourcing',
    department: 'Engineering',
    tokens: 380,
    status: 'Indexed (FTS5)',
  },
  {
    id: 'doc_legal_02',
    title: 'Service Level Agreement and Incident Severity Escalations',
    department: 'Legal',
    tokens: 290,
    status: 'Indexed (FTS5)',
  },
  {
    id: 'doc_finance_02',
    title: 'Quarterly Revenue Recognition Under ASC 606 Standard',
    department: 'Finance',
    tokens: 320,
    status: 'Indexed (FTS5)',
  },
]

export function CorpusManagementView() {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-8 space-y-6 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Enterprise Document Corpus
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Documents synchronized in local SQLite FTS5 table and evaluated by Jev.
          </p>
        </div>

        <button
          onClick={() => window.alert('Document upload drawer activated')}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-rose-700 text-white text-xs font-semibold flex items-center gap-2 shadow-xs hover:opacity-95"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span>Add Document</span>
        </button>
      </div>

      <div className="bg-white/85 backdrop-blur-xl border border-rose-200/80 rounded-3xl overflow-hidden shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="bg-rose-50/50 border-b border-rose-100 text-slate-500 font-mono uppercase text-[11px]">
            <tr>
              <th className="py-3.5 px-5">Document ID</th>
              <th className="py-3.5 px-5">Title</th>
              <th className="py-3.5 px-5">Department</th>
              <th className="py-3.5 px-5">Tokens</th>
              <th className="py-3.5 px-5">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rose-100/60 text-slate-700">
            {sampleDocuments.map((item) => (
              <tr key={item.id} className="hover:bg-rose-50/30 transition-colors">
                <td className="py-3.5 px-5 font-mono text-slate-500">{item.id}</td>
                <td className="py-3.5 px-5 font-semibold text-slate-900">{item.title}</td>
                <td className="py-3.5 px-5">
                  <span className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 font-medium">
                    {item.department}
                  </span>
                </td>
                <td className="py-3.5 px-5 font-mono">{item.tokens}</td>
                <td className="py-3.5 px-5 text-emerald-600 font-medium">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
