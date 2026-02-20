import React from "react";
import { useNavigate } from "react-router-dom";

const HeroHome = () => {

 
  const navigate = useNavigate();

  const handleServices = () => {
    navigate("/about");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover animate-[zoomBg_20s_ease-in-out_infinite_alternate]"
          style={{ backgroundImage: "url('/hero_home.png')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 min-h-[630px] flex items-center">
          <div className="text-white max-w-full sm:max-w-2xl animate-[fadeUp_1s_ease-out]">
            <p className="uppercase tracking-widest text-sm sm:text-base text-gray-200 mb-3">
              Online · Design · Construction
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight md:leading-tight">
              Get Greatest{" "}
              <span className="bg-orange-500 px-3 py-1 rounded">Service</span>
              <br />
              From Our Company
            </h1>

            <p className="mt-4 text-white text-lg sm:text-base md:text-xl">
              Engineering solutions focused on quality, reliability and
              performance. We deliver turnkey mechanical, electrical and
              infrastructure projects tailored to industrial needs.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button 
              onClick={handleServices}
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 font-semibold rounded transition duration-300 hover:scale-105 hover:shadow-xl">
                About Us →
              </button>

              <button
               onClick={handleContact}
                className="border border-white px-6 py-3 font-semibold rounded hover:bg-white hover:text-black transition duration-300 hover:scale-105">
                Contact Us →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM INDUSTRY SECTION */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 -translate-y-12 sm:-translate-y-16">
        <div className="flex flex-col md:flex-row gap-4 md:gap-4 animate-[fadeUp_1.2s_ease-out]">

          {/* LEFT CARD */}
          <div className="flex-1 bg-white p-6 sm:p-8 text-center flex flex-col justify-center transition duration-300 hover:shadow-2xl shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Automation Industry</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Productivity automation solutions helping industries improve
              operational efficiency.
            </p>
          </div>

          {/* MIDDLE CARD */}
          <div className="flex-1 bg-orange-500 text-white p-6 sm:p-8 text-center flex flex-col justify-center transition duration-300 hover:scale-105">
            <h3 className="font-semibold text-lg mb-2">Construction Industry</h3>
            <p className="text-sm sm:text-base">
              Reliable engineering execution for construction and industrial
              infrastructure projects.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="flex-1 bg-white p-6 sm:p-8 text-center flex flex-col justify-center transition duration-300 hover:shadow-2xl shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Real Estate Industry</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Electrical and infrastructure solutions for modern commercial
              and residential developments.
            </p>
          </div>

        </div>
      </div>

      {/* ANIMATION STYLES */}
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes zoomBg {
            from { transform: scale(1); }
            to { transform: scale(1.08); }
          }
        `}
      </style>
    </>
  );
};

export default HeroHome;
