import React from "react";

const HeroAbout = () => {
  return (
    <section className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[380px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/abouthero.jpg"
        alt="Electrical Mechanical Engineering Solutions"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/75 to-orange-500/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 lg:px-10">
        
        <h1
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-snug"
        >
          About
        </h1>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="w-16 sm:w-20 h-1 bg-orange-400 my-3 sm:my-4 rounded-full"
        ></div>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-sm sm:text-base md:text-lg font-medium"
        >
          <span className="text-white/90 hover:text-orange-300 transition cursor-pointer">
            Home
          </span>
          <span className="mx-1 sm:mx-2 text-orange-300">-</span>
          <span className="text-orange-200">About</span>
        </p>
      </div>
    </section>
  );
};

export default HeroAbout;
