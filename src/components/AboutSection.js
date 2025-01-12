"use client";

import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div>
      <section className="  " id="about">
        <div className="flex w-11/12 mx-auto flex-col py-8 lg:py-10 items-center justify-center lg:flex-row   gap-4 h-full">
          <h1 className="text-3xl block md:hidden text-left mt-4 md:mt-0  md:-mb-3 md:text-5xl font-extrabold text-[#231F41] tracking-wide  ">
            About Us
          </h1>
          {/* Image container */}
          <div className="relative h-full lg:w-[40%] w-full flex   justify-center items-center">
            <Image
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              width={2047}
              height={1365}
              //   layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2  lg:p-8">
            <h1 className="text-3xl hidden md:block text-left mt-4 md:mt-0 -mb-3 md:-mb-3 md:text-5xl font-extrabold text-[#231F41] tracking-wide  ">
              About Us
            </h1>
            <p className="text-xs md:text-base">
              <br />
              At Care2 Training, we are dedicated to being your trusted partner
              in delivering exceptional, personalized care. Our team of
              experienced caregivers provides compassionate support, tailored to
              meet the unique needs of each individual. Whether you or your
              loved ones require assistance, we ensure the highest standard of
              care, promoting comfort, happiness, and overall well-being.
              <br />
              <br />
              We also specialize in study abroad, work abroad, and recruitment
              solutions, empowering individuals to achieve their academic,
              career, and professional goals globally.
              <br />
              <br />
              Our mission is to enhance lives through exceptional care,
              fostering trust and confidence in the services we provide. Through
              Care2 Training, we offer personalized guidance, trusted
              partnerships, and seamless processes, ensuring your success in
              educational and travel endeavors.
            </p>
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
    </div>
  );
};

export default AboutSection;
