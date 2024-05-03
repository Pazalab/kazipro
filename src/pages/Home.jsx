import Footer from '../components/Footer'
import AboutSection from '../components/Homepage/AboutSection'
import Contact from '../components/Homepage/Contact'
import Faqs from '../components/Homepage/Faqs'
import HeroSection from '../components/Homepage/HeroSection'
import Nudge from '../components/Homepage/Nudge'
import Services from '../components/Homepage/Services'
import Navbar from '../components/Navbar'
import Pricing from '../components/Homepage/Pricing'
import Testimonials from '../components/Homepage/Testimonials'

const Home = () => {
  return (
    <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <Nudge />
          <Services />
          <Pricing />
          <Testimonials />
          <Faqs />
          <Contact />
          <Footer />
    </>
  )
}

export default Home