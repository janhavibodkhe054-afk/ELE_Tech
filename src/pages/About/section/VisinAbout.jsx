import React from "react";
import { FaBullseye, FaLightbulb, FaCogs } from "react-icons/fa";

const VisionAbout = () => {
  return (
    <section
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://ees-india.co.in/wp-content/uploads/2024/07/EES-4-1.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY FOR TEXT VISIBILITY */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>

      {/* SOFT BACKGROUND SHAPES */}
      <div className="absolute -top-20 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-200 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-200 opacity-30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">

        {/* TITLE */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
            Vision & Mission
          </h2>
          <p className="text-black mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">
            Our purpose and direction that drive engineering excellence
          </p>
        </div>

        {/* FLOW LAYOUT */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 items-center gap-10">

          {/* VISION */}
          <div className="text-center md:text-right md:pr-6 lg:pr-10">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-500 text-white text-xl sm:text-2xl mb-5 shadow-lg">
              <FaBullseye />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
              Our Vision
            </h3>

            <p className="text-black leading-relaxed text-sm sm:text-base">
              To be a trusted engineering partner delivering high-quality
              turnkey electrical and mechanical solutions that drive
              sustainable industrial growth through innovation and reliability.
            </p>
          </div>

          {/* CENTER CIRCLE */}
          <div className="flex justify-center relative mt-8 md:mt-0">
            <div className="absolute w-44 sm:w-64 h-44 sm:h-64 rounded-full border-4 border-dashed border-orange-300 animate-spin-slow"></div>

            <div className="w-36 sm:w-44 h-36 sm:h-44 rounded-full bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center text-white text-4xl sm:text-5xl shadow-2xl relative z-10">
              <FaCogs />
            </div>

            <div className="absolute w-40 sm:w-52 h-40 sm:h-52 bg-orange-400 opacity-20 blur-3xl rounded-full"></div>
          </div>

          {/* MISSION */}
          <div className="text-center md:text-left md:pl-6 lg:pl-10 mt-8 md:mt-0">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-700 text-white text-xl sm:text-2xl mb-5 shadow-lg">
              <FaLightbulb />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
              Our Mission
            </h3>

            <p className="text-black leading-relaxed text-sm sm:text-base">
              To provide customized, process-driven engineering solutions by
              bridging planning and execution while ensuring uncompromised
              quality, safety, and reliability for long-term success.
            </p>
          </div>

        </div>
      </div>

      {/* SLOW SPIN */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 18s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};

export default VisionAbout;
