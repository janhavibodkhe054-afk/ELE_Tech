import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[320px] sm:h-[380px] lg:h-[420px] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/contact.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/40"></div>

        <div className="relative z-10 text-white animate-fadeUp">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Contact
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            Let’s talk about your next project
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-20 sm:-mt-24 pb-24">
        <div className="grid lg:grid-cols-3 bg-white border border-gray-200 shadow-2xl rounded-xl overflow-hidden">

          {/* ================= LEFT FORM ================= */}
          <div className="lg:col-span-2 p-6 sm:p-10 animate-slideLeft">
            <p className="text-sm text-blue-600 font-semibold mb-2 tracking-wide">
              GET IN TOUCH
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-8">
              Contact Us
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-600"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-600"
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-600"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-600"
              />

              <textarea
                rows="5"
                placeholder="Type Message"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-600"
              ></textarea>

              <button
                type="submit"
                className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-700 
                           text-white px-10 py-3 rounded-md font-semibold 
                           transition transform hover:-translate-y-1 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ================= RIGHT INFO PANEL ================= */}
          <div className="bg-blue-900 p-6 sm:p-10 animate-slideRight">

            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Address",
                text: "Pune, Maharashtra, 411045",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Contact Number",
                text: (
                  <>
                    +91 9423444184 <br />
                    Founder – Santosh Matkar
                  </>
                ),
              },
              {
                icon: <FaEnvelope />,
                title: "Email Id",
                text: (
                  <>
                    santosh.matkar@ele-tech.com <br />
                    sales@ele-tech.com <br />
                    info@ele-tech.com
                  </>
                ),
              },
              {
                icon: <FaClock />,
                title: "Working Hours",
                text: "Mon – Sat: 8:30 AM – 6:30 PM",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-5 mb-6 last:mb-0
                           hover:scale-[1.02] transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center 
                                  bg-blue-900 text-white rounded-lg shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-900">
                      {item.title}
                    </h4>
                    <div className="w-10 h-[2px] bg-blue-600 my-2"></div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CUSTOM ANIMATIONS ================= */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideLeft {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideRight {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeUp {
          animation: fadeUp 1.2s ease forwards;
        }

        .animate-slideLeft {
          animation: slideLeft 1.2s ease forwards;
        }

        .animate-slideRight {
          animation: slideRight 1.2s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;
