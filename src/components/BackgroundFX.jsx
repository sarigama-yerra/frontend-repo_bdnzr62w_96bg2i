import { useEffect, useMemo } from 'react'

export default function BackgroundFX() {
  // Premium atmosphere: animated gradient blobs + starfield + vignette + grain
  const blobs = useMemo(
    () => [
      { id: 1, from: 'from-cyan-400/30', to: 'to-transparent', top: '8%', left: '8%', size: 'w-[42rem] h-[42rem]' },
      { id: 2, from: 'from-fuchsia-400/25', to: 'to-transparent', top: '35%', left: '65%', size: 'w-[40rem] h-[40rem]' },
      { id: 3, from: 'from-emerald-400/25', to: 'to-transparent', top: '72%', left: '20%', size: 'w-[36rem] h-[36rem]' },
    ],
    []
  )

  useEffect(() => {
    // Reserved for future shader-based upgrade
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Starfield */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.9" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          {Array.from({ length: 70 }).map((_, i) => {
            const x = Math.random() * 100
            const y = Math.random() * 100
            const s = Math.random() * 2 + 0.5
            return <circle key={i} cx={`${x}%`} cy={`${y}%`} r={s} fill="url(#g)" />
          })}
        </svg>
      </div>

      {blobs.map((b) => (
        <div key={b.id} className={`absolute ${b.size} blur-3xl`} style={{ top: b.top, left: b.left }}>
          <div className={`animate-pulse-slow h-full w-full rounded-full bg-gradient-to-br ${b.from} ${b.to}`} />
        </div>
      ))}

      {/* Orbital lines */}
      <div className="absolute -top-40 right-1/4 h-[32rem] w-[32rem] opacity-20">
        <div className="absolute inset-0 rounded-full border border-cyan-300/30 animate-spin-slow" />
        <div className="absolute inset-6 rounded-full border border-fuchsia-300/30 animate-spin-slower" />
        <div className="absolute inset-12 rounded-full border border-emerald-300/30 animate-spin-slowest" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_60%,rgba(0,0,0,0.7)_100%)]" />

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'140\' height=\'140\' viewBox=\'0 0 140 140\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.4\'/%3E%3C/svg%3E")' }} />

      <style>{`
        @keyframes pulseSlow { 0%,100%{ transform: scale(1)} 50%{ transform: scale(1.06)} }
        .animate-pulse-slow{ animation: pulseSlow 9s ease-in-out infinite }
        .animate-spin-slow{ animation: spin 40s linear infinite }
        .animate-spin-slower{ animation: spin 60s linear infinite }
        .animate-spin-slowest{ animation: spin 90s linear infinite }
        @keyframes spin { to { transform: rotate(360deg) } }
      `}</style>
    </div>
  )
}
