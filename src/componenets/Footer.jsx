import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">

      {/* ===== TOP CTA STRIP ===== */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-semibold text-lg">
            Need Engineering Solutions for Your Business?
          </p>
          <button className="bg-white text-blue-950 px-7 py-2.5 rounded-full font-semibold shadow-md hover:scale-105 hover:bg-gray-100 transition">
            Get Free Consultation
          </button>
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="bg-blue-950 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {/* COMPANY INFO */}
          <div className="text-center sm:text-left">
            <h2 className="text-white text-3xl font-bold mb-4 tracking-wide">
              ELE-TECH
            </h2>
            <p className="text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
              Delivering innovative mechanical, electrical and industrial
              engineering solutions with strong focus on quality, safety
              and timely execution.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center sm:justify-start gap-4 mt-6">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full
                             bg-white/10 hover:bg-orange-500
                             transition transform hover:-translate-y-1"
                >
                  <Icon className="text-white text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-orange-500"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              {["Home", "About Us", "Services", "Industries", "Contact"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="hover:text-orange-400 cursor-pointer transition"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-5 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-orange-500"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-orange-400 transition cursor-pointer">
                Mechanical Utility Piping
              </li>
              <li className="hover:text-orange-400 transition cursor-pointer">
                Electrical & IT Infrastructure
              </li>
              <li className="hover:text-orange-400 transition cursor-pointer">
                Automation & Assembly Lines
              </li>
              <li className="hover:text-orange-400 transition cursor-pointer">
                Industrial Spare Parts Supply
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-5 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-orange-500"></span>
            </h3>

            <div className="space-y-4 text-sm">
              <p className="flex items-center justify-center sm:justify-start gap-3">
                <FaMapMarkerAlt className="text-orange-400" />
                Pune, Maharashtra, India
              </p>

              <p className="flex items-center justify-center sm:justify-start gap-3">
                <FaPhoneAlt className="text-orange-400" />
                +91 9423444184
              </p>

              <p className="flex items-center justify-center sm:justify-start gap-3">
                <FaEnvelope className="text-orange-400" />
                info@ele-tech.com
              </p>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} ELE-TECH Engineering Solutions.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
