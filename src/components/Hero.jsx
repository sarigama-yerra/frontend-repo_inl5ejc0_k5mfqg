import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const metrics = [
    { label: 'Screening speed', value: '50%+', tint: 'from-emerald-500/30 to-emerald-400/10', glow: 'bg-emerald-400/40' },
    { label: 'Scenarios', value: '1k+', tint: 'from-indigo-500/30 to-indigo-400/10', glow: 'bg-indigo-400/40' },
    { label: 'Single source', value: '1', tint: 'from-sky-500/30 to-sky-400/10', glow: 'bg-sky-400/40' },
    { label: 'Grid‑ready', value: 'Yes', tint: 'from-amber-500/30 to-amber-400/10', glow: 'bg-amber-400/40' },
  ]

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
              Hybrid pre‑construction, unified
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Plan hybrid plants with clarity
            </h1>
            <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-300">
              Model assets. Respect the grid. Compare outcomes. One visual workspace for fast, confident decisions.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-[0_10px_30px_-10px_rgba(37,99,235,0.7)] hover:bg-blue-500 transition">
                Request a demo <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#platform" className="inline-flex items-center justify-center rounded-lg border border-slate-700/70 bg-slate-900/40 px-5 py-3 text-slate-200 hover:border-slate-600 transition">
                See how it works
              </a>
            </div>

            {/* Animated metrics */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  className="relative overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/40 p-4"
                  initial={{ y: 12, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                >
                  <div className={`pointer-events-none absolute -inset-1 opacity-20 blur-2xl ${m.glow}`} />
                  <div className={`mx-auto mb-2 h-10 w-10 rounded-lg bg-gradient-to-br ${m.tint} ring-1 ring-inset ring-white/10 flex items-center justify-center text-white/90 font-semibold`}>{m.value}</div>
                  <p className="text-xs text-slate-400">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual panel */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 backdrop-blur">
              <div className="absolute -inset-px rounded-2xl ring-1 ring-inset ring-blue-500/10" />
              <h3 className="text-white font-semibold mb-4">Unified workflow</h3>
              <div className="grid grid-cols-3 gap-3">
                {["Model","Grid","Finance","Market","Scenarios","Share"].map((t, idx) => (
                  <motion.div
                    key={t}
                    className="rounded-lg border border-slate-700/60 bg-slate-900/50 p-3 text-center text-xs text-slate-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, type: 'spring', stiffness: 220, damping: 18 }}
                    viewport={{ once: true }}
                  >
                    {t}
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 text-xs text-slate-400">Click through the sections below for a quick visual tour.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
