import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div>
      <section className="w-11/12 mx-auto py-8 lg:py-10" id="services">
        {/* Main Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          aria-label="Our Services"
        >
          Our Services
        </h1>

        {/* Description of services */}
        <h4
          className="text-center text-xs lg:text-base md:text-lg md:w-[80%] w-11/12 mx-auto mb-8"
          aria-label="Overview of Services"
        >
          At Care2 Training Consultancy, we offer a range of services to help
          you achieve your educational and career goals. Whether you are looking
          to study abroad, work abroad, or need guidance on living
          internationally.
        </h4>

        {/* Service List */}
        <div className="service-container">
          <div className="service-col">
            <div
              className="service-box"
              aria-labelledby="student-visa-assistance"
            >
              <Image
                src="https://i.postimg.cc/GhjK0MWJ/research.png"
                width={100}
                height={100}
                alt="Student Visa Assistance"
                className="object-cover w-14 h-14 md:w-16 md:h-16"
                loading="lazy"
              />
              <h2 id="student-visa-assistance">Student Visa Assistance</h2>
              <p className="text-xs text-center md:text-base">
                We offer comprehensive assistance with student visa
                applications, ensuring a smooth process for securing your visa
                to study abroad. From document preparation to application
                submission, we guide you every step of the way.
              </p>
              <div className="hero-btn mt-2">
                <a
                  href="#contact"
                  className="inline-block bg-[var(--primary-clr)] text-[var(--primary-bg-clr)] px-6 py-3 rounded-md text-center transition duration-500 hover:bg-[var(--primary-bg-clr)] hover:text-[var(--primary-clr)]"
                  aria-label="Learn more about Student Visa Assistance"
                >
                  Learn More{" "}
                  <i className="fa fa-arrow-down ml-2" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* Work Abroad Opportunities */}
            <div className="service-box" aria-labelledby="work-abroad">
              <Image
                src="https://i.postimg.cc/1zbc0bFP/scholarship.png"
                width={100}
                height={100}
                alt="Work Abroad Opportunities"
                className="object-cover w-14 h-14 md:w-16 md:h-16"
                loading="lazy"
              />
              <h2 id="work-abroad">Work Abroad Opportunities</h2>
              <p className="text-xs text-center md:text-base">
                We help you explore global work opportunities, offering support
                with job search, application procedures, and securing work
                permits. Our team connects you with employers worldwide for
                better career prospects.
              </p>
              <div className="hero-btn mt-2">
                <a
                  href="#contact"
                  className="inline-block bg-[var(--primary-clr)] text-[var(--primary-bg-clr)] px-6 py-3 rounded-md text-center transition duration-500 hover:bg-[var(--primary-bg-clr)] hover:text-[var(--primary-clr)]"
                  aria-label="Learn more about Work Abroad Opportunities"
                >
                  Learn More{" "}
                  <i className="fa fa-arrow-down ml-2" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="service-col">
            {/* Consultancy for Living Abroad */}
            <div className="service-box" aria-labelledby="living-abroad">
              <Image
                src="https://i.postimg.cc/QC3Qw5Sy/funding.png"
                width={100}
                height={100}
                alt="Consultancy for Living Abroad"
                className="object-cover w-14 h-14 md:w-16 md:h-16"
                loading="lazy"
              />
              <h2 id="living-abroad">Consultancy for Living Abroad</h2>
              <p className="text-xs text-center md:text-base">
                Our consultancy services offer expert advice on settling in a
                new country. From accommodation to cultural adaptation, we
                provide comprehensive guidance to ensure you thrive in your new
                environment.
              </p>
              <div className="hero-btn mt-2">
                <a
                  href="#contact"
                  className="inline-block bg-[var(--primary-clr)] text-[var(--primary-bg-clr)] px-6 py-3 rounded-md text-center transition duration-500 hover:bg-[var(--primary-bg-clr)] hover:text-[var(--primary-clr)]"
                  aria-label="Learn more about Consultancy for Living Abroad"
                >
                  Learn More{" "}
                  <i className="fa fa-arrow-down ml-2" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* Career Coaching and Consultation */}
            <div className="service-box" aria-labelledby="career-coaching">
              <Image
                src="https://i.postimg.cc/pXPQBfm9/coaching.png"
                width={100}
                height={100}
                alt="Career Coaching and Consultation"
                className="object-cover w-14 h-14 md:w-16 md:h-16"
                loading="lazy"
              />
              <h2 id="career-coaching">Career Coaching and Consultation</h2>
              <p className="text-xs text-center md:text-base">
                Our experienced coaches provide personalized career strategies,
                actionable insights, and continuous support to help you set and
                achieve your career goals, ensuring success in your professional
                journey.
              </p>
              <div className="hero-btn mt-2">
                <a
                  href="#contact"
                  className="inline-block bg-[var(--primary-clr)] text-[var(--primary-bg-clr)] px-6 py-3 rounded-md text-center transition duration-500 hover:bg-[var(--primary-bg-clr)] hover:text-[var(--primary-clr)]"
                  aria-label="Learn more about Career Coaching and Consultation"
                >
                  Learn More{" "}
                  <i className="fa fa-arrow-down ml-2" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
