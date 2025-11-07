import { Metadata } from "next";
import { homePageSchemas, generateBreadcrumbSchema } from "@/utils/schemas";

// Komponen Halaman
import HeroHome from "@/components/home/hero-home";
import FeaturesHome from "@/components/home/features-home";
import HowItWorksHome from "@/components/home/how-it-works-home";
import LoanSection1Home from "@/components/home/loan-section-1-home";
import LoanSection2Home from "@/components/home/loan-section-2-home";
import LoanSection3Home from "@/components/home/loan-section-3-home";
import TestimonialsSection from "@/components/home/testimonials/testimonials-section";
import PartnerCarousel from "@/components/home/partner/partner-carousel";
import RegulatorSectionHome from "@/components/home/regulator-section-home";

// 1. Definisikan Metadata SPESIFIK untuk Halaman Home
export const metadata: Metadata = {
  title: "Aplikasi Pinjaman Daring Cepat Cair & Terpercaya", // Ini akan menjadi: "Aplikasi Pinjaman... | Adapundi"
  description:
    "Pinjaman online cepat cair dari Adapundi. Proses mudah, aman, dan terpercaya oleh jutaan pengguna. Ajukan pinjaman dana tunai Anda sekarang juga!",

  alternates: {
    canonical: "https://www.adapundi.com", // URL kanonis untuk halaman ini
  },

  // --- Override Open Graph & Twitter untuk halaman ini ---
  openGraph: {
    title: "Aplikasi Pinjaman Daring Cepat Cair & Terpercaya",
    description:
      "Pinjaman online cepat cair dari Adapundi. Proses mudah, aman, dan terpercaya.",
    images: [
      {
        url: "https://www.adapundi.com/og-image.png", // Gambar spesifik untuk homepage
        width: 1200,
        height: 630,
        alt: "Adapundi - Pinjaman Online Terpercaya",
      },
    ],
  },
  twitter: {
    title: "Aplikasi Pinjaman Daring Cepat Cair & Terpercaya",
    description:
      "Pinjaman online cepat cair dari Adapundi. Proses mudah, aman, dan terpercaya.",
    images: [
      {
        url: "https://www.adapundi.com/twitter-card-1200x630.png", // Gambar Twitter spesifik
        width: 1200,
        height: 600,
        alt: "Adapundi Twitter Card",
      },
    ],
  },
};

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbSchema(["home"]);

  return (
    <>
      {homePageSchemas.map((schema, index) => (
        <script
          key={`home-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <HeroHome />
      <FeaturesHome />
      <HowItWorksHome />
      <LoanSection1Home />
      <LoanSection2Home />
      <LoanSection3Home />
      <TestimonialsSection />
      <PartnerCarousel />
      <RegulatorSectionHome />
    </>
  );
}
