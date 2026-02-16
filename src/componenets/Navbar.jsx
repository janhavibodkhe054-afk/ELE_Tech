import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-md ">
      {/* Gradient Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900"></div>

      <div className="flex items-center justify-between py-4 px-4 md:px-10 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.jpeg"
            alt="ELE TECH"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 font-medium">
          {navLinks.map((link, idx) => (
            <li key={idx} className="relative group">
              <Link
                to={link.path}
                className={`text-gray-700 transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-orange-500 font-semibold"
                    : "hover:text-orange-500"
                }`}
              >
                {link.name}
              </Link>
              {/* Underline Animation */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-orange-500 transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Enquire Button Desktop */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="relative px-6 py-2 rounded-full font-semibold text-white
                       bg-gradient-to-r from-blue-900 via-blue-800 to-orange-500
                       shadow-lg shadow-orange-200/40
                       transition-transform duration-300 hover:scale-105 hover:shadow-orange-300/50
                       before:absolute before:inset-0 before:rounded-full before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-all"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900 z-50 px-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 py-6" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-blue-900 via-blue-800 to-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300"
            >
              Enquire Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
