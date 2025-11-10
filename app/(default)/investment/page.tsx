import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schemas";

// Impor komponen halaman Anda
import AdvantagesInvestment from "@/components/investments/advantages-investment";
import CtaInvestment from "@/components/investments/cta-investment";
import GuaranteeInvestment from "@/components/investments/guarantee-investment";
import HeroInvestment from "@/components/investments/hero-investment";

// 1. Definisikan Metadata SPESIFIK untuk Halaman Investasi (/investment)
//    Ini akan menimpa metadata default dari layout.tsx
export const metadata: Metadata = {
  // Judul spesifik untuk halaman ini. Akan menjadi: "Program Pendanaan Adapundi... | Adapundi"
  title: "Program Pendanaan Adapundi, Jadi Lender Partner Sekarang!",
  description:
    "Adapundi membuka kesempatan kepada Anda untuk menjadi lender partner dengan imbalan bagi hasil yang kompetitif dan keuntungan lainnya.",

  // URL kanonis untuk halaman ini.
  alternates: {
    canonical: "/investment",
  },

  // --- Menimpa Open Graph & Twitter untuk halaman ini ---
  openGraph: {
    title: "Program Pendanaan Adapundi, Jadi Lender Partner Sekarang!",
    description:
      "Adapundi membuka kesempatan kepada Anda untuk menjadi lender partner dengan imbalan bagi hasil yang kompetitif dan keuntungan lainnya.",
    url: "/investment", // URL spesifik untuk halaman ini
    // Menggunakan gambar default situs karena tidak ada yang spesifik
    images: [
      {
        url: "/twitter-card-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Adapundi - Program Pendanaan",
      },
    ],
  },
  twitter: {
    title: "Program Pendanaan Adapundi, Jadi Lender Partner Sekarang!",
    description:
      "Adapundi membuka kesempatan kepada Anda untuk menjadi lender partner dengan imbalan bagi hasil yang kompetitif dan keuntungan lainnya.",
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

// 2. Komponen Halaman Investment
export default function Investment() {
  // Buat schema breadcrumb spesifik untuk halaman ini
  const breadcrumbSchema = generateBreadcrumbSchema(["home", "investment"]);

  return (
    <>
      {/* Sisipkan JSON-LD Schema untuk Breadcrumb */}
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Render semua komponen halaman Anda */}
      <HeroInvestment />
      <AdvantagesInvestment />
      <CtaInvestment />
      <GuaranteeInvestment />
    </>
  );
}
