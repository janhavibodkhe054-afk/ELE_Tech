import React from "react";
import { FaCheckCircle, FaTools, FaShieldAlt } from "react-icons/fa";

const QualitySection = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/img1.webp"
          alt="Engineering Background"
          className="w-full h-full object-cover"
        />
        {/* DARK BLUE OVERLAY */}
        <div className="absolute inset-0 bg-blue-950/90"></div>
      </div>

      {/* ORANGE GLOW SHAPES */}
      <div className="absolute top-0 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-orange-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-orange-400 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">

        {/* HEADING */}
        <h2
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-tight"
        >
          Quality in Everything…
          <span className="text-orange-400"> We DO…!</span>
        </h2>

        {/* SUBTEXT */}
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-blue-100 mt-4 sm:mt-6 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg"
        >
          At ELE-TECH Engineering Solutions, quality is not just a process —
          it is a commitment embedded in every stage of execution. From
          engineering design and installation to commissioning and long-term
          support, we ensure reliability, safety, and performance-driven
          results for every project we deliver.
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 sm:mt-14">

          {/* FEATURE 1 */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full bg-orange-500 text-white text-xl sm:text-2xl shadow-lg">
              <FaCheckCircle />
            </div>
            <h4 className="text-white font-semibold mt-3 sm:mt-4 text-lg sm:text-xl">
              Precision Execution
            </h4>
            <p className="text-blue-200 text-xs sm:text-sm mt-1 sm:mt-2 leading-relaxed">
              Every project follows structured processes ensuring accuracy,
              durability, and operational efficiency.
            </p>
          </div>

          {/* FEATURE 2 */}
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white text-xl sm:text-2xl shadow-lg">
              <FaTools />
            </div>
            <h4 className="text-white font-semibold mt-3 sm:mt-4 text-lg sm:text-xl">
              Engineering Excellence
            </h4>
            <p className="text-blue-200 text-xs sm:text-sm mt-1 sm:mt-2 leading-relaxed">
              Combining technical expertise with modern engineering practices
              to deliver dependable industrial solutions.
            </p>
          </div>

          {/* FEATURE 3 */}
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full bg-orange-500 text-white text-xl sm:text-2xl shadow-lg">
              <FaShieldAlt />
            </div>
            <h4 className="text-white font-semibold mt-3 sm:mt-4 text-lg sm:text-xl">
              Safety & Reliability
            </h4>
            <p className="text-blue-200 text-xs sm:text-sm mt-1 sm:mt-2 leading-relaxed">
              Safety and long-term performance remain core priorities in all
              electrical and mechanical implementations.
            </p>
          </div>

        </div>

        {/* ORANGE LINE ACCENT */}
        <div
          data-aos="zoom-in"
          className="w-16 sm:w-24 h-1 bg-orange-500 mx-auto mt-12 sm:mt-16 rounded-full"
        ></div>

      </div>
    </section>
  );
};

export default QualitySection;
