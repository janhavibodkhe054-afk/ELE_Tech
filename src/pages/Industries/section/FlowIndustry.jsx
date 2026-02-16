// IndustryProcess.jsx
import React from "react";
import { FaSearch, FaDraftingCompass, FaTools, FaHandsHelping } from "react-icons/fa";

const steps = [
  { icon: <FaSearch />, title: "Consultation & Assessment", desc: "Understanding industry requirements and operational needs." },
  { icon: <FaDraftingCompass />, title: "Design & Engineering", desc: "Creating tailored electrical and mechanical solutions." },
  { icon: <FaTools />, title: "Installation & Commissioning", desc: "Implementing projects with precision and safety." },
  { icon: <FaHandsHelping />, title: "Maintenance & Support", desc: "Providing ongoing support for smooth operations." },
];

const IndustryProcess = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-down">Our Approach</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:scale-105 transition-transform" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="text-orange-500 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryProcess;
