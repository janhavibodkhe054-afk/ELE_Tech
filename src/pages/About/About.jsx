import React from 'react'
import HeroAbout from './section/HeroAbout'

import VisinAbout from './section/VisinAbout'
import CoreValues from './section/CoreValues'

import AboutSection from './section/AboutSection'

const About = () => {
  return (
    <div>
      <HeroAbout />
      <AboutSection/>
      
      <VisinAbout />
      
      <CoreValues />
    </div>
  )
}

export default About
