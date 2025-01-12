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
    <>
      {/* Meta Tags for SEO */}
      <head>
        <meta
          name="description"
          content="Contact Care2 Training Consultancy through our social media links or reach out for training consultancy services."
        />
        <meta
          name="keywords"
          content="footer, Care2 Training Consultancy, social media links, training consultancy"
        />
        <meta name="author" content="Care2 Training Consultancy" />
        <title> Care2 Training Consultancy</title>
      </head>

      <footer className="mt-12">
        <div className="up-footer mt-4">
          <div className="text-4xl text-left">
            <a href="#home" aria-label="Back to homepage">
              <span className="text-[#FFBE48]">Care2</span> Training Consultancy
            </a>
          </div>

          <div className="foot-links hidden lg:block">
            <a href="#home" aria-label="Go to Home Page">
              Home
            </a>
            <a href="#services" aria-label="View Services">
              Services
            </a>
            <a href="#about" aria-label="Learn About Us">
              About
            </a>
            <a href="#blog" aria-label="Check out our Blog">
              Blog
            </a>
            <a href="#contact" aria-label="Contact Us">
              Contact
            </a>
          </div>
        </div>
        <hr />
        <div className="bottom-footer">
          <p className="footcc">© Copyright 2023, All Rights Reserved.</p>

          <div className="foot-links lg:flex justify-center items-center hidden">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitterSquare size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagramSquare size={30} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookSquare size={30} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
        <button
          href="#home"
          className="absolute md:bottom-14 text-[#ffbe48] hidden md:block md:right-10 animate-bounce"
          aria-label="Back to top"
        >
          <a href="#home">
            <FaArrowAltCircleUp size={40} />
          </a>
        </button>
      </footer>
    </>
  );
};

export default Footer;
