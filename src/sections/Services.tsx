const services = [
  {
    icon: '🚛',
    title: 'Full Truckload (FTL) & Less-than-Truckload (LTL) Shipping',
    description:
      'Whether you have enough cargo to fill an entire vehicle or just a few pallets, we provide versatile shipping configurations to optimize your costs. Our FTL services offer dedicated transit for maximum speed, while our LTL solutions provide a cost-effective way for smaller businesses to access our nationwide network.',
  },
  {
    icon: '🗺️',
    title: 'Regional & Nationwide Trucking Operations',
    description:
      'We bridge the distance across the Philippines, with specialized operations in Metro Manila, North, and South Luzon. Our modern fleet is maintained for maximum efficiency and safety, ensuring that no matter the destination, your goods arrive in excellent condition.',
  },
  {
    icon: '📦',
    title: 'Strategic Business Logistics Support',
    description:
      'We offer scalable solutions designed for small, medium, and large businesses. From regular inventory transfers to specialized freight forwarding across Luzon and Visayas, we provide a customer-first approach backed by a 24/7 support system.',
  },
  {
    icon: '📍',
    title: 'Premium Last-Mile & Door-to-Door Delivery',
    description:
      'We manage the entire journey, picking up from your facility and delivering directly to the destination. By combining real-time GPS tracking with a strong safety culture, we ensure a seamless last-mile experience that protects your cargo and your reputation.',
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="inner">
        <p className="eyebrow">Solutions</p>
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
  )
}
