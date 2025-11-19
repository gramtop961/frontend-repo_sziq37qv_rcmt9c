import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Nutrition from './components/Nutrition'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_90%_20%,rgba(34,211,238,0.15),transparent_25%),radial-gradient(circle_at_80%_90%,rgba(16,185,129,0.12),transparent_25%)]" />

      <Navbar />
      <Hero />
      <Features />
      <Nutrition />
      <CTA />

      <footer className="py-10 text-center text-sm text-slate-400/80">
        © {new Date().getFullYear()} FitFuel • Strong body. Clear mind. Better life.
      </footer>
    </div>
  )
}

export default App
