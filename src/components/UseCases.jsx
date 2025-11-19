export default function UseCases() {
  const cases = [
    {
      title: 'Greenfield screening',
      desc: 'Rapidly evaluate site, resource, and interconnection fit to prioritize development.'
    },
    {
      title: 'Repower & hybridization',
      desc: 'Assess retrofit potential and grid impacts to extend asset value.'
    },
    {
      title: 'Transmission-aware planning',
      desc: 'Quantify congestion, curtailment, and upgrade pathways across scenarios.'
    },
    {
      title: 'Investment committees',
      desc: 'Package decision-grade studies with clear assumptions and sensitivities.'
    },
  ]

  return (
    <section id="use-cases" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold text-white">Where Gridbrid fits</h2>
            <p className="mt-3 text-slate-300">From screening to investment approval, align teams around transparent, versioned studies that survive diligence.</p>
            <div className="mt-6 rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5 text-sm text-slate-300">
              <p className="text-slate-400">Outputs include:</p>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-slate-300">
                <li className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-2">LCOE / IRR / NPV</li>
                <li className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-2">Grid curtailment</li>
                <li className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-2">Congestion risk</li>
                <li className="rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-2">Upgrade exposure</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {cases.map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5">
                <h3 className="text-white font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
