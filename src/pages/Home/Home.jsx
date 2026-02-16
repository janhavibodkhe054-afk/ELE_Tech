import React from "react";
import HeroHome from "./section/HeroHome";
import ServiceHome from "./section/ServiceHome";
import AboutHome from "./section/AboutHome";
import WhoHome from "./section/WhoHome";
import CustomerHome from "./section/CustomerHome";
import VisionMission from "./section/VisionMission";

const Home = () => {
  return (
    <div>
      <HeroHome />
      <ServiceHome /> 
      <AboutHome />
        <WhoHome />
        
        <VisionMission />
        <CustomerHome />
    </div>
  );
};

export default Home;
