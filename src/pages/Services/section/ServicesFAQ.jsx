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

  return (
    <section
      className="relative py-20 sm:py-24 lg:py-28 bg-cover bg-center"
      style={{ backgroundImage: "url('/faq.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-orange-900/70"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 text-white">
        
        {/* Header */}
        <div
          className="mb-12 sm:mb-16 max-w-3xl"
          data-aos="fade-right"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-white/80">
            Answers to common questions about our industrial engineering services,
            execution capabilities, and technical expertise.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="bg-white text-gray-900 rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-5 sm:px-6 py-4 sm:py-5 text-left"
              >
                <h3 className="font-semibold text-base sm:text-lg">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`text-orange-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-5 sm:px-6 transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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
