import AnimateIn from '../components/AnimateIn'

const services = [
  {
    icon: '🚛',
    title: 'FTL & LTL Freight.',
    description:
      'Whether you have enough cargo to fill an entire vehicle or just a few pallets, we provide versatile shipping configurations to optimize your costs. Dedicated transit for maximum speed, or cost-effective LTL access to our nationwide network.',
  },
  {
    icon: '🗺️',
    title: 'Nationwide Trucking.',
    description:
      'We bridge the distance across the Philippines — Metro Manila, North, and South Luzon. Our modern fleet is maintained for maximum efficiency and safety, ensuring your goods arrive in excellent condition every time.',
  },
  {
    icon: '📦',
    title: 'Business Logistics.',
    description:
      'Scalable solutions for small, medium, and large businesses. From regular inventory transfers to specialized freight forwarding across Luzon and Visayas — a customer-first approach backed by a 24/7 support system.',
  },
  {
    icon: '📍',
    title: 'Last-Mile Delivery.',
    description:
      'We manage the entire journey — pickup to final destination. Real-time GPS tracking and a strong safety culture ensure a seamless last-mile experience that protects your cargo and your reputation.',
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="inner">
        <AnimateIn>
          <p className="eyebrow">01 · Services</p>
          <h2>Built for every<br />shipment, every scale.</h2>
          <p className="lead">
            From single pallets to full truckloads — we handle it all with the same care and precision.
          </p>
        </AnimateIn>
        <div className="services-grid">
          {services.map((s, i) => (
            <AnimateIn animation="scroll-animate-scale" delay={i * 110} key={s.title}>
              <div className="service-card">
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
