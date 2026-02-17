import React from "react";
import { Link } from "react-router-dom";

const MechanicalUtilityPiping = () => {
  return (
    <section className="bg-gray-50 overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative h-[420px] md:h-[520px]">
        <img
          src="/service5.webp"
          alt="Mechanical Utility Piping"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
          <Link
            to="/services"
            className="text-orange-400 font-semibold mb-3 w-fit"
          >
            ← Back to Services
          </Link>

          <span className="inline-block bg-orange-500/20 text-orange-400 
                           px-4 py-1 rounded-full text-sm font-semibold w-fit mb-4">
            Industrial Piping Solutions
          </span>

          <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
            Mechanical Utility Piping Systems
          </h1>

          <p className="text-gray-200 max-w-2xl mt-4 text-base md:text-lg">
            Safe, efficient, and compliant piping infrastructure for critical
            industrial utilities.
          </p>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="max-w-4xl">
          <p className="text-gray-700 leading-relaxed mb-4">
            Mechanical utility piping forms the backbone of industrial
            operations, enabling the reliable transfer of water, steam,
            compressed air, gases, chemicals, and process fluids.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our solutions are engineered for safety, durability, and long-term
            performance — fully compliant with international standards and
            site-specific operational requirements.
          </p>
        </div>
      </div>

      {/* ================= SCOPE ================= */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Our Scope of Work
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Piping layout & stress analysis",
              "Material selection & specification",
              "Shop & site fabrication",
              "Utility piping erection",
              "Hydro & pressure testing",
              "Flushing & chemical cleaning",
              "Passivation & surface treatment",
              "Testing & commissioning",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 shadow-sm 
                           hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MATERIALS ================= */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/piping.jpg"
            alt="Industrial Piping Materials"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Materials & Engineering Standards
            </h2>

            <p className="text-gray-600 mb-4">
              Material selection is driven by pressure, temperature, corrosion
              resistance, and process compatibility to ensure system longevity.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Mild Steel (MS)</li>
              <li>✔ Stainless Steel (SS 304 / 316)</li>
              <li>✔ UPVC / CPVC piping</li>
              <li>✔ Alloy & special-purpose materials</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= INDUSTRIES ================= */}
      <div
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/industry.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Manufacturing Plants",
              "Pharmaceutical Facilities",
              "Food & Beverage Units",
              "Power Plants",
              "Chemical Processing Units",
              "Automobile & Engineering Plants",
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md 
                           border border-white/20 rounded-xl p-5 
                           text-center text-white hover:bg-orange-500 transition"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BENEFITS ================= */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Key Benefits
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {[
              "High safety compliance",
              "Leak-proof installations",
              "Long service life",
              "Optimized routing",
              "Easy maintenance",
              "Energy-efficient distribution",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow-sm"
              >
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="py-20 text-center bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Looking for a Trusted Utility Piping Partner?
        </h2>

        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Discuss your project with our experienced mechanical engineering team.
        </p>

        <Link
          to="/contact"
          className="inline-block px-10 py-4 text-white font-semibold rounded-full 
                     bg-gradient-to-r from-orange-500 to-orange-600 
                     shadow-lg hover:scale-105 transition"
        >
          Contact Our Experts
        </Link>
      </div>
    </section>
  );
};

export default MechanicalUtilityPiping;
