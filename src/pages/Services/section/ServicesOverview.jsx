import React from "react";

const ServicesOverview = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-white via-blue-50 to-orange-50">
      
      {/* Floating background shapes */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-widest uppercase rounded-full bg-orange-100 text-orange-600">
            Our Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Engineering Services Designed for
            <span className="block text-blue-700 mt-2">
              Industrial Performance
            </span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-xl">
            We deliver end-to-end engineering services focused on precision,
            safety, and reliability. Every solution is tailored to meet
            the operational demands of modern industrial environments.
          </p>

          <p className="text-gray-600 leading-relaxed max-w-xl">
            From concept and system design to installation, testing, and
            commissioning, our team ensures structured execution,
            technical accuracy, and full compliance with industry standards.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="absolute -top-6 -right-6 w-full h-full rounded-3xl bg-gradient-to-br from-blue-500 to-orange-400 opacity-20"></div>

          <img
            src="/overview.jpg"
            alt="Engineering Services"
            className="relative w-full max-w-md rounded-3xl shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;
