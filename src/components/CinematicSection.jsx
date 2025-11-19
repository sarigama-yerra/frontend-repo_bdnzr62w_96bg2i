import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function CinematicSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1])

  return (
    <section ref={ref} className="relative bg-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y, opacity }} className="h-[120vh] bg-[radial-gradient(60%_40%_at_50%_30%,rgba(56,189,248,0.15)_0%,rgba(15,23,42,1)_70%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl sm:text-5xl font-black text-white">
          Eine Chain gebaut für Menschen, nicht nur für Maschinen
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 text-white/80 max-w-2xl">
          Social Graph nativ, Identitäten verifizierbar, Ökonomie fair. Erlebe ein Netz, das Community und Kapitalfluss vereint.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{t:'Story'}, {t:'Cinematics'}, {t:'Emotion'}].map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-cyan-300 text-sm uppercase tracking-wider">Pillar {i+1}</p>
              <p className="text-white font-semibold text-lg mt-2">{b.t}</p>
              <p className="text-white/70 text-sm mt-2">Wir erzählen eine klare, fokussierte Geschichte: Warum BSN existiert und was es auszeichnet.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
