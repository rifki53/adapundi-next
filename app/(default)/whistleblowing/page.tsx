import { Metadata } from "next";
import { generateBreadcrumbSchema, whistleblowingPageSchema } from "@/utils/schemas"; // Pastikan path import benar

import HeroTitle from "@/components/hero-title";
import WhistleblowerForm from "@/components/whistleblower-form";

// 1. Definisikan Metadata SEO untuk Halaman Whistleblowing
export const metadata: Metadata = {
  // Meta Title dari data Anda
  title: "Whistleblowing System Aman dan Rahasia | Laporkan Pelanggaran Tanpa Takut",
  // Meta Description dari data Anda
  description:
    "Kami menyediakan ruang aman bagi siapa pun yang ingin melaporkan pelanggaran. Whistleblowing System ini menjamin kerahasiaan identitas pelapor dan penanganan yang profesional.",

  // URL kanonis untuk halaman ini
  alternates: {
    canonical: "/whistleblowing",
  },

  // --- Open Graph & Twitter Card dari data Anda ---
  openGraph: {
    type: "website",
    title: "Whistleblowing System Aman dan Rahasia | Laporkan Pelanggaran Tanpa Takut",
    description:
      "Kami menyediakan ruang aman bagi siapa pun yang ingin melaporkan pelanggaran. Whistleblowing System ini menjamin kerahasiaan identitas pelapor dan penanganan yang profesional.",
    url: "/whistleblowing", // URL spesifik halaman ini
    siteName: "Adapundi",
    images: [
      {
        url: "/twitter-card-1200x630.png", // Asumsi menggunakan gambar default
        width: 1200,
        height: 630,
        alt: "Adapundi Whistleblowing System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whistleblowing System Aman dan Rahasia | Laporkan Pelanggaran Tanpa Takut",
    description:
      "Kami menyediakan ruang aman bagi siapa pun yang ingin melaporkan pelanggaran. Whistleblowing System ini menjamin kerahasiaan identitas pelapor dan penanganan yang profesional.",
    images: [
      {
        url: "/twitter-card-1200x630.png", // Asumsi menggunakan gambar default
        width: 1200,
        height: 600, // Twitter merekomendasikan 600px untuk height
        alt: "Adapundi Twitter Card for Whistleblowing",
      },
    ],
  },
};

// 2. Komponen Halaman Whistleblowing
export default function WhistleblowingPage() {
  // Buat schema breadcrumb spesifik untuk halaman ini: Home > Whistleblowing
  const breadcrumbSchema = generateBreadcrumbSchema(["home", "whistleblower"]);

  return (
    <>
      {/* Sisipkan JSON-LD Schema untuk Breadcrumb */}
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Sisipkan JSON-LD Schema untuk Halaman Whistleblowing */}
      <script
        key="whistleblowing-page-schema"
        type="application/ld+json"
        // Kita ambil objek pertama dari array schema yang sudah diimpor
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whistleblowingPageSchema[0]) }}
      />

      {/* Render semua komponen visual halaman Anda */}
      <HeroTitle
        title="Saluran <i>Whistleblowing</i> Adapundi"
        description="Jaga integritas bersama, laporkan dugaan pelanggaran atau praktik tidak etis dengan keamanan dan kerahasiaan terjamin."
      />
      <WhistleblowerForm />
    </>
  );
}
