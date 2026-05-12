const differentiators = [
  { icon: '✅', label: 'Proven record of timely deliveries' },
  { icon: '💰', label: 'Cost-efficient and flexible logistics solutions' },
  { icon: '🛡️', label: 'Commitment to safety, compliance, and sustainability' },
  { icon: '🕐', label: 'Customer-first approach with 24/7 support' },
]

export default function WhyGracey() {
  return (
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
  )
}
