import React from "react";
import { useNavigate } from "react-router-dom";

const ClientCommitment = () => {

    const navigate = useNavigate();
  const customers = [
    { id: 1, logo: "/Picture1.png", name: "Industrial Partner" },
    { id: 2, logo: "/Picture2.png", name: "Infrastructure Client" },
    { id: 3, logo: "/Picture3.png", name: "Manufacturing Group" },
    { id: 4, logo: "/Picture4.jpg", name: "Power Solutions Ltd." },
    { id: 5, logo: "/Picture5.png", name: "Engineering Corp" },
    { id: 6, logo: "/Picture6.jpg", name: "Industrial Systems" },
    { id: 7, logo: "/Picture7.png", name: "Energy Projects" },
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <p className="uppercase tracking-[4px] text-orange-500 font-semibold mb-3 text-sm">
          Our Clients
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Industries We Serve
        </h2>

        <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-sm md:text-lg">
          We proudly serve leading organizations across industrial,
          infrastructure, and energy sectors by delivering reliable
          electro-mechanical and engineering solutions with safety,
          precision, and excellence.
        </p>

        {/* UNIQUE GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-14">

          {customers.map((client) => (
            <div
              key={client.id}
              className="
                group relative
                bg-white
                border border-gray-200
                rounded-xl
                p-6
                flex flex-col items-center justify-center
                transition-all duration-300
                hover:shadow-xl
                hover:border-orange-500
              "
            >
              {/* Top Orange Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-xl"></div>

              {/* Logo */}
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-14 md:max-h-16 object-contain transition duration-300 group-hover:scale-110"
              />

              {/* Client Name */}
              <p className="mt-4 text-sm font-semibold text-gray-700 group-hover:text-black">
                {client.name}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Content Section */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <h3 className="text-2xl font-bold text-black">
            Building Long-Term Industrial Relationships
          </h3>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
            Our commitment to quality engineering, project efficiency,
            and strict safety compliance has earned us the trust of
            prestigious industrial clients. We focus on delivering
            sustainable and high-performance solutions tailored to
            each project requirement.
          </p>
          <div className="mt-6 text-center" data-aos="fade-up">
          {" "}
          <button 
          onClick={() => navigate("/contact")} 
          className="bg-blue-900 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300">
            {" "}
            Apply Now{" "}
          </button>{" "}
        </div>
        </div>

      </div>
    </section>
  );
};

export default ClientCommitment;