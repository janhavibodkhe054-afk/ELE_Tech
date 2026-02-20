import { Link, useLocation } from "react-router-dom";
import { Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Career", path: "/career" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Our Client", path: "/client" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ===== Small Top Header ===== */}
      <div className="hidden md:flex justify-between items-center px-6 lg:px-10 py-2 bg-blue-900 text-white text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Pune, Maharashtra, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a href="tel:+919423444184" className="hover:text-orange-300">
              +91 9423444184
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={16} />
          <a
            href="mailto:info@ele-tech.com"
            className="hover:text-orange-300"
          >
            info@ele-tech.com
          </a>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <nav className="w-full sticky top-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between py-4 px-4 md:px-10 relative">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.jpeg"
              alt="ELE TECH"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10 font-medium">
            {navLinks.map((link, idx) => (
              <li key={idx} className="relative group">
                <Link
                  to={link.path}
                  className={`transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-orange-500 font-semibold"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {link.name}
                </Link>

                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-orange-500 transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2 rounded-full font-semibold text-white
                         bg-gradient-to-r from-blue-900 via-blue-800 to-orange-500
                         shadow-md transition-transform duration-300 hover:scale-105"
            >
              Enquire Now
            </Link>

            <a
              href="https://wa.me/919423444184"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-white
                         bg-green-500 hover:bg-green-600
                         shadow-md transition-transform duration-300 hover:scale-105"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ===== Mobile Menu (FIXED VERSION) ===== */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-6">
            <ul className="flex flex-col gap-5 text-center">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg ${
                      location.pathname === link.path
                        ? "text-orange-500 font-semibold"
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-4 pt-4 border-t">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-gradient-to-r from-blue-900 via-blue-800 to-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-md"
              >
                Enquire Now
              </Link>

              <a
                href="https://wa.me/919423444184"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-md"
              >
                <MessageCircle size={18} />
                WhatsApp Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}