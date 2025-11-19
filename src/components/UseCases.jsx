import { Building2, Factory, DollarSign, Boxes, ClipboardList } from 'lucide-react'

export default function UseCases() {
  const stakeholderIcon = {
    Utilities: Building2,
    Investors: DollarSign,
    Suppliers: Boxes,
    Consultants: ClipboardList,
    'C&I Consumers': Factory,
  }

  const groups = [
    {
      context: 'Microgrids for C&I consumers',
      badgeColor: 'emerald',
      stakeholders: ['C&I Consumers', 'Utilities', 'Investors', 'Suppliers', 'Consultants'],
      stages: [
        {
          name: 'Pre‑feasibility',
          items: {
            'C&I Consumers': [
              'Load profiling & tariff fit',
              'Site readiness & space constraints',
              'Business continuity targets',
            ],
            Utilities: ['Interconnection options', 'Protection/relay considerations', 'Backfeed & islanding policy'],
            Investors: ['Early IRR/LCOE screen', 'Sensitivity bands (capex/opex)', 'Tenor & cost of capital fit'],
            Suppliers: ['Bill of materials rough-in', 'Lead times & warranties', 'Local code alignment'],
            Consultants: ['Baseline study scope', 'Data requirements & QA plan', 'Stakeholder mapping'],
          },
        },
        {
          name: 'Feasibility',
          items: {
            'C&I Consumers': ['Dispatch against tariff & TOU', 'N-1 resilience & outage support', 'CO₂ reduction pathway'],
            Utilities: ['Grid impact & curtailment risk', 'Protection settings & studies', 'Interconnection queue readiness'],
            Investors: ['Financial model w/ scenarios', 'NPV/IRR vs. PPAs/ESAs', 'Contract structure options'],
            Suppliers: ['Detailed engineering inputs', 'Performance guarantees', 'Commissioning plan'],
            Consultants: ['Study pack w/ assumptions', 'Version control & audit trail', 'Validation against standards'],
          },
        },
        {
          name: 'Due diligence',
          items: {
            'C&I Consumers': ['Assumption book & backups', 'O&M obligations & SLAs', 'Business case sign‑off'],
            Utilities: ['Compliance & interop checks', 'Anti‑islanding & safety cases', 'Metering & settlement'],
            Investors: ['Downside cases & mitigants', 'Covenants & DSCR testing', 'Third‑party review notes'],
            Suppliers: ['Quality plan & FAT/SAT', 'Spare strategy & warranties', 'Change order governance'],
            Consultants: ['Independent review memo', 'Benchmarking & peer comps', 'Risk register & owner’s rep'],
          },
        },
        {
          name: 'Business development',
          items: {
            'C&I Consumers': ['Executive-ready deck', 'Value proposition by site', 'Roll‑out roadmap'],
            Utilities: ['Programs & tariffs alignment', 'Grid services participation', 'Community/stakeholder comms'],
            Investors: ['Investment memo & IC pack', 'Co‑investment structures', 'Portfolio fit & hedging'],
            Suppliers: ['Commercial offer & T&Cs', 'Delivery timelines', 'Post‑COD support model'],
            Consultants: ['Implementation PMO plan', 'Measurement & verification', 'Governance cadence'],
          },
        },
      ],
    },
    {
      context: 'Utility‑scale power plants',
      badgeColor: 'blue',
      stakeholders: ['Utilities', 'Investors', 'Suppliers', 'Consultants'],
      stages: [
        {
          name: 'Pre‑feasibility',
          items: {
            Utilities: ['Resource & siting screen', 'Interconnection capacity', 'Congestion & curtailment risk'],
            Investors: ['Market stack preview', 'Capex/opex envelopes', 'Permitting timeline risk'],
            Suppliers: ['High‑level EPC concept', 'Equipment availability', 'Grid code constraints'],
            Consultants: ['Data room checklist', 'Study scope definition', 'QA/QC approach'],
          },
        },
        {
          name: 'Feasibility',
          items: {
            Utilities: ['Network studies (load flow, EMT)', 'Upgrade pathways & costs', 'Grid service participation'],
            Investors: ['Revenue stacking scenarios', 'IRR/NPV with sensitivities', 'PPA vs. merchant mix'],
            Suppliers: ['Detailed design inputs', 'Performance guarantees', 'Construction sequencing'],
            Consultants: ['Assumption book & traceability', 'Independent validation', 'Standards compliance'],
          },
        },
        {
          name: 'Due diligence',
          items: {
            Utilities: ['Compliance to grid code', 'Operational readiness', 'Settlement & metering'],
            Investors: ['Contract risk review', 'Downside/black swan cases', 'ESG & permitting posture'],
            Suppliers: ['FAT/SAT plans & spares', 'Warranty & liquidated damages', 'Interface risk register'],
            Consultants: ['Owner’s engineer memo', 'Benchmarking & peer review', 'Risk & mitigation plan'],
          },
        },
        {
          name: 'Business development',
          items: {
            Utilities: ['Program enablement', 'Stakeholder communications', 'Portfolio alignment'],
            Investors: ['IC materials & data room', 'Hedging & risk policy', 'Growth pipeline view'],
            Suppliers: ['Commercial proposal', 'Delivery & commissioning plan', 'Lifecycle service model'],
            Consultants: ['PMO & governance', 'M&V methodology', 'Reporting templates'],
          },
        },
      ],
    },
  ]

  const badgeColorClass = (color) => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-400'
      case 'blue':
        return 'bg-blue-400'
      default:
        return 'bg-emerald-400'
    }
  }

  return (
    <section id="use-cases" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
            Use cases by stage & stakeholder
          </div>
          <h2 className="mt-3 text-3xl font-bold text-white">From pre‑feasibility to business development</h2>
          <p className="mt-3 max-w-2xl text-slate-300">Designed for microgrids and utility‑scale projects. Align utilities, investors, suppliers, consultants, and C&I owners with transparent, versioned studies.</p>
        </div>

        {groups.map((group) => (
          <div key={group.context} className="mb-14">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{group.context}</h3>
              <div className={`hidden sm:flex items-center gap-2 text-xs text-slate-400`}>
                {group.stakeholders.map((s) => {
                  const Icon = stakeholderIcon[s]
                  return (
                    <span key={s} className="inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/50 px-3 py-1.5">
                      <Icon className="h-4 w-4 text-emerald-300" />
                      {s}
                    </span>
                  )
                })}
              </div>
            </div>

            <div className="grid gap-6">
              {group.stages.map((stage) => (
                <div key={stage.name} className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${badgeColorClass(group.badgeColor)}`} />
                      <h4 className="text-white font-semibold">{stage.name}</h4>
                    </div>
                    <p className="text-xs text-slate-400">Stakeholder‑specific objectives & outputs</p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {group.stakeholders.map((s) => {
                      const Icon = stakeholderIcon[s]
                      const bullets = stage.items[s] || []
                      return (
                        <div key={s} className="group rounded-xl border border-slate-700/60 bg-slate-950/60 p-4 transition-colors hover:border-emerald-400/40">
                          <div className="flex items-center gap-2">
                            <span className="rounded-md border border-slate-700/60 bg-slate-900 p-1.5 text-emerald-300">
                              <Icon className="h-4 w-4" />
                            </span>
                            <p className="text-sm font-medium text-white">{s}</p>
                          </div>
                          <ul className="mt-3 space-y-1.5 text-sm text-slate-400">
                            {bullets.map((b, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
