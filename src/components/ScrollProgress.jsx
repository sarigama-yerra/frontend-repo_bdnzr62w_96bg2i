import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = Math.min(1, Math.max(0, scrollTop / docHeight))
      setProgress(pct)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60]">
      <div className="h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400" style={{ width: `${progress * 100}%` }} />
    </div>
  )
}
