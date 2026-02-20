const IndustriesWeServe = () => {
  const industries = [
    "Automobile Industry",
    "Manufacturing & Industrial Plants",
    "Commercial Infrastructure",
    "Engineering & Process Industries",
    "Industrial Automation & Production Units",
  ];

  return (
    <section
      className="relative py-16 md:py-20 px-4 md:px-6 lg:px-24 bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: "url('/bluebg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
          Industries <span className="text-orange-500">We Serve</span>
        </h2>

        <p className="mt-3 text-black text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2">
          Delivering precision-driven engineering excellence across diverse
          industrial sectors.
        </p>
      </div>

      <div className="relative mt-10 md:mt-16 max-w-4xl mx-auto">
        
        {/* Center Line - Desktop Only */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-orange-500/60 -translate-x-1/2"></div>

        <div className="space-y-5 md:space-y-6">
          {industries.map((item, index) => (
            <div
              key={item}
              className={`
                relative flex
                justify-center
                md:items-center
                ${index % 2 === 0
                  ? "md:justify-start md:pr-4"
                  : "md:justify-end md:pl-4"}
              `}
            >
              {/* Card */}
              <div
                className="
                  w-full sm:w-[90%] md:w-[42%]
                  bg-white/20 backdrop-blur-md
                  border border-white/30
                  rounded-lg px-4 sm:px-5 py-3
                  shadow-[0_8px_25px_rgba(0,0,0,0.25)]
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)]
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <h3 className="text-sm sm:text-base font-semibold text-black">
                  {item}
                </h3>

                <p className="text-xs sm:text-sm text-black mt-1">
                  High-quality industrial and engineering solutions with safety
                  compliance.
                </p>
              </div>

              {/* Dot - Desktop Only */}
              <span className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full border-2 border-white"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;