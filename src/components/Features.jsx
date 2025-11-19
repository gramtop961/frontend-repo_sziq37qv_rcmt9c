import { motion } from 'framer-motion'
import { Apple, Beef, Dumbbell, Salad, ShieldCheck, Timer } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'Adaptive Workouts',
    desc: 'Personalized training plans that scale with your progress and schedule.'
  },
  {
    icon: Timer,
    title: '30-45 Min Sessions',
    desc: 'Short, effective workouts you can fit into any day – no excuses.'
  },
  {
    icon: ShieldCheck,
    title: 'Coach Guidance',
    desc: 'Form checks, weekly feedback, and motivation from certified coaches.'
  },
  {
    icon: Salad,
    title: 'Smart Nutrition',
    desc: 'Macro targets and meal templates tailored to your goals.'
  },
  {
    icon: Apple,
    title: 'Habit System',
    desc: 'Build sustainable habits with daily checklists and reminders.'
  },
  {
    icon: Beef,
    title: 'Recipes Library',
    desc: '100+ high-protein recipes with full calories and macro breakdowns.'
  }
]

export default function Features() {
  return (
    <section id="program" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-extrabold text-white"
        >
          What You Get
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900 p-6"
            >
              <div className="absolute -inset-0.5 -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'linear-gradient(120deg, rgba(56,189,248,0.25), rgba(59,130,246,0.25))' }} />
              <div className="flex items-start gap-4">
                <div className="relative">
                  <f.icon className="h-6 w-6 text-cyan-400" />
                  <div className="absolute -inset-2 -z-10 rounded-full bg-cyan-500/10 blur-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
