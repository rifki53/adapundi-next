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
  // DIPERBARUI: Menyamakan dengan metadata default sesuai referensi Vue
  title: "Adapundi: Aplikasi Pinjaman Daring Terpercaya",
  description:
    "Pinjaman aman dipercaya hampir 30 juta pengguna, dengan 14 juta+ pencairan telah disalurkan, serta berizin dan diawasi selama 7 tahun. Download Adapundi sekarang!",

  alternates: {
    canonical: "/", // Cukup gunakan "/" karena metadataBase sudah ada di layout
  },

  // --- Override Open Graph & Twitter untuk halaman ini ---
  openGraph: {
    title: "Adapundi: Aplikasi Pinjaman Daring Terpercaya",
    description:
      "Pinjaman aman dipercaya hampir 30 juta pengguna, dengan 14 juta+ pencairan telah disalurkan, serta berizin dan diawasi selama 7 tahun. Download Adapundi sekarang!",
    // DIPERBARUI: Gunakan path relatif. Next.js akan menggabungkannya dengan metadataBase
    images: [
      {
        url: "/twitter-card-1200x630.png", // Path dari folder /public
        width: 1200,
        height: 630,
        alt: "Adapundi - Pinjaman Online Terpercaya",
      },
    ],
  },
  twitter: {
    title: "Adapundi: Aplikasi Pinjaman Daring Terpercaya",
    description:
      "Pinjaman aman dipercaya hampir 30 juta pengguna, dengan 14 juta+ pencairan telah disalurkan, serta berizin dan diawasi selama 7 tahun. Download Adapundi sekarang!",
    images: [
      {
        url: "/twitter-card-1200x630.png", // Path dari folder /public
        width: 1200,
        height: 630, // Disesuaikan agar konsisten
        alt: "Adapundi Twitter Card",
      },
    ],
  },
};

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbSchema(["home"]);

  return (
    <>
      <script
        key="home-schema-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchemas[0]) }}
      />

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
