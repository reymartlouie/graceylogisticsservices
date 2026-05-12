export default function Hero() {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(/hero-truck.webp)` }}>
      <div className="hero-overlay" />
      <div className="hero-inner">
        <p className="hero-eyebrow">Trusted Freight Transport · Philippines</p>
        <h1 className="hero-headline">
          Your Trusted Partner<br />
          in Nationwide<br />
          Freight Transport.
        </h1>
        <p className="hero-sub">
          Safe, efficient, and cost-effective freight solutions across Metro Manila,
          North, and South — delivering goods throughout the Philippines.
        </p>
        <div className="hero-cta">
          <a href="#contacts" className="btn btn-primary">Get a Quote</a>
          <a href="#services" className="btn btn-ghost">Learn More →</a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat-icon">🚛</span>
          <div>
            <strong>Nationwide Coverage</strong>
            <p>Metro Manila, North &amp; South</p>
          </div>
        </div>
        <div className="hero-stat-sep" />
        <div className="hero-stat">
          <span className="hero-stat-icon">📡</span>
          <div>
            <strong>GPS Tracked</strong>
            <p>Real-time updates</p>
          </div>
        </div>
        <div className="hero-stat-sep" />
        <div className="hero-stat">
          <span className="hero-stat-icon">🕐</span>
          <div>
            <strong>24/7 Support</strong>
            <p>Always available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
