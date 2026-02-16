import React from "react";
import { FaCogs, FaBolt, FaIndustry, FaTools } from "react-icons/fa";

const services = [
  {
    title: "Mechanical Utility Piping",
    desc:
      "Design, fabrication and installation of MS, SS, UPVC & CPVC piping systems with testing and commissioning.",
    icon: <FaCogs size={22} />,
    image:
      "/service5.webp",
  },
  {
    title: "Electrical & IT Infrastructure",
    desc:
      "Complete electrical systems, structured cabling, CCTV, networking and industrial IT solutions.",
    icon: <FaBolt size={22} />,
    image:
      "/service1.webp",
  },
  {
    title: "Assembly Line Installation",
    desc:
      "Conveyor systems, robotics, automation, testing and commissioning for production lines.",
    icon: <FaIndustry size={22} />,
    image:
      "/service4.webp",
  },
  {
    title: "Spare Parts Procurement",
    desc:
      "Genuine industrial spare parts sourcing with fast delivery and quality assurance.",
    icon: <FaTools size={22} />,
    image:
      "/service3.webp",
  },
];

const ServicesSlider = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-50 mt-24">

      {/* ORANGE SLIDER BACKGROUND */}
      <div className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 rounded-r-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14 text-white max-w-2xl">
          <span className="uppercase tracking-widest text-sm font-semibold opacity-90">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Engineering Solutions<br />Built for Industry
          </h2>
        </div>

        {/* SERVICES ROW */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              {/* IMAGE */}
              <div className="h-40">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4 text-orange-500">
                  {s.icon}
                  <span className="font-semibold text-sm uppercase">
                    Service
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {s.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSlider;
