import React from "react";

const AboutSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-slate-50 to-orange-50 py-16 lg:py-24 px-6 lg:px-24 overflow-hidden">
      
      {/* Decorative Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ================= IMAGE SIDE ================= */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-[380px] h-[380px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px]">

            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 to-blue-500 blur-xl opacity-40 animate-pulse"></div>

            {/* Border Ring */}
            <div className="absolute inset-4 rounded-full border-[6px] border-orange-500"></div>

            {/* Image */}
            <img
              src="https://globalenggsolutions.in/wp-content/uploads/2025/02/Vision-to-Reality.webp"
              alt="Engineering Design"
              className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
            />
          </div>
        </div>

        {/* ================= CONTENT SIDE ================= */}
        <div>

          {/* Section Badge */}
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            About ELE-TECH
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-slate-800 leading-snug mb-6">
            Engineering Excellence Built on
            <span className="text-orange-500"> Precision & Innovation</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Founded in <span className="font-semibold text-blue-700">2018</span>,
            ELE-TECH Engineering Solutions delivers high-quality
            <span className="font-semibold text-blue-700">
              {" "}turnkey electrical and mechanical solutions
            </span>{" "}
            for industrial, commercial, and infrastructure projects.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Our process-driven approach bridges the gap between planning and
            execution, ensuring seamless delivery with uncompromised quality,
            safety, and reliability.
          </p>

          {/* Core Expertise Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              "Mechanical Utility Piping",
              "Electrical & IT Infrastructure",
              "Industrial Assembly Installation",
              "Spare Parts Procurement",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-4 border-l-4 border-orange-500 hover:shadow-lg transition"
              >
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-xl p-6 shadow-xl">
            <h4 className="text-lg font-semibold mb-2">
              Quality in Everything… We DO…!
            </h4>
            <p className="leading-relaxed text-sm sm:text-base">
              Quality, safety, and long-term performance are embedded into every
              stage of execution, driving sustainable industrial growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
