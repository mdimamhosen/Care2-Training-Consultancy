"use client";

import React from "react";

const ContactUs = () => {
  return (
    <div>
      <section className="contact-sec  border-red-600" id="contact">
        <h1 className="tact-header">
          Contact Us Via Our Offices or Send A Message
        </h1>

        <div className="contact-container  border-red-600">
          <div className="office flex justify-center items-center  border-red-600">
            <div className="office-flex  border-red-600">
              <div className="office-box  border-green-600">
                <h4>
                  <i className="fa fa-map-marker" aria-hidden="true"></i> UK
                  (Head Office)
                </h4>
                <span>
                  <i className="fa fa-home" aria-hidden="true"></i>{" "}
                  <p>
                    Unit 301, 3rd Floor, 7 Kirkdale Road Bushwood, London E11
                    IHP, United Kingdom
                  </p>
                </span>
                <span>
                  <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                  <p>Email: info@care2training</p>
                </span>
                <span>
                  <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                  <p>Phone: +44 (0)203 576 2072</p>
                </span>
                <span>
                  <i className="fa fa-facebook" aria-hidden="true"></i>{" "}
                  <p>Social Media: Care2 Training</p>
                </span>
              </div>
            </div>
            <div className="office-flex  border-yellow-600">
              <div className="office-box  border-green-600">
                <h4>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Bangladesh (Global Branch)
                </h4>
                <span>
                  <i className="fa fa-home" aria-hidden="true"></i>{" "}
                  <p>
                    A R Tower, Level-08, Kemal Ataturk Avenue Banani C/A, Dhaka
                    1213
                  </p>
                </span>
                <span>
                  <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                  <p>Email: info@care2training.com</p>
                </span>
                <span>
                  <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                  <p>Phone: +880 18 4249 7766</p>
                </span>
                <span>
                  <i className="fa fa-facebook" aria-hidden="true"></i>{" "}
                  <p>Social Media: Care2 Training Consultancy</p>
                </span>
              </div>
            </div>
          </div>
          <div className="form">
            <form action="">
              <input
                type="text"
                placeholder="Your Full Name"
                required
                className="form-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="form-input"
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Your Message Here"
                required
                className="form-textarea"
              ></textarea>
              <button className="send-btn">
                Send Message{" "}
                <i className="fa fa-check-square-o" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
