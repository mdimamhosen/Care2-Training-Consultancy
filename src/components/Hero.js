"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <main
      className="hero-section px-4 py-8 md:py-16   "
      id="home"
      aria-labelledby="hero-heading"
    >
      <div className="flex w-11/12 p-4 flex-col-reverse md:flex-row items-center justify-between mx-auto">
        {/* Hero Text */}
        <div className="hero-text text-center w-full md:w-1/2   md:text-left">
          <p className=" text-base md:text-2xl uppercase tracking-wide text-[var(--secondary-clr)] md:leading-[2.5rem]  ">
            Welcome to
          </p>
          <h1
            id="hero-heading"
            className="text-2xl md:text-5xl font-extrabold text-gray-800 mt-4 md:mt-6 mb-4 md:mb-6 leading-[3rem] md:leading-[4rem]"
          >
            Care2 Training Consultancy
          </h1>

          {/* Dynamic Text Effect */}
          <div className="text-container mb-6 md:mb-12 text-lg md:text-2xl leading-[1.8rem] md:leading-[2.5rem] text-blue-600">
            <Typewriter
              words={[
                "Helping you achieve your dreams with expert guidance on visa applications.",
                "Study opportunities abroad, and work placements.",
                "Do you have a dream? We will share it with you and make it real.",
                "Do you have a vision? We will help you see it and make it clear.",
                "Do you have a goal? We will help you achieve it and make it real.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          <div className="hero-btn">
            <a
              href="#contact"
              className="inline-block bg-[var(--primary-clr)] text-[var(--primary-bg-clr)] px-6 py-3 rounded-md text-center transition duration-500 hover:bg-[var(--primary-bg-clr)] hover:text-[var(--primary-clr)]"
              aria-label="Explore services"
            >
              Contact Us
              <i className="fa fa-arrow-down ml-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className=" w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="https://i.postimg.cc/MKXdqyyf/hero-banner.png"
            alt="Care2-Consults Services Hero Banner"
            className="w-full max-w-[200px] md:max-w-[600px] animate-[oscillation_3s_infinite]"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
