import AnimateIn from '../components/AnimateIn'

export default function VisionMission() {
  return (
    <section className="section section-dark" id="about">
      <div className="inner">
        <AnimateIn>
          <p className="eyebrow eyebrow-light">03 · Our Story</p>
          <h2 className="h2-light">Driven by purpose.<br />Defined by delivery.</h2>
        </AnimateIn>
        <div className="vm-row">
          <div className="vm-block">
            <AnimateIn animation="scroll-animate-left" delay={100}>
              <span className="vm-num">01 · Vision</span>
              <h3>Our Vision.</h3>
              <p>
                To be the premier logistics partner of choice, distinguished by our ability to blend
                large-scale nationwide operations with a personalized, customer-first approach. We
                strive to lead the industry through continuous innovation in our fleet and a
                safety-first culture that inspires absolute confidence in our partners across Metro
                Manila and beyond.
              </p>
            </AnimateIn>
          </div>
          <div className="vm-divider" />
          <div className="vm-block">
            <AnimateIn animation="scroll-animate-right" delay={200}>
              <span className="vm-num">02 · Mission</span>
              <h3>Our Mission.</h3>
              <p>
                To orchestrate a smarter, more efficient supply chain by delivering excellence through
                meticulous fleet maintenance, real-time tracking, and a highly experienced workforce.
                We are dedicated to the safe, punctual arrival of every shipment, offering scalable
                solutions and 24/7 support to empower our clients' growth and maintain a legacy of
                reliability in the Philippine logistics industry.
              </p>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}
