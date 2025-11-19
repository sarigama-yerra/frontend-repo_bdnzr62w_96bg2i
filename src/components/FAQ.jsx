import { useState } from 'react'

const faqs = [
  { q: 'Was ist BSN?', a: 'BSN ist eine Layer-1-Blockchain mit nativem Social Graph, DeFi, NFTs und Governance.' },
  { q: 'Ist BSN EVM-kompatibel?', a: 'Ja. Smart Contracts laufen performant und gas-optimiert.' },
  { q: 'Gibt es ein Testnet?', a: 'Ja, melde dich für die Whitelist an und erhalte Zugang zu Faucet & Explorer.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-white text-center">FAQ</h3>
        <div className="mt-8 divide-y divide-white/10 border border-white/10 rounded-2xl bg-white/5">
          {faqs.map((f, i) => (
            <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-5 hover:bg-white/5">
              <div className="flex items-center justify-between">
                <p className="text-white font-medium">{f.q}</p>
                <span className="text-white/60">{open === i ? '-' : '+'}</span>
              </div>
              {open === i && <p className="mt-2 text-white/70 text-sm">{f.a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
