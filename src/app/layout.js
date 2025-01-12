import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Care2 Consultancy Training - Study, Work, and Live Abroad",
  description:
    "Care2 Consultancy offers expert visa, study abroad, and work abroad services for students and professionals.",
  keywords:
    "study abroad, work abroad, visa assistance, professional consultancy, student visa, living abroad",
  author: "Md Imam Hosen",
  openGraph: {
    title: "Care2 Consultancy Training",
    description:
      "Expert consultancy services for students and professionals seeking opportunities abroad.",
    url: "https://care2training-consultancy.vercel.app/",
    image: "https://care2training-consultancy.vercel.app/og-image.jpg", // Update with the correct image URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Set the card type to summary_large_image for better display
    site: "@Care2Consultancy", // Your social handle
    title: "Care2 Consultancy Training",
    description:
      "Your trusted partner for study and work abroad opportunities.",
    image: "https://care2training-consultancy.vercel.app/og-image.jpg", // Update with the correct image URL
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Care2 Consultancy",
    url: "https://care2training-consultancy.vercel.app/",
    logo: "https://care2training-consultancy.vercel.app/logo.png", // Add your logo URL here
    sameAs: [
      "https://www.facebook.com/Care2Consultancy",
      "https://twitter.com/Care2Consultancy",
      "https://www.linkedin.com/company/care2-consultancy",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-555-1234", // Your contact number
      contactType: "Customer Service",
      areaServed: "US", // Add the area served
      availableLanguage: "English",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#008080" />
        <meta name="author" content="Md Imam Hosen" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
