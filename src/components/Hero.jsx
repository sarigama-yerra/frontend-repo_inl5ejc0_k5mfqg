import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 lg:pt-36" id="home">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient overlay to match brand */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-slate-900/40 px-3 py-1 text-xs text-blue-200/90 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Data-driven pre‑construction for hybrid power plants
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Make complex pre‑construction studies effortless
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300">
              Gridbrid turns multi-variable feasibility work into a clear, collaborative workflow. Model hybrid assets, evaluate grid constraints, and compare scenarios to accelerate investment decisions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-[0_10px_30px_-10px_rgba(37,99,235,0.7)] hover:bg-blue-500 transition">
                Request a demo <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#platform" className="inline-flex items-center justify-center rounded-lg border border-slate-700/70 bg-slate-900/40 px-5 py-3 text-slate-200 hover:border-slate-600 transition">
                Explore the platform
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                ['50% faster', 'site screening'],
                ['1000s', 'of scenarios'],
                ['1 source', 'of truth'],
                ['Grid‑ready', 'insights'],
              ].map(([a,b]) => (
                <div key={a} className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-4">
                  <p className="text-lg font-semibold text-white">{a}</p>
                  <p className="text-xs text-slate-400">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 backdrop-blur">
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-blue-500/10" />
              <h3 className="text-white font-semibold mb-4">What you can do</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li>• Co-optimize solar, wind, storage, and interconnection</li>
                <li>• Simulate grid impacts with constraint-aware outputs</li>
                <li>• Compare CAPEX/OPEX and LCOE across scenarios</li>
                <li>• Share living reports with stakeholders</li>
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-slate-400">
                <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 p-3">Bankable assumptions</div>
                <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 p-3">Transparent models</div>
                <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 p-3">Versioned scenarios</div>
                <div className="rounded-lg border border-slate-700/60 bg-slate-900/50 p-3">Audit‑ready outputs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
