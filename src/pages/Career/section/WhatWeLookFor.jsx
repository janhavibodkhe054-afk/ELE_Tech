import React from "react";
import {
  ShieldCheck,
  Users,
  Lightbulb,
  HardHat,
  Settings,
} from "lucide-react";

const features = [
  {
    title: "Technical Expertise",
    desc: "Strong foundation in electrical & mechanical systems.",
    icon: <Settings size={20} />,
  },
  {
    title: "Quality & Safety",
    desc: "Strict compliance with industrial safety standards.",
    icon: <ShieldCheck size={20} />,
  },
  {
    title: "Analytical Thinking",
    desc: "Ability to solve real-time site challenges efficiently.",
    icon: <Lightbulb size={20} />,
  },
  {
    title: "Industrial Adaptability",
    desc: "Ready to work in plant & field environments.",
    icon: <HardHat size={20} />,
  },
  {
    title: "Team Collaboration",
    desc: "Process-driven & team-oriented approach.",
    icon: <Users size={20} />,
  },
];

const WhatWeLookFor = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ================= IMAGE SECTION ================= */}
      <div className="relative h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/careerbanner.jpg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-orange-500/80" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 lg:px-24 max-w-7xl mx-auto text-white">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-orange-300 font-semibold">
            Join Our Engineering Team
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold max-w-2xl leading-tight">
            Building Excellence Through Skilled & Passionate Professionals
          </h2>

          <p className="mt-4 max-w-xl text-sm sm:text-base text-white">
            At ELE-TECH Engineering Solutions, we believe innovation starts
            with people. We look for individuals who combine technical
            knowledge, safety awareness, and dedication to deliver reliable
            industrial electrical and mechanical solutions.
          </p>
        </div>
      </div>

      {/* ================= FEATURE CARDS ================= */}
      <div className="relative z-20 -mt-14 sm:-mt-16 px-4 sm:px-6 lg:px-24 pb-16">
        <div
          className="
            max-w-7xl mx-auto
            flex flex-col
            lg:grid lg:grid-cols-5
            rounded-xl shadow-2xl
            bg-white
            overflow-hidden
          "
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="
                px-6 py-6
                border-b lg:border-b-0
                lg:border-r last:lg:border-r-0
                hover:bg-blue-900 hover:text-white
                transition-all duration-300
              "
            >
              <div className="flex flex-col items-start">
                <div
                  className="
                    w-10 h-10 flex items-center justify-center
                    rounded-full bg-blue-100 text-blue-700
                    mb-3
                    hover:bg-orange-500 hover:text-white
                    transition
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-sm sm:text-base font-semibold">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm mt-2 text-gray-600 hover:text-gray-200 transition">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeLookFor;