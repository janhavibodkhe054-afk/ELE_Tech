// IndustriesGrid.jsx
import React, { useEffect } from "react";
import { FaCar, FaIndustry, FaBuilding, FaCog, FaRobot } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const industries = [
  {
    icon: <FaCar size={30} />,
    title: "Automobile Industry",
    description:
      "Turnkey solutions for automobile manufacturing facilities, assembly lines, and equipment integration."
  },
  {
    icon: <FaIndustry size={30} />,
    title: "Manufacturing & Industrial Plants",
    description:
      "Reliable electrical systems, mechanical utilities, and infrastructure for operational efficiency."
  },
  {
    icon: <FaBuilding size={30} />,
    title: "Commercial Infrastructure",
    description:
      "Electrical and IT infrastructure solutions for safe power distribution and advanced security."
  },
  {
    icon: <FaCog size={30} />,
    title: "Engineering & Process Industries",
    description:
      "Precision piping, utility integration, and dependable electrical installations."
  },
  {
    icon: <FaRobot size={30} />,
    title: "Industrial Automation & Production Units",
    description:
      "Optimized assembly line installation, commissioning, and workflow automation."
  },
];

const IndustriesGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-12" data-aos="fade-down">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {industries.map((ind, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-blue-400"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-400 to-orange-400 text-white text-2xl group-hover:scale-110 transition-transform">
                {ind.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-900 transition-colors">{ind.title}</h3>
              <p className="text-gray-600 text-sm">{ind.description}</p>
              {/* Floating accent circle */}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
