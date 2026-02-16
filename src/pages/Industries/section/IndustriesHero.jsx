// Banner.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full h-72 md:h-96 lg:h-[400px]">
      {/* Background Image */}
      <img
        src="/mechanical.jpg"
        alt="Industry Background"
        className="w-full h-full object-cover brightness-75"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-black/30 to-orange-600/70 flex items-center justify-center px-6">
        <div
          className="text-center max-w-3xl"
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
            Engineering Solutions for Every Industry
          </h1>
          <p className="text-base md:text-lg text-white mb-5 drop-shadow-md">
            Ele-Tech Engineering Solutions delivers reliable, efficient, and innovative engineering services tailored for your business needs.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Banner;
