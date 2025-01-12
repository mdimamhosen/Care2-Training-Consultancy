import React from "react";
import Image from "next/image"; // For optimized images with lazy loading

const Navbar = () => {
  return (
    <header>
      <nav>
        {/* Logo Section with ALT text for SEO */}
        <div className="logo text-2xl md:text-5xl font-bold">
          <a href="#home">
            <span>Care2</span>Consults
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hero-links nav-links hidden lg:flex text-base lg:text-lg">
          <a href="#home" aria-label="Go to homepage">
            Home
          </a>
          <a href="#services" aria-label="Explore our services">
            Services
          </a>
          <a href="#about" aria-label="Learn more about us">
            About
          </a>
          <a href="#services" aria-label="Read our latest blog posts">
            Services
          </a>
          <a href="#contact" className="contact4Mobile" aria-label="Contact us">
            Contact
          </a>
        </div>

        {/* Call to Action Button */}
        <div className="hero-btn">
          <a href="#contact" aria-label="Get in touch">
            Contact <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </a>
        </div>

        {/* Hamburger Menu for Mobile View */}
        <div className="hamburger-menu">
          <div className="ham-bar bar-top"></div>
          <div className="ham-bar bar-mid"></div>
          <div className="ham-bar bar-bottom"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
