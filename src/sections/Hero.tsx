import heroBg from '../assets/hero-truck.webp'

export default function Hero() {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-left">
          <p className="eyebrow">Trusted Freight Transport · Philippines</p>
          <h1>
            Your Trusted Partner<br />
            in Nationwide<br />
            Freight Transport.
          </h1>
          <p className="hero-sub">
            Safe, efficient, and cost-effective freight solutions across Metro Manila, North, and South — delivering goods throughout the Philippines.
          </p>
          <div className="hero-cta">
            <a href="#contacts" className="btn btn-primary">Get a Quote</a>
            <a href="#services" className="btn btn-ghost">Learn More →</a>
          </div>
        </div>
      </div>
      <div className="hero-cards-row">
        <div className="hero-card">
          <span className="hero-card-icon">🚛</span>
          <div>
            <strong>Nationwide Coverage</strong>
            <p>Metro Manila, North &amp; South</p>
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
    </section>
  )
}
