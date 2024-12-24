import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Effect to handle body overflow
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll when menu is open
    } else {
      document.body.style.overflow = "auto"; // Enable scroll when menu is closed
    }
  }, [menuOpen]);

  return (
    <header className="w-full py-5 lg:px-48 md:px-36 px-5 flex items-center justify-between relative bg-white">
      <div>
        <img src={logo} className="w-40" alt="logo" />
      </div>

      <nav
        className={`md:flex md:flex-row md:gap-8 flex-col md:static fixed top-0 ${
          !menuOpen ? "translate-x-0" : "-translate-x-full"
        } h-screen md:h-auto bg-white md:bg-transparent w-full md:w-auto z-20 transition-transform duration-300 overflow-x-hidden`}
      >
        <div
          className="md:hidden absolute top-5 right-5 text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          <i className="uil uil-times text-[#170f49]"></i>
        </div>
        <ul className="flex flex-col md:flex-row items-center md:gap-10 gap-8 mt-20 md:mt-0">
          <li>
            <a
              href="#"
              className="text-lg md:text-2xl text-[#170f49] hover:text-[#ff3e54] transition-all duration-200 ease-in-out"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg md:text-2xl text-[#170f49] hover:text-[#ff3e54] transition-all duration-200 ease-in-out"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg md:text-2xl text-[#170f49] hover:text-[#ff3e54] transition-all duration-200 ease-in-out"
            >
              More Option
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-lg md:text-2xl text-[#170f49] hover:text-[#ff3e54] transition-all duration-200 ease-in-out"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-10 md:mt-0">
          <a
            href="#"
            className="w-40 h-12 md:w-48 md:h-16 bg-transparent border border-[#ff3e54] text-lg md:text-2xl text-[#ff3e54] text-center leading-[2.9rem] md:leading-[3.9rem] rounded-xl hover:bg-[#ff3e54] hover:text-white transition-all duration-200 ease-in-out"
          >
            Login
          </a>
          <a
            href="#"
            className="w-40 h-12 md:w-48 md:h-16 bg-[#ff3e54] text-lg md:text-2xl text-white text-center leading-[2.9rem] md:leading-[3.9rem] rounded-xl"
          >
            Sign Up
          </a>
        </div>
      </nav>
      <div
        className="md:hidden block text-3xl cursor-pointer"
        onClick={toggleMenu}
      >
        <i className="uil uil-bars text-[#170f49]"></i>
      </div>
    </header>
  );
};
