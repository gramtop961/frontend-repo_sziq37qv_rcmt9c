import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Background gradient and grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-r from-blue-600/10 via-cyan-400/10 to-transparent blur-2xl" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                Transform Your Body and Fuel Your Life
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                A results-driven fitness program paired with a science-backed nutrition guide. Built for busy people who want sustainable change.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#join" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-[0_10px_40px_rgba(14,165,233,0.35)]">
                  Start Free Trial
                </motion.a>
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#program" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90">
                  Explore Program
                </motion.a>
              </div>

              {/* Floating stats */}
              <div className="mt-10 grid grid-cols-3 gap-4 text-center">
                {[
                  ['12k+', 'Members'],
                  ['98%', 'Satisfaction'],
                  ['4.9', 'Average Rating']
                ].map(([stat, label], i) => (
                  <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                    <div className="text-xl font-bold text-white">{stat}</div>
                    <div className="text-xs text-slate-300">{label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 3D Spline scene for flair */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.15),transparent_40%)]" />
            <Spline scene="https://prod.spline.design/1YE2wGQ2lXi6n9e3/scene.splinecode" />
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <svg className="mt-16 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
        <path fill="url(#grad)" d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,117.3C672,128,768,160,864,154.7C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        <defs>
          <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  )
}
