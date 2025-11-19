import { motion } from 'framer-motion'

export default function Technology() {
  const stats = [
    { value: '100k+', label: 'TPS' },
    { value: '~1s', label: 'Finalität' },
    { value: 'EVM', label: 'Kompatibel' },
    { value: 'PoA', label: 'Proof-of-Activity' },
  ]

  return (
    <section id="technology" className="relative py-24 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white">
              Performance, Sicherheit & Skalierung auf Enterprise-Niveau
            </motion.h2>
            <p className="mt-4 text-white/70">
              Die BSN-Chain vereint modernste Konsensmechanismen, Zero-Knowledge-Stacks und eine modulare Architektur, die flexible und sichere Skalierung ermöglicht.
            </p>

            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" /> Modular: Execution, Settlement & Data Availability</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-300" /> ZK-Rollup Bridges & Cross-Chain Messaging</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" /> MEV-Minimierung + Anti-Bot Suite</li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl bg-slate-900/70 border border-white/10 p-5 text-center">
                    <p className="text-2xl font-black text-white">{s.value}</p>
                    <p className="text-xs text-white/60">{s.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-white/80">
                <div className="rounded-xl bg-slate-900/70 border border-white/10 p-4">
                  <p className="font-semibold text-white">Smart Contracts</p>
                  <p className="text-white/70">Solidity, Rust & Move Support. Gas-optimiert, auditierbar, upgradefähig.</p>
                </div>
                <div className="rounded-xl bg-slate-900/70 border border-white/10 p-4">
                  <p className="font-semibold text-white">Developer Suite</p>
                  <p className="text-white/70">RPC, Indexer, SDKs, Subgraphs, Faucet, Testnet & DevNet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
