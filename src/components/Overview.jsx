import { motion } from 'framer-motion'
import { Users, MessageSquare, Share2, Blocks, ShieldCheck, Zap, Coins, Wallet, Layers, Vote, Rocket } from 'lucide-react'

export default function Overview() {
  const items = [
    { icon: Users, title: 'Social Media', desc: 'Feed, Posts, Comments, Stories, Reels & Live' },
    { icon: Blocks, title: 'L1 Blockchain', desc: 'Eigene Chain, EVM kompatibel, Smart Contracts & RPC' },
    { icon: Coins, title: 'DeFi & Staking', desc: 'Swaps, Pools, Yield Farming & Staking' },
    { icon: Rocket, title: 'NFT Marketplace', desc: 'Erstellen, Handeln & Auktionen' },
    { icon: Vote, title: 'DAO Governance', desc: 'Proposals, Voting & Treasury' },
    { icon: Layers, title: 'Bridge & Cross-Chain', desc: 'Multi-Chain Support' },
    { icon: Wallet, title: 'Wallet System', desc: 'Multi-Wallet, MultiSig, Portfolio' },
    { icon: Zap, title: 'Mining System', desc: 'Proof-of-Activity mit Boosts' },
    { icon: ShieldCheck, title: 'Sicherheit', desc: 'Audited, Anti-Bot & Anti-Rug Mechanismen' },
  ]

  return (
    <section id="overview" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.15)_0%,rgba(15,23,42,0)_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          Ein komplettes Web3-Ökosystem in einem
        </motion.h2>
        <p className="mt-4 text-center text-white/70 max-w-3xl mx-auto">
          Alles, was du für Social, Finance, Creation und Governance brauchst – nahtlos integriert.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 hover:border-cyan-300/40">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
