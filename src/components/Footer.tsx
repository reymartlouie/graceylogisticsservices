import { useState } from 'react'
import logo from '../assets/logo.png'
import LegalModal from './LegalModal'

type Policy = 'terms' | 'privacy'

export default function Footer() {
  const [modal, setModal] = useState<Policy | null>(null)

  return (
    <>
      <footer className="footer">
        <div className="inner footer-inner">
          <div className="footer-left">
            <div className="footer-brand">
              <img src={logo} alt="Gracey Logistics Services" className="footer-logo-img" />
              Gracey Logistics Services
            </div>
            <p className="footer-tagline">Safe, efficient, and cost-effective freight across the Philippines.</p>
          </div>
          <div className="footer-right">
            <p className="footer-copy">&copy; {new Date().getFullYear()} Gracey Logistics Services. All rights reserved.</p>
            <div className="footer-links">
              <button className="footer-link" onClick={() => setModal('terms')}>Terms & Conditions</button>
              <span className="footer-sep">·</span>
              <button className="footer-link" onClick={() => setModal('privacy')}>Privacy Policy</button>
            </div>
          </div>
        </div>
      </footer>
      <LegalModal open={modal} onClose={() => setModal(null)} />
    </>
  )
}
