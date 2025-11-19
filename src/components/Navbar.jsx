import { Menu, Zap, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Platform', href: '#platform' },
    { label: 'Use cases', href: '#use-cases' },
    { label: 'Why Gridbrid', href: '#why' },
    { label: 'Resources', href: '#resources' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-slate-700/60 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Brand */}
            <a href="#" className="flex items-center gap-2">
              <div className="grid place-content-center h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 shadow-[0_0_30px_rgba(59,130,246,0.35)]">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div className="">
                <p className="text-sm uppercase tracking-widest text-blue-300/80">Gridbrid</p>
                <p className="-mt-1 text-[10px] tracking-[0.2em] text-slate-400">Pre‑construction Intelligence</p>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-300/90 hover:text-white transition-colors text-sm">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#demo" className="text-slate-300 hover:text-white text-sm">Sign in</a>
              <a href="#demo" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(37,99,235,0.7)] hover:bg-blue-500 transition-colors">
                Request a demo <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Mobile */}
            <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-700/60 p-2 text-slate-200" onClick={() => setOpen((v) => !v)}>
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-slate-800/80 px-4 py-3">
              <nav className="grid gap-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="rounded-lg px-3 py-2 text-slate-300/90 hover:bg-slate-800/60 hover:text-white transition">
                    {item.label}
                  </a>
                ))}
                <a href="#demo" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                  Request a demo <ExternalLink className="h-4 w-4" />
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
