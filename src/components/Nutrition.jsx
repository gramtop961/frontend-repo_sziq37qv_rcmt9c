import { motion, useScroll, useTransform } from 'framer-motion'
import { Leaf, Flame, Utensils } from 'lucide-react'
import { useRef } from 'react'

export default function Nutrition() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section id="nutrition" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div style={{ y }} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-r from-green-500/10 via-emerald-400/10 to-transparent blur-2xl" />
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ['Protein', 'Build & repair muscle'],
                  ['Carbs', 'Fuel your performance'],
                  ['Fats', 'Hormones & absorption'],
                  ['Micros', 'Vitamins & minerals']
                ].map(([k, v], i) => (
                  <motion.div key={k} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-white font-semibold">{k}</div>
                    <div className="text-slate-300 text-sm">{v}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-400/20 p-4 text-white">
                <div className="flex items-center gap-3">
                  <Leaf className="w-5 h-5 text-emerald-300" />
                  <p className="text-sm">Balanced macros tuned to your goal – lose fat, build muscle, or maintain.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-extrabold text-white">
              Eat Smarter, Not Less
            </motion.h2>
            <p className="mt-4 text-slate-300">
              Your nutrition guide includes daily calorie targets, macro breakdowns, and a plug-and-play meal builder. No starving, no guesswork – just delicious food that supports your training.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                [Utensils, 'Meal Builder'],
                [Flame, 'Calorie Targets'],
                [Leaf, 'Whole Foods First']
              ].map(([Icon, label], i) => (
                <motion.div key={label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <Icon className="mx-auto h-6 w-6 text-emerald-300" />
                  <div className="mt-2 text-sm text-white">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
