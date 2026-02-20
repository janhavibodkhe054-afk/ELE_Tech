import React from "react";

const CareerHero = () => {
  return (
    <section
      className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[380px] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/careerhero.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-blue-800/80 to-orange-600/70"></div>

      {/* Content */}
      <div
        className="relative z-10 px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto"
        data-aos="fade-up"
      >
        <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
          Build Your Career with{" "}
          <span className="text-orange-400">
            ELE-TECH Engineering Solutions
          </span>
        </h1>

        <p className="mt-3 sm:mt-4 text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Join a team where engineering excellence, safety, and innovation
          define every industrial electrical and mechanical solution we deliver.
        </p>

        {/* CTA Button */}
        
      </div>
    </section>
  );
};

export default CareerHero;