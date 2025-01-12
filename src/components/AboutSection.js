"use client";

import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-8 lg:py-10">
      <div className="flex w-11/12 mx-auto flex-col lg:flex-row items-center justify-center gap-4 h-full">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#231F41] tracking-wide text-center">
          About Us
        </h1>

        {/* Image Container */}
        <div className="relative h-full lg:w-[40%] w-full flex justify-center items-center">
          <Image
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us - Care2 Training"
            width={2047}
            height={1365}
            className="object-cover"
            loading="lazy" // Lazy loading for performance
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#231F41] tracking-wide text-left">
            About Care2 Training
          </h2>
          <p className="text-xs md:text-base mt-4">
            At Care2 Training, we are dedicated to being your trusted partner in
            delivering exceptional, personalized care. Our team of experienced
            caregivers provides compassionate support, tailored to meet the
            unique needs of each individual. Whether you or your loved ones
            require assistance, we ensure the highest standard of care,
            promoting comfort, happiness, and overall well-being.
            <br />
            <br />
            We also specialize in study abroad, work abroad, and recruitment
            solutions, empowering individuals to achieve their academic, career,
            and professional goals globally.
            <br />
            <br />
            Our mission is to enhance lives through exceptional care, fostering
            trust and confidence in the services we provide. Through Care2
            Training, we offer personalized guidance, trusted partnerships, and
            seamless processes, ensuring your success in educational and travel
            endeavors.
          </p>

          {/* Explore Services Button */}
          <div className="hero-btn mt-4">
            <a
              href="#contact"
              className="inline-block bg-[var(--primary-clr)] text-[var(--primary-bg-clr)] px-6 py-3 rounded-md text-center transition duration-500 hover:bg-[var(--primary-bg-clr)] hover:text-[var(--primary-clr)]"
              aria-label="Explore services"
            >
              Explore{" "}
              <i className="fa fa-arrow-down ml-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
