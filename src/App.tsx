import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyGracey from './components/WhyGracey'
import VisionMission from './components/VisionMission'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="site">
      <Navbar />
      <Hero />
      <Services />
      <WhyGracey />
      <VisionMission />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
