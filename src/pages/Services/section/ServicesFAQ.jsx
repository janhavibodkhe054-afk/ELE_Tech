import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Do you handle complete turnkey projects?",
    answer:
      "Yes, we provide end-to-end project execution covering design, engineering, procurement, installation, testing, and final commissioning.",
  },
  {
    question: "Do you provide on-site installation support?",
    answer:
      "Yes, our experienced engineering team ensures professional on-site installation, supervision, and coordination for smooth project execution.",
  },
  {
    question: "Can you source specific OEM spare parts?",
    answer:
      "We work with trusted OEMs and certified vendors to source genuine, quality-tested spare parts that meet industrial standards.",
  },
];

const ServicesFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-orange-50 overflow-hidden">

      {/* Decorative shapes */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-widest uppercase rounded-full bg-orange-100 text-orange-600">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Clear answers to common questions about our engineering services and project execution capabilities.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg border border-white/50 rounded-2xl shadow-lg overflow-hidden transition-all duration-500"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`text-orange-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 pb-6 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesFAQ;
