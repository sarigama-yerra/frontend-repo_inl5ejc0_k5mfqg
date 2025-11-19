import { Database, BarChart3, Layers, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    { icon: <Workflow className="h-5 w-5" />, title: 'Orchestrate scenarios' },
    { icon: <Database className="h-5 w-5" />, title: 'Bankable data' },
    { icon: <BarChart3 className="h-5 w-5" />, title: 'Decision‑grade' },
    { icon: <Layers className="h-5 w-5" />, title: 'Hybrid‑native' },
    { icon: <ShieldCheck className="h-5 w-5" />, title: 'Governed' },
    { icon: <Sparkles className="h-5 w-5" />, title: 'AI assist' },
  ]

  return (
    <section id="platform" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(37,99,235,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">A platform built for energy decision makers</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Fewer words, more signal. See the core in a glance.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6 text-slate-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-600/20 text-blue-300 p-2 ring-1 ring-inset ring-blue-500/20">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
