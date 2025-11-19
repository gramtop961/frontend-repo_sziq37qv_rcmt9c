import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="join" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-emerald-500/20 p-8 sm:p-12 text-center shadow-[0_20px_80px_rgba(56,189,248,0.25)]"
        >
          <div className="absolute -inset-32 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.25),transparent_25%)] blur-2xl" />
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Start Your 7-Day Free Trial</h3>
          <p className="mt-3 text-slate-200">
            Get full access to workouts, meal plans, and coaching. Cancel anytime.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900">
              Get Started
            </motion.a>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white/90">
              View Plans
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
