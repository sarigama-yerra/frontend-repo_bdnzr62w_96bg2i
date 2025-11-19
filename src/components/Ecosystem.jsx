import { motion } from 'framer-motion'
import { MessageSquare, Coins, Palette, ShieldCheck, Vote, Wallet, Layers, BarChart3 } from 'lucide-react'

export default function Ecosystem() {
  const features = [
    { icon: MessageSquare, title: 'Social Media', items: ['Feed', 'Posts', 'Comments', 'Stories', 'Reels', 'Live'] },
    { icon: Coins, title: 'DeFi & Staking', items: ['Liquidity Pools', 'Swaps', 'Yield Farming', 'Staking'] },
    { icon: Palette, title: 'NFT Marketplace', items: ['Erstellen', 'Handeln', 'Auktionen'] },
    { icon: Vote, title: 'DAO Governance', items: ['Proposals', 'Voting', 'Treasury'] },
    { icon: Layers, title: 'Bridge & Cross-Chain', items: ['Multi-Chain Support', 'ZK-Rollups'] },
    { icon: Wallet, title: 'Wallet System', items: ['Multi-Wallet', 'MultiSig', 'Portfolio'] },
    { icon: ShieldCheck, title: 'Sicherheit', items: ['Audits', 'Anti-Bot', 'Rug-Prevention'] },
  ]

  return (
    <section id="ecosystem" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ein Ökosystem – endlose Möglichkeiten</h2>
            <p className="mt-3 text-white/70">Alles modular, vernetzt und blitzschnell.</p>
          </div>
          <div className="hidden md:block text-right text-white/60 text-sm max-w-sm">
            <p>BSN verbindet Social Interaktionen mit DeFi, NFTs und Governance – direkt in der Base-Layer verankert.</p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, items }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center text-fuchsia-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/70">
                {items.map((item) => (
                  <li key={item} className="rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
