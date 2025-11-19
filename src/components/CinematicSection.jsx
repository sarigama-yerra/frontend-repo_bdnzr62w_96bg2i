import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function CinematicSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.25, 1], [0, 1, 1])

  const pillars = [
    { k: 'Reason', h: 'Warum jetzt', b: 'Die nächste Milliarde Nutzer verlangt nahtlose Social‑Finanz‑Erlebnisse. Wir liefern beides in einer Chain.' },
    { k: 'Design', h: 'Cinematic UX', b: 'Parallax Depth, klare Hierarchie, orchestrierte Motion – Erlebnisse wie ein Markenfilm, nicht wie eine DApp.' },
    { k: 'Trust', h: 'Enterprise‑Sicherheit', b: 'Audits, MEV‑Minimierung, Anti‑Bot – gebaut für Kapital‑ und Reputationsschutz.' },
  ]

  return (
    <section ref={ref} className="relative bg-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y, opacity }} className="h-[130vh] bg-[radial-gradient(60%_40%_at_50%_30%,rgba(56,189,248,0.18)_0%,rgba(15,23,42,1)_68%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl sm:text-5xl font-black text-white">
          Gebaut für Menschen – skaliert für Märkte
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 text-white/80 max-w-2xl">
          Identität, Community, Kapitalflüsse: alles orchestriert in einer einzigen, performanten Basis‑Schicht.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400/10 via-fuchsia-400/10 to-emerald-400/10" />
              <div className="relative">
                <p className="text-cyan-300 text-xs uppercase tracking-wider">{p.k}</p>
                <p className="text-white font-semibold text-lg mt-2">{p.h}</p>
                <p className="text-white/70 text-sm mt-2">{p.b}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
