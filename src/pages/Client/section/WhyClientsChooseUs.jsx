import React from "react";

const WhyClientsChooseUs = () => {
  const points = [
    "Turnkey project expertise from design to commissioning",
    "Quality-driven execution with strict safety compliance",
    "Reliable and on-time project delivery",
    "Customized engineering solutions tailored to client needs",
  ];

  return (
    <section className="relative py-24 px-6 lg:px-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="relative">

          {/* Big Background Text */}
          <h1 className="absolute -top-16 left-0 text-[120px] font-extrabold text-gray-200 opacity-40 select-none hidden lg:block">
            WHY
          </h1>

          <p className="uppercase tracking-[5px] text-blue-800 text-sm font-semibold mb-3">
            Our Advantage
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Engineering Excellence <br />
            <span className="text-orange-500">That Clients Trust</span>
          </h2>

          <p className="mt-6 text-gray-600 text-sm md:text-base max-w-lg">
            We combine technical capability, safety compliance, and
            disciplined project execution to deliver reliable industrial
            solutions across sectors.
          </p>

          {/* Feature Strips */}
          <div className="mt-10 space-y-5">
            {points.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-6 border-b border-gray-200 pb-4 hover:border-orange-500 transition"
              >
                <span className="text-2xl font-bold text-blue-900 group-hover:text-orange-500 transition">
                  0{index + 1}
                </span>

                <p className="text-gray-700 text-sm md:text-base group-hover:text-gray-900 transition">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ================= RIGHT SIDE IMAGE ================= */}
        <div className="relative w-full h-[450px] md:h-[520px]">

          {/* Blue Background Block */}
          <div className="absolute bottom-0 left-0 w-full h-[80%] bg-blue-900 rounded-2xl"></div>

          {/* Main Image */}
          <img
            src="/contact.avif"
            alt="construction"
            className="absolute top-0 right-0 w-[92%] h-full object-cover rounded-2xl shadow-2xl"
          />

          {/* Orange Accent Line */}
          <div className="absolute top-6 right-6 w-24 h-2 bg-orange-500"></div>

        </div>

      </div>
    </section>
  );
};

export default WhyClientsChooseUs;