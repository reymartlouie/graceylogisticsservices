import AnimateIn from '../components/AnimateIn'

const differentiators = [
  { icon: '✅', label: 'Proven record of timely deliveries' },
  { icon: '💰', label: 'Cost-efficient and flexible logistics solutions' },
  { icon: '🛡️', label: 'Commitment to safety, compliance, and sustainability' },
  { icon: '🕐', label: 'Customer-first approach with 24/7 support' },
]

const stats = [
  { strong: 'FTL & LTL', p: 'Flexible load options' },
  { strong: 'Metro Manila', p: 'North & South Luzon' },
  { strong: 'Inter-island', p: 'Freight forwarding' },
  { strong: 'Door-to-Door', p: 'Last-mile delivery' },
]

export default function WhyGracey() {
  return (
    <section className="section section-warm" id="why">
      <div className="inner split">
        <div className="split-text">
          <AnimateIn animation="scroll-animate-left">
            <p className="eyebrow">02 · Why Us</p>
            <h2>Logistics you can<br />actually count on.</h2>
            <p>
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
          </AnimateIn>
        </div>
        <div className="split-grid">
          {stats.map((s, i) => (
            <AnimateIn animation="scroll-animate-scale" delay={i * 100} key={s.strong}>
              <div className="pill-card">
                <strong>{s.strong}</strong>
                <p>{s.p}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
