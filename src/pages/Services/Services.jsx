import React from "react";
import ServicesHero from "./section/ServicesHero";
import ServicesOverview from "./section/ServicesOverview";
import ServicesCards from "./section/ServicesCards";
import WhyChoose from "./section/WhyChoose";
import ServicesFAQ from "./section/ServicesFAQ";

const Services = () => {
  return (
    <>
      <ServicesHero />
      
      <ServicesCards />
      <ServicesOverview />
      <ServicesFAQ />
      <WhyChoose/>
      
    </>
  );
};

export default Services;
