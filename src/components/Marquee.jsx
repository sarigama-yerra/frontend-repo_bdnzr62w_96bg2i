import { useEffect, useRef } from 'react'

export default function Marquee() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame
    let x = 0
    const speed = 0.6
    const step = () => {
      x -= speed
      if (x <= -el.scrollWidth / 2) x = 0
      el.style.transform = `translateX(${x}px)`
      frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [])

  const items = ['ZK Tech', 'EVM', 'Bridges', 'Creator Economy', 'DeFi', 'NFTs', 'DAO', 'Security', 'Wallet', 'Indexer']

  return (
    <section className="relative py-6 border-y border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />
      <div className="overflow-hidden">
        <div className="whitespace-nowrap will-change-transform flex" ref={ref}>
          {[...items, ...items].map((t, i) => (
            <span key={i} className="mx-6 text-white/70 text-sm tracking-wide uppercase">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
