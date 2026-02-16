import React from "react";
import { FaShieldAlt, FaUsers, FaCogs, FaCheckCircle, FaHandshake } from "react-icons/fa";

const CoreValues = () => {
  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden">

      {/* BACKGROUND SHAPES */}
      <div className="absolute -top-20 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-orange-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

        {/* LEFT SIDE BIG CIRCLE IMAGE */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2">

          {/* ORANGE RING */}
          <div className="absolute w-64 sm:w-[480px] h-64 sm:h-[480px] rounded-full border-[30px] sm:border-[40px] border-orange-100"></div>

          {/* BLUE RING */}
          <div className="absolute w-72 sm:w-[540px] h-72 sm:h-[540px] rounded-full border-[15px] sm:border-[20px] border-blue-100"></div>

          {/* MAIN IMAGE */}
          <div
            data-aos="zoom-in"
            className="relative w-56 sm:w-[420px] h-56 sm:h-[420px] rounded-full overflow-hidden shadow-2xl border-4 sm:border-8 border-white"
          >
            <img
              src="/circle.avif"
              alt="Engineering Work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FLOATING BADGE */}
          <div
            data-aos="fade-up"
            className="absolute bottom-4 sm:bottom-8 right-0 bg-white shadow-xl px-4 sm:px-6 py-2 sm:py-4 rounded-xl border-l-4 border-orange-500 text-center sm:text-left w-40 sm:w-auto"
          >
            <p className="text-blue-900 font-bold text-sm sm:text-lg">
              Core Values
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Engineering Excellence
            </p>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="w-full lg:w-1/2">
          <h2
            data-aos="fade-up"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900"
          >
            Our Core Values
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base"
          >
            Our values define how we work, deliver, and build long-term
            partnerships. Every project is executed with responsibility,
            precision, and commitment to engineering excellence.
          </p>

          {/* VALUES LIST */}
          <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">

            <div data-aos="fade-up" className="flex gap-3 sm:gap-4 items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm sm:text-base">
                <FaCheckCircle />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 text-sm sm:text-base">
                  Quality First
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  No compromise at any stage of execution.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="flex gap-3 sm:gap-4 items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm sm:text-base">
                <FaUsers />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 text-sm sm:text-base">
                  Customer Focus
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Solutions tailored to client needs.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="flex gap-3 sm:gap-4 items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm sm:text-base">
                <FaShieldAlt />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 text-sm sm:text-base">
                  Safety & Reliability
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Built into every system we deliver.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="flex gap-3 sm:gap-4 items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm sm:text-base">
                <FaCogs />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 text-sm sm:text-base">
                  Process Excellence
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Structured, disciplined project execution.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className="flex gap-3 sm:gap-4 items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm sm:text-base">
                <FaHandshake />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 text-sm sm:text-base">
                  Integrity
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Transparency, accountability, and trust.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
