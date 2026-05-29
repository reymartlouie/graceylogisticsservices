import AnimateIn from '../components/AnimateIn'

const tiles = [
  {
    href: 'tel:09271739599',
    icon: '📞',
    label: 'Phone / SMS',
    value: '0927 1739 599',
    isLink: true,
  },
  {
    href: 'mailto:gracey.logisticsservices@gmail.com',
    icon: '✉️',
    label: 'Email',
    value: 'gracey.logisticsservices@gmail.com',
    isLink: true,
  },
  {
    href: undefined,
    icon: '📍',
    label: 'Address',
    value: 'Brgy. Catmon, Sta. Maria, Bulacan',
    isLink: false,
  },
]

export default function Contact() {
  return (
    <section className="section section-warm" id="contacts">
      <div className="inner">
        <AnimateIn>
          <p className="eyebrow">06 · Contact</p>
          <h2>Let's move<br />your cargo.</h2>
          <p className="lead">Reach out and we'll get your shipment moving.</p>
        </AnimateIn>
        <div className="contact-row">
          {tiles.map((t, i) =>
            t.isLink ? (
              <AnimateIn animation="scroll-animate-scale" delay={i * 110} key={t.label}>
                <a className="contact-tile" href={t.href}>
                  <span className="contact-tile-icon">{t.icon}</span>
                  <div>
                    <strong>{t.label}</strong>
                    <p>{t.value}</p>
                  </div>
                </a>
              </AnimateIn>
            ) : (
              <AnimateIn animation="scroll-animate-scale" delay={i * 110} key={t.label}>
                <div className="contact-tile">
                  <span className="contact-tile-icon">{t.icon}</span>
                  <div>
                    <strong>{t.label}</strong>
                    <p>{t.value}</p>
                  </div>
                </div>
              </AnimateIn>
            )
          )}
        </div>
      </div>
    </section>
  )
}
