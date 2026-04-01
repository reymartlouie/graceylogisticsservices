import { useState } from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#home" className="nav-logo">
          <img src={logo} alt="Gracey Logistics Services" className="nav-logo-img" />
          Gracey Logistics
        </a>
        <button className="nav-toggle" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#contacts" onClick={() => setMenuOpen(false)}>Contacts</a></li>
          <li><a href="#track" className="nav-track" onClick={() => setMenuOpen(false)}>📦 Track Shipment</a></li>
        </ul>
      </div>
    </nav>
  )
}
