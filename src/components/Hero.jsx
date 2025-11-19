import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100vh] pt-28 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Cinematic gradient masks */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_30%,rgba(15,23,42,0)_0%,rgba(15,23,42,0.55)_60%,rgba(15,23,42,0.95)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/20 to-slate-950/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center py-28">
          <div className="lg:col-span-7">
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              Introducing BSN • Built for People. Powered by Markets.
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-4 text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white">
              Die Social‑First L1 für eine neue Finanzära
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl">
              Ein nahtloses Ökosystem: Social Graph, High‑Throughput Blockchain, DeFi, NFT‑Marktplatz, DAO und Wallet – als eine konsistente Erfahrung.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="group inline-flex items-center justify-center rounded-2xl bg-white text-slate-900 px-6 py-3 font-semibold shadow-[0_8px_40px_-8px_rgba(34,211,238,0.45)] hover:shadow-[0_12px_46px_-8px_rgba(244,114,182,0.55)] transition">
                Jetzt starten
                <span className="ml-2 inline-block translate-x-0 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
              <a href="#overview" className="inline-flex items-center justify-center rounded-2xl bg-white/10 text-white px-6 py-3 font-semibold border border-white/20 hover:bg-white/15 backdrop-blur">
                Mehr erfahren
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }} className="mt-10 flex flex-wrap items-center gap-6 text-white/70">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Mainnet‑ready</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" /> 100k+ TPS</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" /> EVM kompatibel</div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 shadow-[0_20px_120px_-20px_rgba(34,197,94,0.25)]">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Social Feed', desc: 'Posts, Stories, Reels, Live', icon: '📰' },
                  { title: 'DeFi & Staking', desc: 'Swaps, Pools, Farming', icon: '💹' },
                  { title: 'NFT Marktplatz', desc: 'Erstellen & Handeln', icon: '🎨' },
                  { title: 'DAO & Voting', desc: 'Proposals & Treasury', icon: '🗳️' },
                  { title: 'Token Creator', desc: 'Launch in Minuten', icon: '🪙' },
                  { title: 'Bridge', desc: 'Multi‑Chain Support', icon: '🌉' },
                ].map((f) => (
                  <div key={f.title} className="rounded-2xl bg-slate-900/60 border border-white/10 p-4 hover:border-cyan-300/40 transition">
                    <div className="text-2xl">{f.icon}</div>
                    <p className="mt-2 text-white font-semibold leading-tight">{f.title}</p>
                    <p className="text-sm text-white/70">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-cyan-400/10 via-fuchsia-400/10 to-emerald-400/10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
