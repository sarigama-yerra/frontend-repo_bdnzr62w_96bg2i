import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-28 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient overlays for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-slate-950/70" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(15,23,42,0)_0%,rgba(15,23,42,0.6)_60%,rgba(15,23,42,0.95)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center py-24">
          <div className="lg:col-span-7">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-6xl font-black tracking-tight text-white">
              BSN — Die futuristische Layer 1 für Social + DeFi + NFTs
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
              Ein nahtloses Ökosystem: Social Media Interaktionen, hochperformante Blockchain, DeFi, NFT-Marktplatz, DAO-Governance und Wallet in einem.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-xl shadow-cyan-400/30 hover:shadow-cyan-400/60 transition">Loslegen</a>
              <a href="#overview" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-semibold border border-white/20 hover:bg-white/15">Mehr erfahren</a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-10 flex flex-wrap items-center gap-6 text-white/70">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Mainnet-ready</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" /> 100k+ TPS</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" /> EVM kompatibel</div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Social Feed', desc: 'Posts, Stories, Reels, Live', icon: '📰' },
                  { title: 'DeFi & Staking', desc: 'Swaps, Pools, Farming', icon: '💹' },
                  { title: 'NFT Marktplatz', desc: 'Erstellen & Handeln', icon: '🎨' },
                  { title: 'DAO & Voting', desc: 'Proposals & Treasury', icon: '🗳️' },
                  { title: 'Token Creator', desc: 'Launch in Minuten', icon: '🪙' },
                  { title: 'Bridge', desc: 'Multi-Chain Support', icon: '🌉' },
                ].map((f) => (
                  <div key={f.title} className="rounded-xl bg-slate-900/60 border border-white/10 p-4">
                    <div className="text-2xl">{f.icon}</div>
                    <p className="mt-2 text-white font-semibold">{f.title}</p>
                    <p className="text-sm text-white/70">{f.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
