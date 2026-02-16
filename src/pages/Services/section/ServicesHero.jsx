import React from "react";

const ServicesHero = () => {
  return (
    <section className="relative w-full h-[400px] overflow-hidden bg-blue-900">
      
      {/* ===== Background Image ===== */}
      <div className="absolute inset-0">
        <img
          src="/heroservice.jpeg"
          alt="Engineering Background"
          className="w-full h-full object-cover object-center"
          
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-blue-900/30 to-blue-900/60"></div>
      </div>

      {/* ===== Floating Shapes ===== */}
      <div className="absolute -top-16 -left-10 w-48 h-48 bg-orange-400 rounded-full opacity-20 animate-pulseSlow"></div>
      <div className="absolute top-32 right-16 w-36 h-36 bg-white rounded-full opacity-10 animate-pulseSlow delay-500"></div>
      <div className="absolute bottom-16 left-1/3 w-28 h-28 bg-blue-500 rounded-full opacity-15 animate-bounceSlow"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-tr from-orange-400 to-yellow-300 rounded-full opacity-20 animate-bounceSlow delay-300"></div>

      {/* ===== Hero Content ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 opacity-0 animate-fadeInUp">
          Our Engineering Services
        </h1>
        <p className="max-w-3xl text-gray-200 text-lg md:text-xl leading-relaxed opacity-0 animate-fadeInUp delay-200">
          At Ele-Tech Engineering Solutions, we provide end-to-end engineering services designed to support industrial growth and operational efficiency.
        </p>
      </div>

      {/* ===== Custom Animations ===== */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.25; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1.8s ease forwards;
        }

        .animate-bounceSlow {
          animation: bounceSlow 6s ease-in-out infinite;
        }

        .animate-pulseSlow {
          animation: pulseSlow 5s ease-in-out infinite;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
};

export default ServicesHero;
