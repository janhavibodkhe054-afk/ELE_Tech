import React from "react";

const WhyWorkWithUs = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bgimage.avif')",
        }}
      ></div>

      {/* Light overlay only for readability (no color tint) */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 py-16 md:py-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* ===== WHY WORK WITH US ===== */}
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Why Work With <span className="text-orange-500">Us</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div
              className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200 hover:shadow-2xl transition duration-300"
              data-aos="zoom-in"
            >
              <h3 className="font-semibold text-lg mb-3 text-black">
                Engineering-Driven Culture
              </h3>
              <p className="text-gray-700">
                Work in a technically strong environment focused on precision,
                safety, and structured execution.
              </p>
            </div>

            <div
              className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200 hover:shadow-2xl transition duration-300"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h3 className="font-semibold text-lg mb-3 text-black">
                Growth & Learning
              </h3>
              <p className="text-gray-700">
                Hands-on exposure to turnkey industrial projects across
                electrical, mechanical, and automation domains.
              </p>
            </div>

            <div
              className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200 hover:shadow-2xl transition duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3 className="font-semibold text-lg mb-3 text-black">
                Quality & Safety First
              </h3>
              <p className="text-gray-700">
                Quality and safety embedded at every stage of engineering
                execution.
              </p>
            </div>

            <div
              className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200 hover:shadow-2xl transition duration-300"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h3 className="font-semibold text-lg mb-3 text-black">
                Collaborative Team
              </h3>
              <p className="text-gray-700">
                Work alongside experienced engineers and technical specialists.
              </p>
            </div>
          </div>

          {/* ================= LIFE AT ELE-TECH ================= */}
          <div
            className="mt-20 text-center max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Life at{" "}
              <span className="text-black">ELE-TECH Engineering Solutions</span>
            </h2>

            <p className="mt-6 text-base md:text-lg text-gray-800">
              We foster a culture built on integrity, responsibility, and
              engineering discipline. Our teams work on challenging industrial
              projects that enhance long-term professional growth.
            </p>

            <p className="mt-8 text-lg font-semibold text-orange-600">
              Send your resume to:
            </p>

            <p className="mt-2 text-black font-medium">
              careers@ele-tech.com | info@ele-tech.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
