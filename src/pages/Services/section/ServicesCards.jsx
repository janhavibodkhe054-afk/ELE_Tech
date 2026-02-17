import React from "react";
import { FaCogs, FaBolt, FaIndustry, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Mechanical Utility Piping",
    slug: "mechanical-utility-piping",
    desc: "Design, fabrication and installation of MS, SS, UPVC & CPVC piping systems with testing and commissioning.",
    icon: <FaCogs size={22} />,
    image: "/service5.webp",
  },
  {
    title: "Electrical & IT Infrastructure",
    slug: "electrical-it-infrastructure",
    desc: "Complete electrical systems, structured cabling, CCTV, networking and industrial IT solutions.",
    icon: <FaBolt size={22} />,
    image: "/service1.webp",
  },
  {
    title: "Assembly Line Installation",
    slug: "assembly-line-installation",
    desc: "Conveyor systems, robotics, automation, testing and commissioning for production lines.",
    icon: <FaIndustry size={22} />,
    image: "/service4.webp",
  },
  {
    title: "Spare Parts Procurement",
    slug: "spare-parts-procurement",
    desc: "Genuine industrial spare parts sourcing with fast delivery and quality assurance.",
    icon: <FaTools size={22} />,
    image: "/service3.webp",
  },
];

const ServicesSlider = () => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-gray-50 mt-20">
      {/* ORANGE BACKGROUND */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[75%] bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 rounded-none md:rounded-r-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        {/* HEADER */}
        <div
          className="mb-12 md:mb-16 text-white max-w-2xl"
          data-aos="fade-right"
        >
          <span className="uppercase tracking-widest text-xs md:text-sm font-semibold opacity-90">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Engineering Solutions
            <br />
            Built for Industry
          </h2>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-full"
            >
              {/* IMAGE */}
              <div className="h-40 md:h-44 lg:h-48">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3 text-orange-500">
                  {s.icon}
                  <span className="font-semibold text-xs uppercase">
                    Service
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {s.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.desc}
                </p>

                {/* BUTTON */}
                <div className="mt-auto flex justify-center">
                  <Link
                    to={`/services/${s.slug}`}
                    className="mt-6 px-6 py-2.5 text-sm font-semibold text-white 
                    bg-gradient-to-r from-orange-500 to-orange-600 
                    rounded-full shadow-lg shadow-orange-500/40 
                    hover:from-orange-600 hover:to-orange-700 
                    transition-all duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;
