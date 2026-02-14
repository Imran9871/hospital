import React from 'react'
import ImageSlider from '../components/Home/ImageSlider'
import AboutSection from '../components/Home/AboutSection'
import ServicesSection from '../components/Home/ServicesSection'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import ContactSection from '../components/Contact/ContactCard'

const Home = () => {
  return (
    <div>
        <ImageSlider/>
        <AboutSection/>
        <ServicesSection/>
        <WhyChooseUs/>
        {/* <ContactSection /> */}
    </div>
  )
}

export default Home
