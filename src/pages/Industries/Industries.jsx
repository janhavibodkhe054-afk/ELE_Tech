import React from 'react'
import IndustriesHero from './section/IndustriesHero';
import IndustriesGrid from './section/IndustriesGrid';
import IndustryAccordion from './section/IndustryAccordion';
import IndustryStats from './section/IndustryStats';
import FlowIndustry from './section/FlowIndustry';
import IndustryCTA from './section/IndustryCTA';

const Industries = () => {
  return (
    <div>
      <IndustriesHero />
      <IndustriesGrid />
      <IndustryAccordion />
      <IndustryStats />
      <FlowIndustry />
      <IndustryCTA />
    </div>
  )
}

export default Industries
