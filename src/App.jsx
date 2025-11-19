import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import UseCases from './components/UseCases'
import Unified from './components/Unified'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* backdrop grid glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(16,185,129,0.15),transparent),radial-gradient(40%_30%_at_100%_10%,rgba(37,99,235,0.15),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <Unified />
        <Features />
        <UseCases />

        {/* CTA */}
        <section id="why" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-900 to-slate-950 p-10">
              <div className="absolute -inset-px rounded-3xl ring-1 ring-inset ring-blue-500/10" />
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Streamline and accelerate the energy transition</h3>
                  <p className="mt-3 text-slate-300">Give your teams a single system for hybrid planning and grid-aware economics. Faster cycles, fewer surprises, stronger decisions.</p>
                </div>
                <div className="lg:col-span-5">
                  <form className="grid sm:grid-cols-3 gap-3">
                    <input type="email" placeholder="Work email" className="sm:col-span-2 rounded-lg bg-slate-900/70 border border-slate-700/60 px-4 py-3 text-sm outline-none focus:border-blue-500/60" />
                    <button className="rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition">Request a demo</button>
                  </form>
                  <p className="mt-2 text-xs text-slate-400">By requesting a demo, you agree to our terms and privacy policy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-400">
              <p>© {new Date().getFullYear()} Gridbrid. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-slate-200">Security</a>
                <a href="#" className="hover:text-slate-200">Privacy</a>
                <a href="#" className="hover:text-slate-200">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
