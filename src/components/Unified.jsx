import { GitBranch, Calculator, Coins, Server, Settings, Workflow, Database, Layers, Gauge, Leaf, Shield, BarChart3 } from 'lucide-react'

export default function Unified() {
  const toolchain = [
    { icon: <GitBranch className="h-4 w-4" />, label: 'GIS & interconnection' },
    { icon: <Database className="h-4 w-4" />, label: 'Resource & grid data' },
    { icon: <Calculator className="h-4 w-4" />, label: 'Engineering models' },
    { icon: <Coins className="h-4 w-4" />, label: 'Financial models' },
    { icon: <BarChart3 className="h-4 w-4" />, label: 'Market & economics' },
  ]

  const kpis = [
    { label: 'IRR', color: 'from-emerald-400/80 to-emerald-500/40' },
    { label: 'NPV', color: 'from-blue-400/80 to-blue-500/40' },
    { label: 'Resilience', color: 'from-cyan-400/80 to-cyan-500/40' },
    { label: 'Emissions', color: 'from-amber-400/80 to-amber-500/40' },
    { label: 'LCOE', color: 'from-violet-400/80 to-violet-500/40' },
  ]

  return (
    <section id="unified" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_0%,rgba(16,185,129,0.12),transparent),radial-gradient(50%_40%_at_100%_20%,rgba(37,99,235,0.12),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">One platform replaces the stack</h2>
          <p className="mt-3 text-slate-300 max-w-3xl mx-auto">Gridbrid unifies technical, financial, and economic modeling across renewables, non‑renewables, and storage of any size—so teams plan collaboratively and co‑optimize outcomes.</p>
        </div>

        {/* Replace the toolchain */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-200">Traditional toolchain</p>
                <span className="text-xs rounded-full bg-rose-500/20 text-rose-300 px-2 py-0.5 border border-rose-400/30">Fragmented</span>
              </div>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {toolchain.map((t) => (
                  <div key={t.label} className="relative rounded-lg border border-slate-700/60 bg-slate-900/60 p-3 text-xs text-slate-300">
                    <div className="flex items-center gap-2">{t.icon}<span>{t.label}</span></div>
                    <div className="pointer-events-none absolute -inset-px rounded-lg ring-1 ring-inset ring-rose-500/10" />
                    <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-tr from-rose-500/0 to-rose-500/0 [mask-image:linear-gradient(to_bottom_right,transparent,transparent,rgba(255,0,0,0.15))]" />
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-slate-400">Siloed files, manual handoffs, lost context.</div>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/50 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-200">Gridbrid end‑to‑end</p>
                <span className="text-xs rounded-full bg-emerald-500/20 text-emerald-300 px-2 py-0.5 border border-emerald-400/30">Unified</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { icon: <Database className="h-4 w-4" />, label: 'Data ingestion' },
                  { icon: <Layers className="h-4 w-4" />, label: 'Hybrid modeling' },
                  { icon: <Server className="h-4 w-4" />, label: 'Grid constraints' },
                  { icon: <Calculator className="h-4 w-4" />, label: 'Financials' },
                  { icon: <BarChart3 className="h-4 w-4" />, label: 'Market & economics' },
                  { icon: <Workflow className="h-4 w-4" />, label: 'Scenario orchestration' },
                ].map((s) => (
                  <div key={s.label} className="rounded-lg border border-emerald-500/30 bg-gradient-to-br from-slate-900/70 to-slate-900/40 p-3 text-xs text-slate-200">
                    <div className="flex items-center gap-2">{s.icon}<span>{s.label}</span></div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-slate-400">One model of record. Versioned assumptions. Shared context.</div>
            </div>
          </div>

          {/* Triad + KPI optimizer */}
          <div className="lg:col-span-6">
            <div className="h-full rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6">
              <p className="text-sm font-semibold text-slate-200">Unified technical • financial • economic modeling</p>

              {/* Triad */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { icon: <Settings className="h-4 w-4" />, label: 'Technical', sub: 'Sizing, dispatch, losses' },
                  { icon: <Coins className="h-4 w-4" />, label: 'Financial', sub: 'CAPEX/OPEX, debt/equity' },
                  { icon: <BarChart3 className="h-4 w-4" />, label: 'Economic', sub: 'Market prices, congestion' },
                ].map((b) => (
                  <div key={b.label} className="relative rounded-xl border border-slate-700/60 bg-slate-900/60 p-4 text-xs">
                    <div className="flex items-center gap-2 text-slate-200">{b.icon}<span className="font-semibold">{b.label}</span></div>
                    <p className="mt-2 text-slate-400">{b.sub}</p>
                    <div className="pointer-events-none absolute -inset-px rounded-xl ring-1 ring-inset ring-blue-500/10" />
                  </div>
                ))}
              </div>

              {/* KPI optimizer visual */}
              <div className="mt-6">
                <p className="text-sm text-slate-300">Co‑optimize KPIs for financial, resilience, and sustainability outcomes</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {kpis.map((k) => (
                    <span key={k.label} className={`text-xs rounded-full border border-slate-600/60 bg-slate-900/70 px-3 py-1 text-slate-200 hover:border-emerald-400/40 transition`}>{k.label}</span>
                  ))}
                </div>

                {/* Radar-like bars */}
                <div className="mt-5 grid grid-cols-5 gap-3">
                  {kpis.map((k, idx) => (
                    <div key={k.label} className="flex flex-col items-center gap-2">
                      <div className={`w-2 rounded-full bg-gradient-to-b ${k.color}`} style={{ height: 40 + (idx * 10) }} />
                      <span className="text-[10px] text-slate-400">{k.label}</span>
                    </div>
                  ))}
                </div>

                {/* Outcome badges */}
                <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
                  <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-emerald-300 inline-flex items-center gap-2"><Gauge className="h-3 w-3" /> Financial performance</div>
                  <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-cyan-300 inline-flex items-center gap-2"><Shield className="h-3 w-3" /> Resilience</div>
                  <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-amber-300 inline-flex items-center gap-2"><Leaf className="h-3 w-3" /> Sustainability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
