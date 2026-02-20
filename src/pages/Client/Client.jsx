import React from "react";
import ClientIntro from "./section/ClientIntro";
import ClientCommitment from "./section/ClientCommitment";

import ClientStats from "./section/ClientStats";
import IndustriesWeServe from "./section/IndustriesWeServe";
import WhyClientsChooseUs from "./section/WhyClientsChooseUs";

const Client = () => {
  return (
    <div>
      <ClientIntro />
      <ClientCommitment />
      <WhyClientsChooseUs />

      <ClientStats />
      <IndustriesWeServe />
    </div>
  );
};

export default Client;
