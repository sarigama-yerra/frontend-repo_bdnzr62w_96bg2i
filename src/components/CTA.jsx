import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-8 sm:p-12 text-center backdrop-blur-xl">
          <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-white">
            Baue auf BSN. Social. Finance. Creation. Alles in einem.
          </motion.h3>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Hol dir Zugang zur Testnet-Whitelist, Developer Docs und unserem Community Discord.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            <a href="#" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-xl shadow-cyan-400/30 hover:shadow-cyan-400/60 transition">Testnet Access</a>
            <a href="#" className="rounded-xl bg-white/10 text-white border border-white/20 px-5 py-3 font-semibold hover:bg-white/15">Developer Docs</a>
            <a href="#" className="rounded-xl bg-white/10 text-white border border-white/20 px-5 py-3 font-semibold hover:bg-white/15">Discord</a>
          </div>
        </div>
      </div>
    </section>
  )
}
