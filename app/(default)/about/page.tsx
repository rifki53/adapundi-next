import { Metadata } from "next";
import { aboutPageSchema, generateBreadcrumbSchema } from "@/utils/schemas";

// Impor semua komponen halaman Anda
import HeroAbout from "@/components/about/hero-about";
import VisionMission from "@/components/about/vision-mission-about";
import ExecutiveTeamAbout from "@/components/about/executive-team-about";
import ShareholdersAbout from "@/components/about/shareholders-about";
import FundingStatisticsAbout from "@/components/about/funding-statistics-about";
import FinancialReports from "@/components/about/financial-reports-about";
import EventsAndActivitiesAbout from "@/components/about/events-and-activities-about";
import UncollectibleReceivablesAbout from "@/components/about/uncollectible-receivables-about";
import ComplaintPublicationsAbout from "@/components/about/complaint-publications-about";

// 1. Definisikan Metadata SPESIFIK untuk Halaman Tentang Kami (/about)
export const metadata: Metadata = {
  // Judul spesifik. Akan menjadi: "Tentang Adapundi... | Adapundi"
  title: "Tentang Adapundi | Aplikasi Pinjaman Daring OJK",
  description:
    "Temukan informasi tentang aplikasi Adapundi, Aplikasi pinjaman daring terpercaya yang terdaftar di OJK dan resmi tergabung di AFPI.",

  // URL kanonis untuk halaman ini.
  alternates: {
    canonical: "/about",
  },

  // --- Menimpa Open Graph & Twitter untuk halaman ini ---
  openGraph: {
    title: "Tentang Adapundi | Aplikasi Pinjaman Daring OJK",
    description:
      "Temukan informasi tentang aplikasi Adapundi, Aplikasi pinjaman daring terpercaya yang terdaftar di OJK dan resmi tergabung di AFPI.",
    url: "/about", // URL spesifik halaman ini
    // Gunakan gambar default situs sebagai fallback
    images: [
      {
        url: "/twitter-card-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Adapundi - Tentang Kami",
      },
    ],
  },
  twitter: {
    title: "Tentang Adapundi | Aplikasi Pinjaman Daring OJK",
    description:
      "Temukan informasi tentang aplikasi Adapundi, Aplikasi pinjaman daring terpercaya yang terdaftar di OJK dan resmi tergabung di AFPI.",
    images: [
      {
        url: "/twitter-card-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Adapundi Twitter Card",
      },
    ],
  },
};

// 2. Komponen Halaman About
export default function About() {
  // Buat semua schema JSON-LD yang dibutuhkan untuk halaman ini
  const breadcrumbSchema = generateBreadcrumbSchema(["home", "about"]);
  // Asumsi `aboutPageSchema` adalah array yang diimpor dari utils/schemas.js
  const allSchemas = [breadcrumbSchema, ...aboutPageSchema];

  return (
    <>
      {/* Sisipkan semua JSON-LD Schema yang relevan untuk halaman ini */}
      {allSchemas.map((schema, index) => (
        <script
          key={`about-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Render semua komponen visual halaman Anda */}
      <HeroAbout />
      <VisionMission />
      <ExecutiveTeamAbout />
      <ShareholdersAbout />
      <FundingStatisticsAbout />
      <FinancialReports />
      <EventsAndActivitiesAbout />
      <UncollectibleReceivablesAbout />
      <ComplaintPublicationsAbout />
    </>
  );
}
