import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[400px] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/contact.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/40"></div>

        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Contact
          </h1>
          <p className="text-lg opacity-90">
            Let’s talk about your next project
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative z-20 max-w-6xl mx-auto px-6 -mt-24 pb-20">
        <div className="grid lg:grid-cols-3 bg-white border border-gray-200 shadow-xl">

          {/* ================= LEFT FORM ================= */}
          <div className="lg:col-span-2 p-10">
            <p className="text-sm text-blue-600 font-semibold mb-2">
              GET IN TOUCH
            </p>

            <h2 className="text-4xl font-bold text-blue-900 mb-8">
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
                className="bg-blue-900 hover:bg-blue-700 text-white px-10 py-3 rounded-md font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ================= RIGHT INFO PANEL ================= */}
          <div className="bg-blue-900 p-10 flex flex-col justify-between">

            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Address",
                text:
                  "Pune, Maharashtra, 411045",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Contact Number",
                text: ["+91 9423444184",<br/>,
                "Founder - Santosh Matkar",]
              },
              {
                icon: <FaEnvelope />,
                title: "Email Id",
                text: ["santosh.matkar@ele-tech.com",
                "sales@ele-tech.com",
                "info@ele-tech.com"
                ]
              },
              {
                icon: <FaClock />,
                title: "Working hours",
                text: "Mon – Sat: 8:30 AM – 6:30 PM",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-5 mb-6 last:mb-0"
              >
                <div className="flex items-start gap-4">
                  
                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-900 text-white rounded-lg shrink-0">
                    {item.icon}
                  </div>

                  <div className="w-full">
                    <h4 className="font-semibold text-blue-900">
                      {item.title}
                    </h4>

                    {/* Divider */}
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
    </div>
  );
};

export default Contact;
