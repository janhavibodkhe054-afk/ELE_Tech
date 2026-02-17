import React from "react";

const ServicesHero = () => {
  return (
    <section className="relative w-full h-[320px] sm:h-[380px] md:h-[450px] lg:h-[520px] overflow-hidden bg-blue-900">
      {/* ===== Background Image ===== */}
      <div
        className="absolute inset-0"
        data-aos="zoom-out"
        data-aos-duration="1200"
      >
        <img
          src="/heroservice.jpeg"
          alt="Engineering Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-900/40 to-blue-900/70"></div>
      </div>

      {/* ===== Floating Shapes ===== */}
      <div
        data-aos="fade-in"
        className="absolute -top-16 -left-10 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-orange-400 rounded-full opacity-20 animate-pulseSlow"
      ></div>

      <div
        data-aos="fade-in"
        data-aos-delay="200"
        className="absolute top-24 right-10 sm:right-16 w-24 sm:w-32 md:w-36 h-24 sm:h-32 md:h-36 bg-white rounded-full opacity-10 animate-pulseSlow delay-500"
      ></div>

      {/* ===== Hero Content ===== */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6">
          Our Engineering Services
        </h1>

        <p className="max-w-3xl text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          At Ele-Tech Engineering Solutions, we provide end-to-end engineering
          services designed to support industrial growth and operational
          efficiency.
        </p>
      </div>

      {/* ===== Custom Animations ===== */}
      <style>{`
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.25; }
        }

        .animate-bounceSlow {
          animation: bounceSlow 6s ease-in-out infinite;
        }

        .animate-pulseSlow {
          animation: pulseSlow 5s ease-in-out infinite;
        }

        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
};

export default ServicesHero;
