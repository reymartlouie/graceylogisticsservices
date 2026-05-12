export default function TrackShipment() {
  return (
    <section className="section section-dark" id="track">
      <div className="inner track-inner">
        <div className="track-text">
          <p className="eyebrow eyebrow-light">Shipment Tracking</p>
          <h2 className="h2-light">Where's your<br />cargo right now?</h2>
          <p className="track-sub">
            Enter your reference number and our team will send you a real-time update on your shipment status.
          </p>
        </div>
        <div className="track-form-wrap">
          <div className="track-form">
            <label htmlFor="track-ref">Reference / Waybill Number</label>
            <input
              id="track-ref"
              type="text"
              placeholder="e.g. GLS-20240401-001"
              autoComplete="off"
            />
            <a href="tel:09271739599" className="btn btn-primary" style={{ justifyContent: 'center' }}>
              Track Shipment →
            </a>
            <p className="track-note">
              No reference number? Call us at <a href="tel:09271739599">0927 1739 599</a> and we'll look it up for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
