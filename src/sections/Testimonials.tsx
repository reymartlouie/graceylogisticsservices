import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Mico S.',
    location: 'Quezon City',
    text: "Gracey Logistics handled our deliveries better than any other service we've tried. They were fast, careful, and kept us updated the whole way.",
  },
  {
    name: 'Janine L.',
    location: 'Operations Manager, Metro Hardware Supply',
    text: "We used Gracey Logistics for a series of deliveries to our branches across Luzon, and they delivered every time—literally. Highly recommended.",
  },
  {
    name: 'Ronald D.',
    location: 'Bulacan',
    text: "I needed to send equipment to my cousin in Iloilo and had no idea where to start. Gracey made the whole process smooth and affordable.",
  },
  {
    name: 'Arlene M.',
    location: 'Caloocan',
    text: "Booking with Gracey Logistics was quick and hassle-free. They picked up my cargo the same day and delivered it earlier than expected.",
  },
  {
    name: 'Paolo G.',
    location: 'Warehouse Manager, PrimeMart Retail',
    text: "We've been using Gracey Logistics for over a year now to move inventory between our branches. They're always on time and easy to work with.",
  },
  {
    name: 'Ella R.',
    location: 'Taguig',
    text: "I was worried about sending fragile items across provinces, but they arrived in perfect condition. The driver was professional and gave updates along the way.",
  },
  {
    name: 'Leo T.',
    location: 'Bacolod',
    text: "Gracey Logistics really helped us during a last-minute shipment. They were responsive and made sure everything was handled properly.",
  },
  {
    name: 'Camille S.',
    location: 'Cebu City',
    text: "I like that they don't overpromise. They just deliver—literally and figuratively. Honest service, reasonable rates, no drama.",
  },
]

const PER_PAGE = 3
const pages = Array.from(
  { length: Math.ceil(testimonials.length / PER_PAGE) },
  (_, i) => testimonials.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE)
)

function initials(name: string) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
}

export default function Testimonials() {
  const [page, setPage] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setPage(p => (p + 1) % pages.length)
    }, 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section" id="testimonials">
      <div className="inner">
        <p className="eyebrow">Client Stories</p>
        <h2>Real results.<br />Real clients.</h2>

        <div className="t3-viewport">
          <div
            className="t3-track"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {pages.map((group, gi) => (
              <div className="t3-page" key={gi}>
                {group.map((t) => (
                  <div className="tcard" key={t.name}>
                    <span className="tcard-quote">&ldquo;</span>
                    <p className="tcard-text">{t.text}</p>
                    <div className="tcard-footer">
                      <div className="tcard-avatar">{initials(t.name)}</div>
                      <div>
                        <strong className="tcard-name">{t.name}</strong>
                        <span className="tcard-loc">{t.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="t3-dots">
          {pages.map((_, i) => (
            <button
              key={i}
              className={`t3-dot${i === page ? ' active' : ''}`}
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
