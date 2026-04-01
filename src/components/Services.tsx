const services = [
  {
    icon: '🚛',
    title: 'Full Truckload & Less-than-Truckload',
    description:
      'Dedicated full-vehicle transit and cost-effective partial-load options — FTL for large shipments, LTL for businesses that need flexibility without the full cost.',
  },
  {
    icon: '🗺️',
    title: 'Long-Haul & Short-Haul Trucking',
    description:
      'Reliable trucking operations across Metro Manila, North, and South — moving goods throughout the Philippines with a modern, GPS-enabled fleet.',
  },
  {
    icon: '📦',
    title: 'Customized Logistics Solutions',
    description:
      'Scalable supply chain support tailored for small, medium, and large businesses — built around your cargo, your schedule, and your budget.',
  },
  {
    icon: '📍',
    title: 'Door-to-Door & Last-Mile Delivery',
    description:
      'End-to-end shipment management with real-time GPS tracking from pickup to final destination, backed by 24/7 customer service.',
  },
]

export default function Services() {
  return (
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
  )
}
