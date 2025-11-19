import { Building2, Factory, PlugZap, Scale, LineChart } from 'lucide-react'

export default function UseCases() {
  const cases = [
    {
      title: 'Due diligence for acquisitions',
      desc: 'Decision-grade studies for power plant buy/sell—validate assumptions, sensitivities, and downside cases with auditable models.',
      icon: Building2,
    },
    {
      title: 'C&I hybrid development',
      desc: 'Design PV + storage + genset hybrids for commercial & industrial consumers with tariff-aware dispatch and PPA fit.',
      icon: Factory,
    },
    {
      title: 'Hybrid plants for grid revenue',
      desc: 'Greenfield/brownfield configurations optimized for interconnection limits and multi-market revenue stacking.',
      icon: PlugZap,
    },
    {
      title: 'Policy & market rule simulation',
      desc: 'Forecast asset behavior under changing market rules, constraints, and pricing regimes to de-risk compliance.',
      icon: Scale,
    },
    {
      title: 'Asset management & portfolio balancing',
      desc: 'Scenario analysis for fleet rebalancing, augmentations, and hedging—optimize KPIs across risk/return.',
      icon: LineChart,
    },
  ]

  return (
    <section id="use-cases" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
              Utilities adoption
            </div>
            <h2 className="mt-3 text-3xl font-bold text-white">Where Gridbrid fits</h2>
            <p className="mt-3 text-slate-300">Purpose-built for utility business units—from diligence to development to operations—anchored in transparent, versioned studies.</p>
            <div className="mt-6 rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5 text-sm text-slate-300">
              <p className="text-slate-400">Common KPIs:</p>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-slate-300">
                <li className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-2">IRR / NPV / LCOE</li>
                <li className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-2">Grid curtailment</li>
                <li className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-2">Reliability / Resilience</li>
                <li className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-2">Emissions impact</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {cases.map((c) => {
              const Icon = c.icon
              return (
                <div key={c.title} className="group rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5 transition-colors hover:border-emerald-400/40 hover:bg-slate-900/70">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg border border-slate-700/60 bg-slate-950 p-2 text-emerald-300 group-hover:border-emerald-400/40">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-white font-semibold">{c.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{c.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
