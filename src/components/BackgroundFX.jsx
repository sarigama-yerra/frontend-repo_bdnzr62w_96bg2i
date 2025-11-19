import { useEffect, useMemo } from 'react'

export default function BackgroundFX() {
  // Subtle animated radial gradients
  const blobs = useMemo(() => (
    [
      { id: 1, from: 'from-cyan-400/20', to: 'to-transparent', top: '10%', left: '5%', size: 'w-[40rem] h-[40rem]' },
      { id: 2, from: 'from-fuchsia-400/20', to: 'to-transparent', top: '40%', left: '70%', size: 'w-[35rem] h-[35rem]' },
      { id: 3, from: 'from-emerald-400/20', to: 'to-transparent', top: '75%', left: '20%', size: 'w-[30rem] h-[30rem]' },
    ]
  ), [])

  useEffect(() => {
    // No-op placeholder to hint future GPU-based shader bg if needed
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <div key={b.id} className={`absolute ${b.size} blur-3xl opacity-50`} style={{ top: b.top, left: b.left }}>
          <div className={`animate-pulse-slow h-full w-full rounded-full bg-gradient-to-br ${b.from} ${b.to}`} />
        </div>
      ))}
      <style>{`
        @keyframes pulseSlow { 0%,100%{ transform: scale(1)} 50%{ transform: scale(1.06)} }
        .animate-pulse-slow{ animation: pulseSlow 8s ease-in-out infinite }
      `}</style>
    </div>
  )
}
