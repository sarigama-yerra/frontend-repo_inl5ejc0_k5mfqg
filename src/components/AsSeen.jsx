import { motion } from 'framer-motion'

const customers = [
  'HydroNova',
  'CinderGrid',
  'Solarity',
  'BluePeak Power',
  'TerraVolt',
  'Northstar Utilities',
  'ArcLight Energy',
  'Zenith Renewables',
]

const press = [
  'EnergyTech Daily',
  'Grid Today',
  'Climate Capital',
  'Power Markets Journal',
  'TechCrunch Energy',
  'The Transition Letter',
]

function RowMarquee({ items, delay = 0, reverse = false }) {
  const content = [...items, ...items]
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex min-w-max gap-6 py-3"
        style={{ willChange: 'transform' }}
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity, delay }}
      >
        {content.map((name, i) => (
          <div
            key={i}
            className="shrink-0 rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-sm text-slate-300 hover:text-white hover:border-emerald-400/40 transition"
          >
            {name}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function AsSeen() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
            As seen at
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-white">Trusted by innovators and covered by leading outlets</h3>
        </div>

        <div className="space-y-6">
          <RowMarquee items={customers} />
          <RowMarquee items={press} reverse delay={0.5} />
        </div>
      </div>
    </section>
  )
}
