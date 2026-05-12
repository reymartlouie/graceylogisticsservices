import { useState } from 'react'
import './App.css'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import WhyGracey from './sections/WhyGracey'
import VisionMission from './sections/VisionMission'
import Testimonials from './sections/Testimonials'
import TrackShipment from './sections/TrackShipment'
import Contact from './sections/Contact'

export default function App() {
  const [splashDone, setSplashDone] = useState(false)

  return (
    <>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
      <div className="site">
        <Navbar />
        <Hero />
        <Services />
        <WhyGracey />
        <VisionMission />
        <Testimonials />
        <TrackShipment />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
