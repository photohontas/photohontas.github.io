
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-serif font-semibold tracking-wide">
          Elizabeth Photography
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-gray-600 transition-colors">
            Головна
          </a>
          <a href="#about" className="hover:text-gray-600 transition-colors">
            Про мене
          </a>
          <a href="#portfolio" className="hover:text-gray-600 transition-colors">
            Портфоліо
          </a>
          <a href="#contact" className="hover:text-gray-600 transition-colors">
            Контакти
          </a>
        </div>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
