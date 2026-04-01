import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'Mico S.',
    location: 'Quezon City',
    text: 'Gracey Logistics handled our deliveries better than any other service we\'ve tried. They were fast, careful, and kept us updated the whole way.',
  },
  {
    name: 'Janine L.',
    location: 'Operations Manager, Metro Hardware Supply',
    text: 'We used Gracey Logistics for a series of deliveries to our branches across Luzon, and they delivered every time—literally. Highly recommended.',
  },
  {
    name: 'Ronald D.',
    location: 'Bulacan',
    text: 'I needed to send equipment to my cousin in Iloilo and had no idea where to start. Gracey made the whole process smooth and affordable.',
  },
  {
    name: 'Arlene M.',
    location: 'Caloocan',
    text: 'Booking with Gracey Logistics was quick and hassle-free. They picked up my cargo the same day and delivered it earlier than expected.',
  },
  {
    name: 'Paolo G.',
    location: 'Warehouse Manager, PrimeMart Retail',
    text: 'We\'ve been using Gracey Logistics for over a year now to move inventory between our branches. They\'re always on time and easy to work with.',
  },
  {
    name: 'Ella R.',
    location: 'Taguig',
    text: 'I was worried about sending fragile items across provinces, but they arrived in perfect condition. The driver was professional and gave updates along the way.',
  },
  {
    name: 'Leo T.',
    location: 'Bacolod',
    text: 'Gracey Logistics really helped us during a last-minute shipment. They were responsive and made sure everything was handled properly.',
  },
  {
    name: 'Camille S.',
    location: 'Cebu City',
    text: 'I like that they don\'t overpromise. They just deliver—literally and figuratively. Honest service, reasonable rates, no drama.',
  },
]

const INTERVAL = 4500

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (index: number) => {
    setCurrent(index)
  }

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, INTERVAL)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused])

  return (
    <section className="section" id="testimonials">
      <div className="inner">
        <p className="eyebrow">Client Stories</p>
        <h2>Real results.<br />Real clients.</h2>
        <div
          className="testimonial-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="testimonial-track-wrapper">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div className="testimonial-slide" key={i}>
                  <p className="testimonial-quote">&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial-meta">
                    <strong>{t.name}</strong>
                    <span>{t.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="t-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot${i === current ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
