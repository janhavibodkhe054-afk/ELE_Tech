// IndustryStats.jsx
import React from "react";

const stats = [
  { label: "Projects Completed", value: "250+" },
  { label: "Years of Experience", value: "7+" },
  { label: "Satisfied Clients", value: "100+" },
  { label: "Industries Served", value: "5+" },
];

const IndustryStats = () => {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 bg-[url('/bg.png')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Our Industry Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-gray-800 p-10 rounded-3xl shadow-xl border-l-4 border-orange-500 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-5xl md:text-6xl font-extrabold text-orange-400 mb-3">
                {stat.value}
              </h3>
              <p className="text-lg md:text-xl text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryStats;
