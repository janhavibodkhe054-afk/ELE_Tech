import React from "react";
import { Link } from "react-router-dom";

const AssemblyLineInstallation = () => {
  return (
    <section className="bg-gray-50">

      {/* ================= HERO ================= */}
      <div className="relative h-[420px] md:h-[520px]">
        <img
          src="/service4.webp"
          alt="Assembly Line Installation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
          <Link
            to="/services"
            className="text-orange-400 font-semibold mb-3 w-fit"
          >
            ← Back to Services
          </Link>

          <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl">
            Assembly Line Installation & Automation
          </h1>

          <p className="text-gray-200 text-base md:text-lg max-w-2xl mt-4">
            Efficient, scalable, and future-ready production lines designed
            for modern manufacturing.
          </p>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="max-w-4xl">
          <p className="text-gray-700 leading-relaxed mb-4">
            Assembly line installation plays a vital role in achieving high
            productivity, consistent quality, and safe operations. A properly
            engineered line reduces material handling, optimizes cycle time,
            and improves operator efficiency.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We provide complete turnkey solutions — from concept and layout
            design to automation, integration, and final commissioning.
          </p>
        </div>
      </div>

      {/* ================= SCOPE ================= */}
      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Scope of Services</h2>

            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
              {[
                "Line layout & process optimization",
                "Conveyor systems installation",
                "Workstation & tooling setup",
                "Automation & robotics integration",
                "Electrical & control systems",
                "PLC / HMI / SCADA programming",
                "System testing & commissioning",
                "Production handover & training",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-orange-500 font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <img
            src="/assembly.jpeg"
            alt="Assembly Scope"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* ================= ENGINEERING + AUTOMATION ================= */}
      <div className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">
              Engineering & Design Approach
            </h3>
            <p className="text-gray-600 mb-3">
              Our designs focus on throughput optimization, ergonomic safety,
              modular expansion, and preventive maintenance accessibility.
            </p>
            <p className="text-gray-600">
              Each assembly line is customized to product type, takt time,
              and production volume.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">
              Automation & Robotics
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Robotic pick-and-place systems</li>
              <li>• Vision-based inspection</li>
              <li>• Automated material handling</li>
              <li>• Smart sensors & real-time monitoring</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= INDUSTRIES ================= */}
      <div
        className="relative py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/industry.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Automobile & Auto Components",
              "Electronics Manufacturing",
              "Consumer Goods & Appliances",
              "Pharmaceutical & Medical Devices",
              "Heavy Engineering",
              "Packaging & FMCG",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 
                           rounded-xl p-5 text-center text-white
                           hover:bg-orange-500 transition"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Why Choose Our Assembly Line Solutions
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "Higher Production Efficiency",
              "Reduced Downtime",
              "Improved Quality Control",
              "Scalable & Future-Ready Design",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-xl shadow-sm"
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
          Build a High-Performance Assembly Line
        </h2>

        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Let our experts design and implement a production line that delivers
          speed, precision, and long-term ROI.
        </p>

        <Link
          to="/contact"
          className="inline-block px-10 py-4 text-white font-semibold rounded-full 
                     bg-gradient-to-r from-orange-500 to-orange-600 
                     shadow-lg hover:scale-105 transition"
        >
          Talk to Our Experts
        </Link>
      </div>
    </section>
  );
};

export default AssemblyLineInstallation;
