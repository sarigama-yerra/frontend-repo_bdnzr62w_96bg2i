import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Technology from './components/Technology'
import Ecosystem from './components/Ecosystem'
import Roadmap from './components/Roadmap'
import CTA from './components/CTA'
import ScrollProgress from './components/ScrollProgress'
import BackgroundFX from './components/BackgroundFX'
import Marquee from './components/Marquee'
import CinematicSection from './components/CinematicSection'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ScrollProgress />
      <BackgroundFX />
      <Navbar />
      <Hero />
      <Marquee />
      <CinematicSection />
      <Overview />
      <Technology />
      <Ecosystem />
      <Roadmap />
      <CTA />
      <FAQ />

      {/* Footer */}
      <footer id="faq" className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-400 via-fuchsia-400 to-cyan-300 grid place-items-center">
                <span className="text-white text-sm font-black">B</span>
              </div>
              <p className="text-white/70 text-sm">© {new Date().getFullYear()} BSN — All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4 text-white/70 text-sm">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Discord</a>
              <a href="/test" className="hover:text-white">System Test</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
