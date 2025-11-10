import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schemas";

// Impor semua komponen halaman Anda
import DisclaimerRiplay from "@/components/riplay/disclaimer-riplay";
import DownloadRiplay from "@/components/riplay/download-riplay";
import GeneralRequirementsRiplay from "@/components/riplay/general-requirements-riplay";
import HeroRiplay from "@/components/riplay/hero-riplay";
import LoanSimulationRiplay from "@/components/riplay/loan-simulation-riplay";
import ProductIntroductionRiplay from "@/components/riplay/product-introduction-riplay";

// 1. Definisikan Metadata SPESIFIK untuk Halaman Riplay (/riplay)
export const metadata: Metadata = {
  // Judul spesifik. Akan menjadi: "Ringkasan Informasi Produk... | Adapundi"
  title: "Ringkasan Informasi Produk dan Layanan Adapundi",
  description:
    "Simak penjelasan lengkap mengenai ringkasan informasi produk dan layanan Adapundi di sini!",

  // URL kanonis untuk halaman ini.
  alternates: {
    canonical: "/riplay",
  },

  // --- Menimpa Open Graph & Twitter untuk halaman ini ---
  openGraph: {
    title: "Ringkasan Informasi Produk dan Layanan Adapundi",
    description:
      "Simak penjelasan lengkap mengenai ringkasan informasi produk dan layanan Adapundi di sini!",
    url: "/riplay", // URL spesifik halaman ini
    // Menggunakan gambar default situs karena tidak ada yang spesifik di kode Vue
    images: [
      {
        url: "/twitter-card-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Adapundi - Ringkasan Informasi Produk dan Layanan",
      },
    ],
  },
  twitter: {
    title: "Ringkasan Informasi Produk dan Layanan Adapundi",
    description:
      "Simak penjelasan lengkap mengenai ringkasan informasi produk dan layanan Adapundi di sini!",
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

// 2. Komponen Halaman Riplay
export default function Riplay() {
  // Buat schema breadcrumb spesifik untuk halaman ini (seperti di kode Vue)
  const breadcrumbSchema = generateBreadcrumbSchema(["home", "riplay"]);

  return (
    <>
      {/* Sisipkan JSON-LD Schema untuk Breadcrumb */}
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Render semua komponen visual halaman Anda */}
      <HeroRiplay />
      <ProductIntroductionRiplay />
      <GeneralRequirementsRiplay />
      <LoanSimulationRiplay />
      <DisclaimerRiplay />
      <DownloadRiplay />
    </>
  );
}
