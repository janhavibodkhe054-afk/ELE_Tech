import React from "react";
import { FaPhoneAlt, FaTruck, FaClock, FaGlobe } from "react-icons/fa";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const WhoHome = () => {
  const navigate = useNavigate();

  const handleDiscoverMore = () => {
    navigate("/about");
  };

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE AREA */}
          <div
            className="relative order-2 md:order-1 flex justify-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {/* TOP DOT PATTERN */}
            <div className="absolute -top-8 -right-1 grid grid-cols-6 gap-2 opacity-20 z-0">
              {[...Array(36)].map((_, i) => (
                <span
                  key={i}
                  className="w-2.5 h-2.5 bg-gray-400 rounded-full"
                ></span>
              ))}
            </div>

            {/* MAIN IMAGE */}
            <div className="relative w-[85%] z-10">
              <img
                src="/image2.avif"
                alt="Ship"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            {/* SMALL IMAGE */}
            <img
              src="/image1.jpg"
              alt="Port"
              className="absolute bottom-[-30px] right-[20px]
               w-56 rounded-2xl shadow-2xl
               border-[6px] border-white z-20"
            />

            {/* BOTTOM DOT PATTERN */}
            <div className="absolute -bottom-14 left-6 grid grid-cols-6 gap-2 opacity-20 z-0">
              {[...Array(36)].map((_, i) => (
                <span
                  key={i}
                  className="w-2.5 h-2.5 bg-gray-400 rounded-full"
                ></span>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="order-1 md:order-2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-4xl font-bold leading-tight text-gray-800">
              <span className="text-orange-500">
                Delivering Modern Engineering &{" "}
              </span>
              <br />
              Industrial Solutions
            </h2>

            <p className="mt-5 text-gray-500 leading-relaxed">
              ELE-TECH Engineering Solutions was founded in Pune in 2018 as an
              engineering firm delivering turnkey projects for the automobile
              industry.
            </p>

            <p className="mt-4 text-gray-500 leading-relaxed">
              What began as a focused initiative quickly evolved into a
              specialist organization offering comprehensive industrial
              electrical and mechanical solutions.
            </p>

            <div className="flex items-center gap-6 mt-6">
              <button
              onClick={handleDiscoverMore}
               className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-lg font-semibold shadow-md transition">
                Discover More
              </button>

              <div className="flex items-center gap-3 text-gray-700">
                <FaPhoneAlt className="text-orange-500 text-lg" />
                <div>
                  <p className="text-sm text-gray-400">Call Us Now</p>
                  <p className="font-semibold">+91 7007 985 236</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PREMIUM BOTTOM FEATURES */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {/* Feature 1 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center border border-gray-100"
            data-aos="zoom-in-up"
            data-aos-delay="0"
            data-aos-duration="900"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-orange-100 rounded-full mb-4">
              <FaTruck className="text-orange-500 text-xl" />
            </div>
            <h4 className="font-semibold text-lg text-gray-800">
              Experience And Expertise
            </h4>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Years of industry experience delivering reliable transportation
              solutions across multiple sectors.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center border border-gray-100"
            data-aos="zoom-in-up"
            data-aos-delay="150"
            data-aos-duration="900"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-orange-100 rounded-full mb-4">
              <FaClock className="text-orange-500 text-xl" />
            </div>
            <h4 className="font-semibold text-lg text-gray-800">
              Reliability And Timeliness
            </h4>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              On-time deliveries with efficient logistics planning to ensure
              smooth and dependable service.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center border border-gray-100"
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="900"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-orange-100 rounded-full mb-4">
              <FaGlobe className="text-orange-500 text-xl" />
            </div>
            <h4 className="font-semibold text-lg text-gray-800">
              Comprehensive Services
            </h4>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              End-to-end transportation services designed to meet diverse
              business and logistics needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoHome;
