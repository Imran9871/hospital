import React from 'react'
import HeroContact from '../components/Contact/HeroContact'
import ContactSection from '../components/Contact/ContactCard'
import Contactform from '../components/Contact/Contactform'

const Contact = () => {
  return (
    <div>
      <HeroContact/>
      <ContactSection />
      <Contactform/>
    </div>
  )
}

export default Contact