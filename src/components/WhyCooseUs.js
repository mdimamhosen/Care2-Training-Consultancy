"use client";
import { useState } from "react";
import { BiMoney, BiSupport, BiBook, BiTime } from "react-icons/bi";

const WhyChooseUsData = [
  {
    _id: "1",
    title: "Affordable and Transparent Pricing",
    description:
      "We offer cost-effective solutions without compromising on quality.",
    color: "#231F41",
    icon: <BiMoney size="30" />,
  },
  {
    _id: "2",
    title: "Expert Guidance from Experienced Consultants",
    description:
      "Our team consists of professionals with years of expertise in their fields.",
    color: "#231F41",
    icon: <BiSupport size="30" />,
  },
  {
    _id: "3",
    title: "Personalized Solutions Tailored to Your Needs",
    description:
      "Every client gets customized services designed to achieve their unique goals.",
    color: "#231F41",
    icon: <BiBook size="30" />,
  },
  {
    _id: "4",
    title: "24/7 Availability for Support and Queries",
    description: "We are always here to assist you, no matter the time or day.",
    color: "#231F41",
    icon: <BiTime size="30" />,
  },
];

// Individual card component
const WhyChooseUsCard = ({ title, description, color, icon }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-48 w-full px-6 py-8 rounded-md shadow-md transition-all duration-300 ${
        hovered ? "text-white" : "text-black"
      }`}
      style={{
        backgroundColor: hovered ? color : "rgb(243, 244, 246)",
        color: hovered ? "white" : "black",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`p-4 rounded-full transition-transform duration-300`}
        style={{
          backgroundColor: hovered ? "white" : "#231F41",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          color: hovered ? "#231F41" : "white",
        }}
      >
        {icon}
      </div>
      <h2 className="mt-4 text-lg font-semibold text-center">{title}</h2>
      <p className="mt-2 text-sm text-center">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="py-8 lg:py-10 flex flex-col items-center">
      {/* Meta Tags for SEO */}
      <head>
        <meta
          name="description"
          content="Discover why Care2 Training Consultancy is your trusted partner for affordable, expert, and personalized solutions."
        />
        <meta
          name="keywords"
          content="consultancy, affordable pricing, expert guidance, tailored solutions, 24/7 support"
        />
        <meta name="author" content="Care2 Training Consultancy" />
        <title>Why Choose Us | Care2 Training Consultancy</title>
        <meta
          property="og:title"
          content="Why Choose Us | Care2 Training Consultancy"
        />
        <meta
          property="og:description"
          content="Discover why Care2 Training Consultancy is your trusted partner for affordable, expert, and personalized solutions."
        />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta
          property="og:url"
          content="https://www.care2consultancy.com/why-choose-us"
        />
      </head>

      <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">
        Why Choose Us
      </h1>
      <h2 className="text-center text-xs lg:text-base md:text-lg w-11/12 mx-auto mb-8">
        Your Trusted Partner for Tailored Solutions
      </h2>

      <div className="w-11/12 mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WhyChooseUsData.map((card) => (
            <WhyChooseUsCard
              key={card._id}
              title={card.title}
              description={card.description}
              color={card.color}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
