import React from "react";
import {
  FaArrowAltCircleUp,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="mt-12">
        <div className="up-footer mt-4">
          <div className="text-4xl text-left">
            <a href="#home">
              <span className="text-[#FFBE48]">Care2</span> Training Consultancy
            </a>
          </div>

          <div className="foot-links hidden lg:block ">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <hr />
        <div className="bottom-footer">
          <p className="footcc">© Copyright 2023, All Rights Reserved.</p>

          <div className="foot-links lg:flex justify-center items-center hidden  ">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitterSquare size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare size={30} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare size={30} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
        <button
          href="#home"
          className="absolute md:bottom-14 text-[#ffbe48] hidden md:block md:right-10 animate-bounce"
        >
          <a href="#home">
            <FaArrowAltCircleUp size={40} />
          </a>
        </button>
      </footer>
    </div>
  );
};

export default Footer;
