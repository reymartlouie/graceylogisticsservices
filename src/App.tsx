import { useState } from 'react'
import './App.css'

const testimonials = [
  {
    name: 'Mico S.',
    location: 'Quezon City',
    text: 'Gracey Logistics handled our deliveries better than any other service we\'ve tried. They were fast, careful, and kept us updated the whole way.',
  },
  {
    name: 'Janine L.',
    location: 'Operations Manager, Metro Hardware Supply',
    text: 'We used Gracey Logistics for a series of deliveries to our branches across Luzon, and they delivered every time—literally. Highly recommended.',
  },
  {
    name: 'Ronald D.',
    location: 'Bulacan',
    text: 'I needed to send equipment to my cousin in Iloilo and had no idea where to start. Gracey made the whole process smooth and affordable.',
  },
  {
    name: 'Arlene M.',
    location: 'Caloocan',
    text: 'Booking with Gracey Logistics was quick and hassle-free. They picked up my cargo the same day and delivered it earlier than expected.',
  },
  {
    name: 'Paolo G.',
    location: 'Warehouse Manager, PrimeMart Retail',
    text: 'We\'ve been using Gracey Logistics for over a year now to move inventory between our branches. They\'re always on time and easy to work with.',
  },
  {
    name: 'Ella R.',
    location: 'Taguig',
    text: 'I was worried about sending fragile items across provinces, but they arrived in perfect condition. The driver was professional and gave updates along the way.',
  },
  {
    name: 'Leo T.',
    location: 'Bacolod',
    text: 'Gracey Logistics really helped us during a last-minute shipment. They were responsive and made sure everything was handled properly.',
  },
  {
    name: 'Camille S.',
    location: 'Cebu City',
    text: 'I like that they don\'t overpromise. They just deliver—literally and figuratively. Honest service, reasonable rates, no drama.',
  },
]

const services = [
  {
    icon: '🚛',
    title: 'Full Truckload & Less-than-Truckload',
    description:
      'Dedicated full-vehicle transit and cost-effective partial-load options for businesses of any scale.',
  },
  {
    icon: '🗺️',
    title: 'Regional & Nationwide Trucking',
    description:
      'Metro Manila, North and South Luzon coverage with a modern, well-maintained fleet built for safety.',
  },
  {
    icon: '📦',
    title: 'Strategic Business Logistics',
    description:
      'Scalable solutions for inventory transfers and inter-island freight forwarding with 24/7 support.',
  },
  {
    icon: '📍',
    title: 'Last-Mile Door-to-Door Delivery',
    description:
      'Complete shipment management using GPS tracking and safety protocols from pickup to final destination.',
  },
]

const differentiators = [
  { icon: '⚡', label: 'Fast, reliable delivery' },
  { icon: '💰', label: 'Competitive pricing' },
  { icon: '👷', label: 'Professional driver teams' },
  { icon: '📡', label: 'Real-time tracking updates' },
]

function App() {
  const [current, setCurrent] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <div className="site">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">
          <a href="#home" className="nav-logo">
            <span>🚚</span> Gracey Logistics
          </a>
          <button className="nav-toggle" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#contacts" onClick={() => setMenuOpen(false)}>Contacts</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-left">
            <p className="eyebrow">Trusted Freight Transport · Philippines</p>
            <h1>
              Your Trusted Partner<br />
              in Nationwide<br />
              Freight Transport.
            </h1>
            <p className="hero-sub">
              Safe, affordable, and efficient delivery solutions across Luzon and Visayas.
            </p>
            <div className="hero-cta">
              <a href="#contacts" className="btn btn-primary">Get a Quote</a>
              <a href="#about" className="btn btn-ghost">Learn More →</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <span className="hero-card-icon">🚛</span>
              <div>
                <strong>Nationwide Coverage</strong>
                <p>Luzon &amp; Visayas</p>
              </div>
            </div>
            <div className="hero-card">
              <span className="hero-card-icon">📡</span>
              <div>
                <strong>GPS Tracked</strong>
                <p>Real-time updates</p>
              </div>
            </div>
            <div className="hero-card">
              <span className="hero-card-icon">🕐</span>
              <div>
                <strong>24/7 Support</strong>
                <p>Always available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="inner">
          <p className="eyebrow">What We Offer</p>
          <h2>Built for every<br />shipment, every scale.</h2>
          <p className="lead">
            From single pallets to full truckloads — we handle it all with the same care and precision.
          </p>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section-warm" id="why">
        <div className="inner split">
          <div className="split-text">
            <p className="eyebrow">Why Gracey?</p>
            <h2>Logistics you can<br />actually count on.</h2>
            <p className="lead">
              We combine operational scale with the kind of personal attention most logistics companies stop offering once you sign the contract.
            </p>
            <ul className="check-list">
              {differentiators.map((d) => (
                <li key={d.label}>
                  <span className="check-icon">{d.icon}</span>
                  {d.label}
                </li>
              ))}
            </ul>
            <a href="#contacts" className="btn btn-primary">Talk to Us</a>
          </div>
          <div className="split-grid">
            <div className="pill-card">
              <strong>FTL &amp; LTL</strong>
              <p>Flexible load options</p>
            </div>
            <div className="pill-card">
              <strong>Metro Manila</strong>
              <p>North &amp; South Luzon</p>
            </div>
            <div className="pill-card">
              <strong>Inter-island</strong>
              <p>Freight forwarding</p>
            </div>
            <div className="pill-card">
              <strong>Door-to-Door</strong>
              <p>Last-mile delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section section-dark" id="about">
        <div className="inner">
          <p className="eyebrow eyebrow-light">Who We Are</p>
          <h2 className="h2-light">Driven by purpose.<br />Defined by delivery.</h2>
          <div className="vm-row">
            <div className="vm-block">
              <span className="vm-num">01</span>
              <h3>Vision</h3>
              <p>
                To merge large-scale operations with personalized service — emphasizing fleet innovation
                and a safety-first culture that sets the standard for logistics excellence in the Philippines.
              </p>
            </div>
            <div className="vm-divider" />
            <div className="vm-block">
              <span className="vm-num">02</span>
              <h3>Mission</h3>
              <p>
                To create efficient supply chains through rigorous fleet maintenance, real-time monitoring,
                and experienced personnel — ensuring punctual, secure deliveries for every client we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" id="testimonials">
        <div className="inner">
          <p className="eyebrow">Client Stories</p>
          <h2>Real results.<br />Real clients.</h2>
          <div className="testimonial-wrap">
            <div className="testimonial-body">
              <p className="testimonial-quote">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div className="testimonial-meta">
                <strong>{testimonials[current].name}</strong>
                <span>{testimonials[current].location}</span>
              </div>
            </div>
            <div className="testimonial-controls">
              <button className="t-btn" onClick={prev}>←</button>
              <span className="t-counter">{current + 1} / {testimonials.length}</span>
              <button className="t-btn" onClick={next}>→</button>
            </div>
            <div className="t-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot${i === current ? ' active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-warm" id="contacts">
        <div className="inner">
          <p className="eyebrow">Get in Touch</p>
          <h2>Ready to move<br />your cargo?</h2>
          <p className="lead">Reach out and we'll get your shipment moving.</p>
          <div className="contact-row">
            <a className="contact-tile" href="tel:09271739599">
              <span className="contact-tile-icon">📞</span>
              <div>
                <strong>Phone / SMS</strong>
                <p>0927 173 9599</p>
              </div>
            </a>
            <a className="contact-tile" href="mailto:gracey.logisticsservices@gmail.com">
              <span className="contact-tile-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>gracey.logisticsservices@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="inner footer-inner">
          <div className="footer-brand">🚚 Gracey Logistics Services</div>
          <p>Safe, affordable, and efficient delivery across the Philippines.</p>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Gracey Logistics Services. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default App
