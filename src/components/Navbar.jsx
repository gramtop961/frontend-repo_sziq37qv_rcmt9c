import { motion } from 'framer-motion'
import { Flame, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(2,6,23,0.5)]"
        >
          <div className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Flame className="w-7 h-7 text-blue-400 drop-shadow-[0_0_12px_rgba(96,165,250,0.6)]" />
                <div className="absolute -inset-2 -z-10 rounded-full bg-blue-500/10 blur-xl" />
              </div>
              <span className="font-semibold tracking-tight text-white">FitFuel</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
              <a href="#program" className="hover:text-white transition-colors">Programs</a>
              <a href="#nutrition" className="hover:text-white transition-colors">Nutrition</a>
              <a href="#results" className="hover:text-white transition-colors">Results</a>
            </div>

            <motion.a
              href="#join"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow-[0_8px_24px_rgba(14,165,233,0.35)]"
            >
              Join Now
            </motion.a>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-slate-200"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-5 py-4 text-slate-200">
              <div className="flex flex-col gap-4">
                <a href="#program" onClick={() => setOpen(false)}>Programs</a>
                <a href="#nutrition" onClick={() => setOpen(false)}>Nutrition</a>
                <a href="#results" onClick={() => setOpen(false)}>Results</a>
                <a href="#join" onClick={() => setOpen(false)} className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-center font-medium text-white">Join Now</a>
              </div>
            </div>
          )}
        </motion.nav>
      </div>
    </div>
  )
}
