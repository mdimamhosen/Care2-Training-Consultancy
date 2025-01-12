"use client";

import React from "react";

const ContactUs = () => {
  return (
    <>
      {/* Meta Tags for SEO */}
      <head>
        <meta
          name="description"
          content="Contact Care2 Training Consultancy for all your educational and career needs. Reach out to our offices in the UK and Bangladesh or send us a message directly."
        />
        <meta
          name="keywords"
          content="Contact, Care2 Training Consultancy, educational services, career services, UK, Bangladesh, training consultancy"
        />
        <meta name="author" content="Care2 Training Consultancy" />
        <title>Contact Us | Care2 Training Consultancy</title>
      </head>

      <section className="contact-sec" id="contact">
        <h1 className="tact-header">
          Contact Us Via Our Offices or Send A Message
        </h1>

        <div className="contact-container">
          <div className="office flex justify-center items-center">
            <div className="office-flex">
              <div className="office-box">
                <h2>
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  UK (Head Office)
                </h2>
                <address>
                  <i className="fa fa-home" aria-hidden="true" />
                  <p>
                    Unit 301, 3rd Floor, 7 Kirkdale Road Bushwood, London E11
                    IHP, United Kingdom
                  </p>
                </address>
                <span>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <p>Email: info@care2training</p>
                </span>
                <span>
                  <i className="fa fa-phone" aria-hidden="true" />
                  <p>Phone: +44 (0)203 576 2072</p>
                </span>
                <span>
                  <i className="fa fa-facebook" aria-hidden="true" />
                  <p>Social Media: Care2 Training</p>
                </span>
              </div>
            </div>
            <div className="office-flex">
              <div className="office-box">
                <h2>
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  Bangladesh (Global Branch)
                </h2>
                <address>
                  <i className="fa fa-home" aria-hidden="true" />
                  <p>
                    A R Tower, Level-08, Kemal Ataturk Avenue Banani C/A, Dhaka
                    1213
                  </p>
                </address>
                <span>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <p>Email: info@care2training.com</p>
                </span>
                <span>
                  <i className="fa fa-phone" aria-hidden="true" />
                  <p>Phone: +880 18 4249 7766</p>
                </span>
                <span>
                  <i className="fa fa-facebook" aria-hidden="true" />
                  <p>Social Media: Care2 Training Consultancy</p>
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form">
            <form action="">
              <input
                type="text"
                placeholder="Your Full Name"
                required
                className="form-input"
                aria-label="Full Name"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="form-input"
                aria-label="Email Address"
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Your Message Here"
                required
                className="form-textarea"
                aria-label="Message"
              ></textarea>
              <button className="send-btn">
                Send Message{" "}
                <i className="fa fa-check-square-o" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
