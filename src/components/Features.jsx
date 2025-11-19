import { Database, BarChart3, Layers, ShieldCheck, Sparkles, Workflow } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Workflow className="h-5 w-5" />, 
      title: 'Scenario orchestration',
      desc: 'Generate and compare thousands of hybrid configurations with traceable assumptions and versioning.'
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: 'Bankable data foundation',
      desc: 'Ingest resource data, prices, and grid topology to build consistent, audit-ready studies.'
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: 'Decision-grade outputs',
      desc: 'From LCOE to congestion risk, deliver dashboards aligned to investment committee expectations.'
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: 'Hybrid-native models',
      desc: 'Co-optimize solar, wind, storage and interconnection under market and grid constraints.'
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: 'Governance & transparency',
      desc: 'Every result is explainable with inputs, versions, and lineage preserved by design.'
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'AI assistance',
      desc: 'Ask natural questions about scenarios and let the platform surface the most material drivers.'
    },
  ]

  return (
    <section id="platform" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(37,99,235,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">A platform built for energy decision makers</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Bring rigor and speed to early-stage development with a modern workflow engineered for the grid.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6 text-slate-300">
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-600/20 text-blue-300 p-2 ring-1 ring-inset ring-blue-500/20">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
