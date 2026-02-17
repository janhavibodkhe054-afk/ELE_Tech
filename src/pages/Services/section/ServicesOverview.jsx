import React from "react";

const ServicesOverview = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50 to-orange-50">

      {/* Floating background shapes */}
      <div
        data-aos="fade-in"
        className="absolute -top-24 -left-24 w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 bg-blue-400/20 rounded-full blur-3xl"
      ></div>

      <div
        data-aos="fade-in"
        data-aos-delay="200"
        className="absolute bottom-0 right-0 w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 bg-orange-400/20 rounded-full blur-3xl"
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-center lg:text-left"
        >
          <span className="inline-block mb-4 px-4 py-1 text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-full bg-orange-100 text-orange-600">
            Our Expertise
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Engineering Services Designed for
            <span className="block text-blue-700 mt-2">
              Industrial Performance
            </span>
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
            We deliver end-to-end engineering services focused on precision,
            safety, and reliability. Every solution is tailored to meet
            the operational demands of modern industrial environments.
          </p>

          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            From concept and system design to installation, testing, and
            commissioning, our team ensures structured execution,
            technical accuracy, and full compliance with industry standards.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="relative flex justify-center"
        >
          <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-full h-full rounded-3xl bg-gradient-to-br from-blue-500 to-orange-400 opacity-20"></div>

          <img
            src="/overview.jpg"
            alt="Engineering Services"
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-3xl shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;
