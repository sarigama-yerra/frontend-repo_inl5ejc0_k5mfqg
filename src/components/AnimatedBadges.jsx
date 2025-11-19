import { motion, useAnimationControls } from 'framer-motion'
import { Sun, Wind, Battery, Flame } from 'lucide-react'
import { useEffect } from 'react'

const assets = [
  { label: 'Solar', Icon: Sun, color: 'text-amber-300 border-amber-400/30 bg-amber-400/10' },
  { label: 'Wind', Icon: Wind, color: 'text-cyan-300 border-cyan-400/30 bg-cyan-400/10' },
  { label: 'Storage', Icon: Battery, color: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10' },
  { label: 'Thermal', Icon: Flame, color: 'text-orange-300 border-orange-400/30 bg-orange-400/10' },
]

const kpis = ['IRR', 'NPV', 'LCOE', 'Curtailment', 'Resilience']
const sizes = ['kW', 'MW', 'GW']

export default function AnimatedBadges() {
  const controls = useAnimationControls()

  useEffect(() => {
    let i = 0
    const cycle = async () => {
      while (true) {
        await controls.start({ opacity: [0.3, 1, 0.3], scale: [0.98, 1.04, 0.98], transition: { duration: 2.4 } })
        i = (i + 1) % sizes.length
      }
    }
    cycle()
  }, [controls])

  return (
    <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5">
      <div className="flex flex-wrap gap-2">
        {assets.map(({ label, Icon, color }, idx) => (
          <motion.span
            key={label}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${color}`}
            initial={{ y: 6, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.08, type: 'spring', stiffness: 300, damping: 20 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Icon className="h-3.5 w-3.5" /> {label}
          </motion.span>
        ))}
        {kpis.map((k, i) => (
          <motion.span
            key={k}
            className={`inline-flex items-center gap-2 rounded-full border border-slate-600/60 bg-slate-900/70 px-3 py-1 text-xs text-slate-200`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            viewport={{ once: true }}
          >
            {k}
          </motion.span>
        ))}
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-300"
          animate={controls}
        >
          Size: kW → GW
        </motion.span>
      </div>
    </div>
  )
}
