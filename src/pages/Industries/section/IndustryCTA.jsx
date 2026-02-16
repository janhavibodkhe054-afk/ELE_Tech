// IndustryCTA.jsx
import React from "react";

const IndustryCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-400 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-down">
        Ready to Transform Your Industry?
      </h2>
      <p className="mb-8 text-lg md:text-xl" data-aos="fade-up">
        Contact Ele-Tech Engineering Solutions today and discuss your project with our experts.
      </p>
      <a
        href="/contact"
        className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
        data-aos="zoom-in"
      >
        Get in Touch
      </a>
    </section>
  );
};

export default IndustryCTA;
