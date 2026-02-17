import React from "react";

const InfoAbout = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">

      {/* ORANGE BACKGROUND GLOW (HIDDEN ON MOBILE) */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[520px] h-[420px] z-0">
        <div className="absolute w-full h-full 
        bg-gradient-to-br from-orange-300 via-orange-200 to-orange-100
        rounded-full blur-3xl opacity-70"></div>

        {/* SHADE LINES */}
        <svg
          className="absolute left-0 top-12 opacity-40"
          width="520"
          height="260"
          viewBox="0 0 520 260"
          fill="none"
        >
          <path
            d="M0 120C90 60 160 200 260 140C360 80 430 200 520 140"
            stroke="#F97316"
            strokeWidth="3"
          />
          <path
            d="M0 160C90 100 160 230 260 170C360 110 430 230 520 170"
            stroke="#FB923C"
            strokeWidth="2"
          />
          <path
            d="M0 200C90 140 160 260 260 200C360 140 430 260 520 200"
            stroke="#FDBA74"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">

        {/* LEFT SIDE IMAGES */}
        <div className="relative flex justify-center lg:justify-start">

          {/* MOBILE STACK / DESKTOP ABSOLUTE */}
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:w-[460px] lg:h-[420px]">

            {/* TOP IMAGE */}
            <img
              data-aos="fade-right"
              src="/info1.jpg"
              alt="Engineering Team"
              className="
                w-full h-[220px] sm:h-[260px] object-cover rounded-2xl shadow-2xl
                lg:absolute lg:top-0 lg:left-0 lg:w-[340px] lg:h-[260px] lg:z-10
              "
            />

            {/* BOTTOM IMAGE */}
            <img
              data-aos="fade-up"
              src="/info2t.webp"
              alt="Industrial Electrical"
              className="
                mt-6 sm:mt-8 w-full h-[220px] sm:h-[240px] object-cover
                rounded-2xl shadow-2xl border-4 border-white
                lg:absolute lg:bottom-0 lg:right-0 lg:w-[320px] lg:h-[240px] lg:z-20
              "
            />

            {/* EXPERIENCE CARD */}
            <div
              data-aos="zoom-in"
              className="
                absolute top-4 right-4 sm:top-6 sm:right-6
                lg:top-[120px] lg:right-[40px]
                bg-white px-6 py-4 lg:px-8 lg:py-6 rounded-2xl shadow-xl
                border-l-4 border-orange-500 z-30
              "
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-blue-900">
                7+
              </h3>
              <p className="text-gray-600 text-xs lg:text-sm">
                Years Of Experience
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="max-w-xl text-center lg:text-left">

          <h2
            data-aos="fade-up"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 leading-snug"
          >
            We Help Industries Build Reliable Electrical &
            Mechanical Engineering Solutions
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-gray-600 mt-4 lg:mt-6 leading-relaxed text-sm sm:text-base"
          >
            ELE-TECH Engineering Solutions delivers turnkey electrical and
            mechanical engineering solutions tailored to industrial needs.
            Our customized engineering methodology bridges planning and
            execution while ensuring safety, efficiency, and long-term
            operational performance.
          </p>

          {/* FEATURES */}
          <div className="mt-6 lg:mt-8 space-y-6">

            <div
              data-aos="fade-up"
              data-aos-delay="250"
              className="flex gap-4 items-start"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center
              bg-blue-100 text-blue-700 rounded-xl font-bold shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 text-sm lg:text-base">
                  Certified Engineering Approach
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Process-driven execution ensuring quality, safety,
                  and reliability across every project.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="350"
              className="flex gap-4 items-start"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center
              bg-orange-100 text-orange-600 rounded-xl font-bold shrink-0">
                ★
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 text-sm lg:text-base">
                  Turnkey Project Expertise
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  End-to-end engineering services from design to
                  commissioning and operational support.
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="450"
            className="mt-8 lg:mt-10"
          >
            <p className="font-semibold text-blue-900 text-sm lg:text-base">
              Santosh Matkar
            </p>
            <p className="text-gray-500 text-xs lg:text-sm">
              Founder, ELE-TECH Engineering Solutions
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoAbout;
