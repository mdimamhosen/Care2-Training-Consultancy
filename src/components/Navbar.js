import React from "react";

const Navbar = () => {
  return (
    <header className=" ">
      <nav>
        <div className="logo text-2xl md:text-5xl font-bold">
          <a href="#home">
            <span>Care2</span>Consults
          </a>
        </div>

        <div className="hero-links nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#contact" className="contact4Mobile">
            Contact
          </a>
        </div>

        <div className="hero-btn">
          <a href="#contact">
            Contact<i className="fa fa-paper-plane" aria-hidden="true"></i>
          </a>
        </div>

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
