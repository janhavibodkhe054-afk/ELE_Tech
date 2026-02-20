import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;

    if (!name || !email || !phone || !message) {
      alert("Please fill all required fields.");
      return;
    }

    const whatsappNumber = "919423444184"; // 👉 Your WhatsApp number (with country code, no +)

    const whatsappMessage = `
Hello Ele-Tech Team,

You have received a new enquiry from your website:

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message:
${message}

Regards,
${name}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

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

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:border-blue-600 focus:outline-none"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:border-blue-600 focus:outline-none"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:border-blue-600 focus:outline-none"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:border-blue-600 focus:outline-none"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Type Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:border-blue-600 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 
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
                text: "+91 9423444184",
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
                className="bg-white shadow-md rounded-lg p-5 mb-6 last:mb-0 hover:scale-[1.02] transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-900 text-white rounded-lg shrink-0">
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
    </div>
  );
};

export default Contact;
