import React from "react";
import logo from "../../assets/images/logo.svg";

export const Footer = () => {
  return (
    <div className="w-full h-full py-16 lg:px-48 md:px-36 px-5">
      <div className="w-full h-full flex md:flex-row flex-col justify-between gap-20">
        <div className="lg:w-[40%] md:w-1/2 h-full flex flex-col gap-6">
          <div>
            <img src={logo} className="w-48" alt="logo" />
          </div>
          <p className="text-3xl text-black font-light">
            Subscribe to our newsletter for the latest features and updates
            delivered to you.
          </p>
          <div className="flex items-center gap-6">
            <div>
              <input
                type="email"
                className="lg:w-[35rem] h-20 border border-black px-8 text-2xl"
                placeholder="Your email here"
              />
            </div>
            <button className="px-16 h-20 bg-[#ff3e54] text-3xl text-white rounded-2xl">
              Join
            </button>
          </div>
          <p className="text-2xl text-black font-light">
            By subscribing, you consent to our Privacy Policy and agree to
            receive updates.
          </p>
        </div>
        <div className="lg:w-[40%] md:w-1/2 h-full flex justify-between">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl text-black font-medium">Useful Links</h1>
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href="#"
                  className="text-xl tracking-wide hover:text-[#ff3e54] transition-all duration-200"
                >
                  Home Page
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-wide hover:text-[#ff3e54] transition-all duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-wide hover:text-[#ff3e54] transition-all duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-wide hover:text-[#ff3e54] transition-all duration-200"
                >
                  Blog Posts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-wide hover:text-[#ff3e54] transition-all duration-200"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl text-black font-medium">Resources</h1>
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href="#"
                  className="text-xl tracking-wide hover:text-[#ff3e54] transition-all duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-wide hover:text-[#ff3e54] transition-all duration-200"
                >
                  User Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-wide hover:text-[#ff3e54] transition-all duration-200"
                >
                  Community Forum
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-wide hover:text-[#ff3e54] transition-all duration-200"
                >
                  Feedback
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-wide hover:text-[#ff3e54] transition-all duration-200"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl text-black font-medium">Connect With Us</h1>
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href="#"
                  className="text-xl tracking-wide flex items-center gap-2 hover:text-[#ff3e54] transition-all duration-200"
                >
                  <i className="uil uil-facebook text-3xl text-[#ff3e54]"></i>{" "}
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-wide flex items-center gap-2 hover:text-[#ff3e54] transition-all duration-200"
                >
                  <i className="uil uil-instagram text-3xl text-[#ff3e54]"></i>{" "}
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-wide flex items-center gap-2 hover:text-[#ff3e54] transition-all duration-200"
                >
                  <i className="uil uil-twitter-alt text-3xl text-[#ff3e54]"></i>{" "}
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-wide flex items-center gap-2 hover:text-[#ff3e54] transition-all duration-200"
                >
                  <i className="uil uil-linkedin text-3xl text-[#ff3e54]"></i>{" "}
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xl tracking-wide flex items-center gap-2 hover:text-[#ff3e54] transition-all duration-200"
                >
                  <i className="uil uil-youtube text-3xl text-[#ff3e54]"></i>{" "}
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-black mt-16" />
      <div className="w-full flex sm:flex-row flex-col sm:items-center gap-8 justify-between mt-8">
        <p className="text-2xl text-black">
          <i className="uil uil-copyright"></i> 2024 Osumare. All rights
          reserved.
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-2xl text-black underline">Privacy Policy</a>
          <a href="#" className="text-2xl text-black underline">Terms of Services</a>
          <a href="#" className="text-2xl text-black underline">Cookie Settings</a>
        </div>
      </div>
    </div>
  );
};
