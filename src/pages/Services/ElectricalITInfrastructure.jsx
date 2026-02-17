import React from "react";
import { Link } from "react-router-dom";

const ElectricalITInfrastructure = () => {
  return (
    <section className="bg-gray-50 overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative h-[460px] md:h-[540px]">
        <img
          src="/service1.webp"
          alt="Electrical & IT Infrastructure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <Link
            to="/services"
            className="text-orange-400 font-semibold mb-4 w-fit"
          >
            ← Back to Services
          </Link>

          <span className="inline-block bg-orange-500/20 text-orange-400 
                           px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
            Power • Networking • Security
          </span>

          <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
            Electrical & IT Infrastructure Solutions
          </h1>

          <p className="text-gray-200 text-lg max-w-2xl mt-4">
            Reliable power systems and intelligent digital infrastructure
            designed for modern industrial operations.
          </p>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Electrical & IT Infrastructure forms the backbone of modern industrial
            operations. Reliable power distribution and robust digital
            connectivity are critical for productivity, safety, automation, and
            scalability in today’s technology-driven environments.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our solutions are engineered to support high-performance industrial
            operations while ensuring compliance with electrical safety
            standards, operational efficiency, and future expansion
            requirements.
          </p>
        </div>
      </div>

      {/* ================= SCOPE ================= */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            End-to-End Electrical & IT Services
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Electrical system design & load calculations",
              "LT & HT power distribution systems",
              "Panel installation and cabling works",
              "Lighting, earthing & lightning protection",
              "Structured cabling systems",
              "Networking, CCTV & access control",
              "Data centers & server room setup",
              "Testing, commissioning & compliance",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 shadow-sm 
                           hover:shadow-lg hover:-translate-y-1 transition"
              >
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= TECHNOLOGY ================= */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/IT.jpg"
            alt="Electrical & IT Systems"
            className="rounded-3xl shadow-xl"
          />

          <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Technology & Compliance Standards
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Our electrical and IT systems are designed with a strong focus on
              safety, reliability, and regulatory compliance. We adhere to
              applicable national and international standards while integrating
              modern technologies for efficient operations.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              From intelligent power monitoring to secure networking, our
              solutions are built to support automation, Industry 4.0, and
              digital transformation initiatives.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✔ LT / HT Panels & Switchgear</li>
              <li>✔ Structured & Fiber Cabling</li>
              <li>✔ CCTV & Surveillance Systems</li>
              <li>✔ Access Control & Security</li>
              <li>✔ Industrial Networking</li>
              <li>✔ Data Centers & Server Rooms</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= INDUSTRIES ================= */}
      <div
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/infrastructure.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Industries We Support
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Manufacturing & Engineering",
              "Pharmaceutical & Healthcare",
              "Automobile & OEM Plants",
              "IT Parks & Data Centers",
              "Warehousing & Logistics",
              "Power & Utility Plants",
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
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Key Benefits of Our Infrastructure Solutions
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {[
              "Safe and reliable power distribution",
              "Scalable IT infrastructure",
              "Reduced operational downtime",
              "Compliance with safety standards",
              "Enhanced data security",
              "Ready for future expansion",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm"
              >
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="py-24 text-center bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Looking for Reliable Electrical & IT Solutions?
        </h2>

        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
          Partner with us for safe, efficient, and future-ready infrastructure
          solutions.
        </p>

        <Link
          to="/contact"
          className="inline-block px-10 py-4 text-white font-semibold rounded-full 
                     bg-gradient-to-r from-orange-500 to-orange-600 
                     shadow-xl hover:scale-105 transition"
        >
          Contact Our Experts
        </Link>
      </div>
    </section>
  );
};

export default ElectricalITInfrastructure;
