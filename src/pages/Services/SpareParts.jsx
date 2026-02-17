import React from "react";
import { Link } from "react-router-dom";

const SpareParts = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute top-32 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-orange-200 rounded-full blur-3xl -z-10"></div>

      {/* FULL WIDTH HERO */}
      <div className="relative w-full h-[540px]">
        <img
          src="/service3.webp"
          alt="Spare Parts Procurement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65"></div>

        {/* HERO CONTENT */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">

            {/* Back Link */}
            <Link
              to="/services"
              className="inline-block text-orange-400 font-semibold mb-6 hover:underline"
            >
              ← Back to Services
            </Link>

            <h1 className="text-white text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
              Industrial Spare Parts Procurement Solutions
            </h1>

            <p className="text-gray-200 text-lg max-w-2xl mt-6">
              Reliable sourcing of genuine industrial spare parts to minimize
              downtime, improve plant reliability, and ensure uninterrupted
              operations.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pb-24">

        {/* INTRO */}
        <div className="mt-14 max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Spare parts procurement is a critical function in industrial
            operations where unplanned downtime can lead to significant
            production losses. Ensuring the timely availability of genuine and
            certified spare parts is essential for maintaining plant
            reliability, safety, and operational efficiency.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our spare parts procurement services are designed to support
            manufacturing plants, infrastructure projects, and process
            industries by delivering high-quality components through a reliable
            and transparent sourcing process. We focus on speed, authenticity,
            and long-term value.
          </p>
        </div>

        {/* SCOPE */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-10 relative">
          <div className="absolute -top-6 left-10 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
            Our Offering
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-4">
            Comprehensive Spare Parts Procurement
          </h2>

          <p className="text-gray-600 text-lg mb-6">
            We provide end-to-end procurement support covering identification,
            sourcing, quality verification, logistics, and delivery of industrial
            spare parts across multiple domains.
          </p>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg list-disc list-inside">
            <li>Mechanical spare parts & consumables</li>
            <li>Electrical & electronic components</li>
            <li>Automation & control system spares</li>
            <li>Pneumatic & hydraulic components</li>
            <li>OEM and non-OEM industrial parts</li>
            <li>Critical shutdown & emergency spares</li>
            <li>Obsolete & hard-to-find components</li>
            <li>Annual maintenance spares support</li>
          </ul>
        </div>

        {/* PROCESS */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our Procurement Process
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our structured procurement process ensures accuracy, transparency,
              and cost efficiency. Each request is handled by experienced
              professionals who understand industrial equipment and supplier
              ecosystems.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              From requirement analysis to final delivery, we maintain complete
              traceability to ensure the right part reaches you at the right
              time.
            </p>
          </div>

          <div className="bg-orange-50 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              Procurement Workflow
            </h3>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li>✔ Requirement & part number verification</li>
              <li>✔ Vendor & OEM identification</li>
              <li>✔ Technical & quality compliance check</li>
              <li>✔ Commercial negotiation & approval</li>
              <li>✔ Logistics & delivery coordination</li>
              <li>✔ Post-delivery support</li>
            </ul>
          </div>
        </div>

        {/* QUALITY */}
        <div className="mt-24 bg-white rounded-3xl shadow-xl p-12">
          <h2 className="text-3xl font-bold mb-6">
            Quality Assurance & Authenticity
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Quality and authenticity are at the core of our spare parts
            procurement services. We source parts only from verified suppliers,
            OEMs, and authorized distributors to eliminate the risk of counterfeit
            or substandard components.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Each supplied part undergoes documentation verification, visual
            inspection, and compliance checks to ensure it meets technical and
            operational requirements.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Reliable Industrial Spare Parts?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get in touch with us for fast, genuine, and dependable spare parts
            procurement solutions.
          </p>

          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-white font-semibold rounded-full 
                       bg-gradient-to-r from-orange-500 to-orange-600 
                       shadow-xl hover:from-orange-600 hover:to-orange-700 transition"
          >
            Request a Quote
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SpareParts;
