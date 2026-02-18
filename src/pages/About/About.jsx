import React from 'react'
import HeroAbout from './section/HeroAbout'
import InfoAbout from './section/InfoAbout'
import VisinAbout from './section/VisinAbout'
import CoreValues from './section/CoreValues'
import QualitySection from './section/QualitySection'
import AboutSection from './section/AboutSection'

const About = () => {
  return (
    <div>
      <HeroAbout />
      <AboutSection/>
      
      <VisinAbout />
      <InfoAbout />
      <QualitySection/>
      <CoreValues />
    </div>
  )
}

export default About
