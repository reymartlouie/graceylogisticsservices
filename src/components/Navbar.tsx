import { useState, useEffect, useRef } from 'react'

const SECTIONS = ['home', 'services', 'why', 'about', 'testimonials', 'track', 'contacts'] as const

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 40)
      setMenuOpen(false)

      const offset = window.scrollY + 120
      let current = 'home'
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= offset) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const close = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [menuOpen])

  const isActive = (ids: string | string[]) =>
    Array.isArray(ids) ? ids.includes(activeSection) : activeSection === ids

  return (
    <nav ref={navRef} className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <img src="/logo-new.webp" alt="Gracey Logistics Services" className="nav-logo-img" />
          Gracey Logistics Services
        </a>
        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li>
            <a
              href="#home"
              className={isActive('home') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >Home</a>
          </li>
          <li>
            <a
              href="#services"
              className={isActive(['services', 'why', 'about', 'testimonials']) ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >About</a>
          </li>
          <li>
            <a
              href="#contacts"
              className={isActive('contacts') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >Contacts</a>
          </li>
          <li className="nav-track-wrap">
            <a
              href="#track"
              className="nav-track"
              onClick={() => setMenuOpen(false)}
            >📦 Track Shipment</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
