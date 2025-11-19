import { motion } from 'framer-motion'

export default function Roadmap() {
  const phases = [
    { q: 'Q1', year: '2025', items: ['Testnet 2.0', 'NFT Marketplace Alpha', 'Wallet v1'] },
    { q: 'Q2', year: '2025', items: ['Mainnet Launch', 'DeFi DEX & Pools', 'Token Creator'] },
    { q: 'Q3', year: '2025', items: ['DAO Governance', 'Staking & Farming', 'Bridge Beta'] },
    { q: 'Q4', year: '2025', items: ['Creator Economy', 'Cross-Chain Expansion', 'Mobile Apps'] },
  ]

  return (
    <section id="roadmap" className="relative py-24 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Roadmap</h2>
        <p className="mt-3 text-white/70 text-center">Klarer Plan für Wachstum & Adoption.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p, i) => (
            <motion.div key={p.q} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <div className="flex items-baseline justify-between">
                <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-fuchsia-300">{p.q}</p>
                <p className="text-white/60">{p.year}</p>
              </div>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
