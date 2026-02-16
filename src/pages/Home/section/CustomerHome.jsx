import React from "react";

const Customers = () => {
  const customers = [
    { id: 1, logo: "/Picture1.png" },
    { id: 2, logo: "/Picture2.png" },
    { id: 3, logo: "/Picture3.png" },
    { id: 4, logo: "/Picture4.jpg" },
    { id: 5, logo: "/Picture5.png" },
    { id: 6, logo: "/Picture6.jpg" },
    { id: 7, logo: "/Picture7.png" },
  ];

  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center animate-[fadeUp_1s_ease-out]">

          {/* Heading */}
          <p className="uppercase tracking-[4px] text-orange-500 font-semibold mb-3 text-sm sm:text-base">
            Our Clients
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Trusted Electro Mechanical & Industrial Clients
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Delivering reliable electro mechanical, industrial electrical,
            and mechanical solutions to leading organizations.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-10 sm:mt-16">

            {customers.map((client, index) => (
              <div
                key={client.id}
                className={`animate-[cardReveal_0.8s_ease-out]`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <LogoCard logo={client.logo} />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes cardReveal {
            from {
              opacity: 0;
              transform: translateY(60px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes floatCard {
            0%,100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          @keyframes logoZoom {
            from {
              transform: scale(0.9);
              opacity: 0.6;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};

const LogoCard = ({ logo }) => (
  <div
    className="
      h-28 sm:h-32 md:h-36 lg:h-40 rounded-2xl border border-gray-100
      shadow-md hover:shadow-2xl
      transition duration-500
      flex items-center justify-center p-4 sm:p-6
      bg-white
      animate-[floatCard_4s_ease-in-out_infinite]
      hover:-translate-y-2
    "
  >
    <img
      src={logo}
      alt="client"
      className="max-h-14 sm:max-h-16 md:max-h-20 lg:max-h-24 object-contain animate-[logoZoom_1.2s_ease-out]"
    />
  </div>
);

export default Customers;
