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
        <div className="hero-links nav-links">
          <a href="#home" aria-label="Go to homepage">
            Home
          </a>
          <a href="#services" aria-label="Explore our services">
            Services
          </a>
          <a href="#about" aria-label="Learn more about us">
            About
          </a>
          <a href="#blog" aria-label="Read our latest blog posts">
            Blog
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

      {/* Lazy Load Image Example */}
      <div className="navbar-image">
        <Image
          src="/path-to-image.jpg" // Replace with your image path
          alt="Care2 Consultancy Logo"
          width={100}
          height={100}
          loading="lazy" // Enable lazy loading for the image
          className="lazy-img"
        />
      </div>
    </header>
  );
};

export default Navbar;
