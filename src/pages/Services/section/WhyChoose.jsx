import React from "react";

const WhyChoose = () => {
  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-br from-violet-50 via-blue-50 to-orange-100">
      {/* FLOATING BACKGROUND SHAPES */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 -right-40 w-[26rem] h-[26rem] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 left-1/3 w-[30rem] h-[30rem] bg-orange-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="text-orange-500 uppercase tracking-widest text-sm font-semibold">
            Why We Stand Out
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
            Precision-Driven Engineering
            <span className="block text-violet-800 mt-2">
              Built for Industrial Demands
            </span>
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-xl">
            Our engineering solutions are developed to meet complex industrial
            requirements through structured execution, strict safety protocols,
            and reliable turnkey project management.
          </p>
        </div>

        {/* RIGHT FLIP CARDS */}
        <div className="flex justify-center lg:justify-end gap-10">
          {/* CARD 1 */}
          <div className="group w-100 h-[420px] [perspective:1200px]">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* FRONT */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden backface-hidden">
                <img
                  src="/overview.jpg"
                  alt="Expert Engineers"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-violet-900 font-semibold text-xl">
                    Expert Engineers
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    Certified professionals
                  </p>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-700 to-blue-700 text-white rounded-2xl shadow-2xl p-8 rotate-y-180 backface-hidden flex flex-col justify-center">
                <h4 className="font-bold text-2xl mb-5 text-center">
                  Expert Engineers
                </h4>
                <ul className="space-y-3 text-sm leading-relaxed">
                  <li>✔ Multidisciplinary engineering experts</li>

                  <li>✔ Precision-driven design solutions</li>
                  <li>✔ Continuous innovation mindset</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group w-100 h-[420px] mt-12 [perspective:1200px]">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden backface-hidden">
                <img
                  src="/safety.webp"
                  alt="Safety First"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-blue-900 font-semibold text-xl">
                    Safety First
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    Zero-compromise policy
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-600 text-white rounded-2xl shadow-2xl p-8 rotate-y-180 backface-hidden flex flex-col justify-center">
                <h4 className="font-bold text-2xl mb-5 text-center">
                  Safety First
                </h4>
                <ul className="space-y-3 text-sm leading-relaxed">
                  <li>✔ International safety compliance</li>
                  <li>✔ Advanced risk management systems</li>

                  <li>✔ Protecting people & assets</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group w-100 h-[420px] mt-24 [perspective:1200px]">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden backface-hidden">
                <img
                  src="/turnkey.jpg"
                  alt="Turnkey Projects"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-orange-600 font-semibold text-xl">
                    Turnkey Projects
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    Complete delivery
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-500 text-white rounded-2xl shadow-2xl p-8 rotate-y-180 backface-hidden flex flex-col justify-center">
                <h4 className="font-bold text-2xl mb-5 text-center">
                  Turnkey Projects
                </h4>
                <ul className="space-y-3 text-sm leading-relaxed">
                  <li>✔ Concept to commissioning</li>
                  <li>✔ Design, procurement & execution</li>
                  <li>✔ Single-point responsibility</li>
                  <li>✔ On-time & cost-efficient delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
