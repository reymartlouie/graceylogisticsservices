export default function Contact() {
  return (
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
              <p>0927 1739 599</p>
            </div>
          </a>
          <a className="contact-tile" href="mailto:gracey.logisticsservices@gmail.com">
            <span className="contact-tile-icon">✉️</span>
            <div>
              <strong>Email</strong>
              <p>gracey.logisticsservices@gmail.com</p>
            </div>
          </a>
          <div className="contact-tile">
            <span className="contact-tile-icon">📍</span>
            <div>
              <strong>Address</strong>
              <p>Brgy. Catmon, Sta. Maria, Bulacan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
