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

      {/* ===== TOP CONTACT STRIP ===== */}
      <div className="bg-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p className="font-semibold text-lg sm:text-base">
            Need Engineering Solutions for Your Business?
          </p>
          <button className="bg-white text-blue-950 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition mt-2 sm:mt-0">
            Get Free Consultation
          </button>
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="bg-blue-950 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* COMPANY INFO */}
          <div className="text-center sm:text-left">
            <h2 className="text-white text-2xl font-bold mb-4">
              ELE-TECH
            </h2>
            <p className="text-sm leading-relaxed">
              Delivering innovative mechanical, electrical and industrial
              engineering solutions with strong focus on quality, safety
              and timely execution.
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center sm:justify-start gap-3 mt-6">
              <a className="bg-white/10 p-3 rounded hover:bg-orange-500 transition text-white text-lg">
                <FaFacebookF />
              </a>
              <a className="bg-white/10 p-3 rounded hover:bg-orange-500 transition text-white text-lg">
                <FaInstagram />
              </a>
              <a className="bg-white/10 p-3 rounded hover:bg-orange-500 transition text-white text-lg">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 border-l-4 border-orange-500 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">Home</li>
              <li className="hover:text-orange-400 cursor-pointer">About Us</li>
              <li className="hover:text-orange-400 cursor-pointer">Services</li>
              <li className="hover:text-orange-400 cursor-pointer">Industries</li>
              <li className="hover:text-orange-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 border-l-4 border-orange-500 pl-3">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">
                Mechanical Utility Piping
              </li>
              <li className="hover:text-orange-400 cursor-pointer">
                Electrical & IT Infrastructure
              </li>
              <li className="hover:text-orange-400 cursor-pointer">
                Automation & Assembly Lines
              </li>
              <li className="hover:text-orange-400 cursor-pointer">
                Industrial Spare Parts Supply
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4 border-l-4 border-orange-500 pl-3">
              Contact Info
            </h3>

            <div className="space-y-3 text-sm">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4">
            <p className="text-center text-sm sm:text-base">
              © {new Date().getFullYear()} ELE-TECH Engineering Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
