import { useState, useEffect } from 'react'
export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 2200)
    const doneTimer = setTimeout(onDone, 2900)
    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div className={`splash${exiting ? ' splash-exit' : ''}`}>
      <div className="splash-body">
        <img src="/logo-new.webp" alt="Gracey Logistics Services" className="splash-logo" />
        <p className="splash-sub">Trusted · Reliable · Nationwide</p>
      </div>
      <div className="splash-bar" />
    </div>
  )
}
