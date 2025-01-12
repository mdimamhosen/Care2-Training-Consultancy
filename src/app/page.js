import Head from "next/head";
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
    <div>
      <Head>
        {/* General Meta Tags */}
        <meta
          name="description"
          content="Care2 Consultancy offers expert visa, study abroad, and work abroad services for students and professionals."
        />
        <meta
          name="keywords"
          content="study abroad, work abroad, visa assistance, professional consultancy, student visa, living abroad"
        />
        <meta name="author" content="Md Imam Hosen" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Care2 Consultancy Training - Study, Work, and Live Abroad"
        />
        <meta
          property="og:description"
          content="Care2 Consultancy offers expert visa assistance, study abroad, and work abroad services for students and professionals."
        />
        <meta
          property="og:url"
          content="https://care2training-consultancy.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://care2training-consultancy.vercel.app/og-image.jpg"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Care2Consultancy" />
        <meta name="twitter:title" content="Care2 Consultancy Training" />
        <meta
          name="twitter:description"
          content="Your trusted partner for study and work abroad opportunities."
        />
        <meta
          name="twitter:image"
          content="https://care2training-consultancy.vercel.app/og-image.jpg"
        />

        {/* SEO for Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#008080" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Care2 Consultancy",
              url: "https://care2training-consultancy.vercel.app/",
              logo: "https://care2training-consultancy.vercel.app/logo.png",
              sameAs: [
                "https://www.facebook.com/Care2Consultancy",
                "https://twitter.com/Care2Consultancy",
                "https://www.linkedin.com/company/care2-consultancy",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-555-1234",
                contactType: "Customer Service",
                areaServed: "US",
                availableLanguage: "English",
              },
            }),
          }}
        />
      </Head>

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
