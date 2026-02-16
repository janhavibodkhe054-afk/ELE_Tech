// IndustryAccordion.jsx
import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaCar,
  FaIndustry,
  FaBuilding,
  FaCog,
  FaRobot,
} from "react-icons/fa";

const industryDetails = [
  {
    title: "Automobile Industry",
    content:
      "We provide turnkey engineering solutions for automobile manufacturing facilities, including assembly line installations, utility piping, electrical infrastructure, and equipment integration to support efficient production processes.",
    icon: <FaCar size={28} />,
    color: "bg-blue-500",
  },
  {
    title: "Manufacturing & Industrial Plants",
    content:
      "Our services support manufacturing industries with reliable electrical systems, mechanical utilities, and infrastructure solutions that improve operational efficiency and minimize downtime.",
    icon: <FaIndustry size={28} />,
    color: "bg-orange-500",
  },
  {
    title: "Commercial Infrastructure",
    content:
      "We offer electrical and IT infrastructure solutions for commercial spaces, ensuring safe power distribution, structured networking, and advanced security systems.",
    icon: <FaBuilding size={28} />,
    color: "bg-blue-700",
  },
  {
    title: "Engineering & Process Industries",
    content:
      "We work with engineering and process-based industries requiring precision piping systems, utility integration, and dependable electrical installations designed for long-term performance.",
    icon: <FaCog size={28} />,
    color: "bg-orange-400",
  },
  {
    title: "Industrial Automation & Production Units",
    content:
      "Our expertise in assembly line installation and commissioning helps automation-driven industries achieve optimized workflow, smooth startup operations, and improved productivity.",
    icon: <FaRobot size={28} />,
    color: "bg-blue-600",
  },
];

const IndustryAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <img
          src="/industryjpg.jpg"
          alt="Industry Background"
          className="w-full h-full object-cover brightness-80" // darkens the image
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30"></div>
      </div>

      {/* Accordion Content */}
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
          Industry Solutions
        </h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          {industryDetails.map((item, index) => (
            <div
              key={index}
              className={`relative group bg-white rounded-2xl shadow-xl overflow-hidden border-l-4 ${
                activeIndex === index
                  ? "border-gradient-to-r from-blue-600 to-orange-500"
                  : "border-gray-300"
              } transition-all duration-300 hover:shadow-2xl`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center p-5 focus:outline-none"
              >
                {/* Icon */}
                <div
                  className={`${item.color} w-12 h-12 flex items-center justify-center rounded-full text-white mr-4 flex-shrink-0`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="flex-1 text-lg md:text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>

                {/* Chevron */}
                <div className="ml-4 text-gray-500 transform transition-transform duration-300">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {/* Content */}
              <div
                className={`px-5 text-gray-700 overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p>{item.content}</p>
              </div>

              {/* Accent circles */}
              <div className="absolute -top-5 -right-5 w-6 h-6 rounded-full bg-blue-200 opacity-50"></div>
              <div className="absolute -bottom-5 -left-5 w-8 h-8 rounded-full bg-orange-200 opacity-40"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryAccordion;
