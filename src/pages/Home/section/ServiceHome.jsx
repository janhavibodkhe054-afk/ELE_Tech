import React from "react";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Mechanical Utility Piping Services",
    image: "/service1.jpg",
  },
  {
    title: "Electrical & IT Infrastructure Services",
    image: "/Service2.png",
  },
  {
    title:
      "Industrial Loadmatic Conveyor / Robots / Machine Assembly Line Installation & Commissioning",
    image: "/service3.webp",
  },
  {
    title: "Industrial Spare Parts – Procurement & Supply",
    image: "/service4.avif",
  },
];

const ServiceHome = () => {
  const navigate = useNavigate();
  
    const handleServices = () => {
      navigate("/services");
    };
  return (
    <>
      <section className="bg-gray-100 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* Heading */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center mb-12 gap-4 sm:gap-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="h-[2px] w-16 sm:w-24 bg-gray-300"></div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 relative">
              Our Services
              <span
                className="absolute left-1/2 -bottom-2 w-[60px] h-[3px] bg-orange-500 -translate-x-1/2"
                data-aos="zoom-in"
                data-aos-delay="300"
              ></span>
            </h2>

            <div className="h-[2px] w-16 sm:w-24 bg-gray-300"></div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="800"
                className="bg-white rounded-lg shadow-md overflow-hidden transition duration-500 hover:shadow-2xl flex flex-col"
              >
                {/* Image */}
                <div className="h-48 sm:h-56 md:h-48 lg:h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-700 hover:scale-110"
                  />
                </div>

                {/* Title */}
                <div className="p-5 text-center flex-1 flex items-center justify-center">
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base md:text-base lg:text-base">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div
            className="text-center mt-10"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="900"
          >
            <button
             onClick={handleServices}
             className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHome;
