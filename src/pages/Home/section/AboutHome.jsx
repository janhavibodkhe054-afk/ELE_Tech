import React from "react";
import "aos/dist/aos.css";

const AboutHome = () => {
  return (
    <>
      <section className="bg-gray-100 pb-15 overflow-hidden">

        {/* ================= ABOUT BANNER ================= */}
        <div className="relative h-[390px] overflow-hidden">

          {/* Background Image (keep zoom animation) */}
          <div
            className="absolute inset-0 bg-cover bg-center animate-[bgZoom_12s_ease-in-out_infinite_alternate]"
            style={{
              backgroundImage: "url('/about_home.avif')",
            }}
          ></div>

          {/* LEFT SIDE BLUE GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/70 to-transparent"></div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
            <div
              className="text-white max-w-xl"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2 className="text-3xl font-bold mb-2">About Us</h2>

              <p className="text-orange-400 font-semibold mb-3">
                Delivering Excellence Since 2018
              </p>

              <p className="text-gray-200">
                Providing innovative engineering solutions with a focus on
                quality and reliability across mechanical, electrical and
                industrial infrastructure projects.
              </p>
            </div>
          </div>

          {/* RIGHT OVERLAP IMAGE */}
          <div
            className="absolute bottom-0 right-10 hidden md:block"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <img
              src="/About1.png"
              alt="Engineer"
              className="h-[380px] object-contain"
            />
          </div>

        </div>

      </section>

      {/* ONLY KEEP BACKGROUND ZOOM ANIMATION */}
      <style>
        {`
          @keyframes bgZoom {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.08);
            }
          }
        `}
      </style>
    </>
  );
};

export default AboutHome;
