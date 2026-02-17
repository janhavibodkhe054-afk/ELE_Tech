import React from "react";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const VisionMission = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/about");
  };
  const services = [
    {
      id: 1,
      title: "Our Vision",
      description:
        "A trusted engineering partner delivering high-quality turnkey electrical and mechanical solutions for sustainable industrial growth.",
    },
    {
      id: 2,
      title: "Our Mission",
      description:
        "Providing customized, process-driven engineering solutions with uncompromised quality, safety, and reliability.",
    },
    {
      id: 3,
      title: "Our Core Values",
      description:
        "Integrity, excellence, innovation, and sustainability guide every engineering solution we deliver.",
    },
  ];

  return (
    <>
      <section className="relative w-full">
        {/* ================= BACKGROUND IMAGE ================= */}
        <div
          className="w-full bg-local bg-center bg-cover"
          style={{ backgroundImage: "url('/vision.avif')" }}
        >
          {/* Dark Overlay */}
          <div className="bg-black/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-28">

              {/* Heading */}
              <div
                className="text-center text-white mb-12 sm:mb-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="uppercase tracking-[4px] text-orange-400 font-semibold mb-3 text-sm sm:text-base">
                  What We Do
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight">
                  Vision, Mission & Core Values
                </h2>

                <div className="w-20 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

                <p className="max-w-2xl mx-auto mt-6 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                  Delivering engineering excellence through innovation,
                  reliability, and structured execution for modern industrial
                  growth.
                </p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className="flip-card w-full h-auto min-h-[320px] sm:min-h-[360px] md:min-h-[300px]"
                    data-aos="zoom-in-up"
                    data-aos-duration="900"
                    data-aos-delay={index * 200}
                  >
                    <div className="flip-card-inner h-full w-full">

                      {/* FRONT */}
                      <div className="flip-card-front backdrop-blur-md bg-white/95 rounded-2xl shadow-xl p-6 sm:p-8 border border-white/40 flex flex-col justify-center text-center h-full">
                        <h3 className="text-xl sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                          {service.title}
                        </h3>

                        <div className="w-12 h-1 bg-orange-500 mx-auto mb-4 rounded"></div>

                        <p className="text-gray-600 text-sm sm:text-base md:text-base leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* BACK */}
                      <div className="flip-card-back bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col text-center justify-center h-full">
                        <h3 className="text-xl sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                          {service.title}
                        </h3>

                        <p className="text-gray-600 text-sm sm:text-base md:text-base mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        <button 
                        onClick={handleclick}
                        className="px-6 py-2.5 sm:px-6 sm:py-3 rounded-full bg-orange-500 text-white text-sm sm:text-base md:text-base font-semibold hover:bg-orange-600 transition duration-300 shadow-md">
                          Read More
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Flip Animation CSS */}
      <style>
        {`
          .flip-card {
            perspective: 1000px;
            width: 100%;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.7s ease;
            transform-style: preserve-3d;
          }

          .flip-card:hover .flip-card-inner,
          .flip-card:active .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 16px;
          }

          .flip-card-back {
            transform: rotateY(180deg);
          }

          /* Mobile adjustment for small devices */
          @media (max-width: 640px) {
            .flip-card-inner {
              min-height: 380px;
            }
          }
        `}
      </style>
    </>
  );
};

export default VisionMission;
