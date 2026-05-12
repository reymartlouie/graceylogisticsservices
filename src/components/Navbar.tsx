import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo">
          <img src="/logo-new.webp" alt="Gracey Logistics Services" className="nav-logo-img" />
          Gracey Logistics Services
        </a>
        <button className="nav-toggle" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#contacts" onClick={() => setMenuOpen(false)}>Contacts</a></li>
          <li><a href="#track" className="nav-track" onClick={() => setMenuOpen(false)}>📦 Track Shipment</a></li>
        </ul>
      </div>
    </nav>
  )
}
