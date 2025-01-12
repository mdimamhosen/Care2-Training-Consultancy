import AboutSection from "@/components/AboutSection";
import ContactUs from "@/components/ContactUs";
import FlagCarousel from "@/components/CountrySlider";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import WhyChooseUs from "@/components/WhyCooseUs";

import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      <Hero />
      <FlagCarousel />
      <AboutSection />
      <Service />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
