import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schemas";

// Impor komponen-komponen Anda
import HeroTitle from "@/components/hero-title";
import ContentTermCondition from "@/components/term-condition/content-term-condition";
import DownloadCtaTermCondition from "@/components/term-condition/download-cta-term-condition";

// 1. Definisikan Metadata SPESIFIK untuk Halaman Syarat & Ketentuan
export const metadata: Metadata = {
  // Judul spesifik. Akan menjadi: "Syarat dan Ketentuan... | Adapundi"
  title: "Syarat dan Ketentuan Produk dan Layanan Adapundi",
  description:
    "Cek syarat dan ketentuan terkait produk dan layanan Adapundi terbaru di sini!",

  // URL kanonis untuk halaman ini.
  alternates: {
    canonical: "/term-condition",
  },

  // --- Menimpa Open Graph & Twitter untuk halaman ini ---
  openGraph: {
    title: "Syarat dan Ketentuan Produk dan Layanan Adapundi",
    description:
      "Cek syarat dan ketentuan terkait produk dan layanan Adapundi terbaru di sini!",
    url: "/term-condition", // URL spesifik halaman ini
    // Menggunakan gambar default situs untuk preview saat dibagikan
    images: [
      {
        url: "/twitter-card-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Adapundi - Syarat dan Ketentuan",
      },
    ],
  },
  twitter: {
    title: "Syarat dan Ketentuan Produk dan Layanan Adapundi",
    description:
      "Cek syarat dan ketentuan terkait produk dan layanan Adapundi terbaru di sini!",
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

// 2. Komponen Halaman TermCondition
export default function TermCondition() {
  // Buat schema breadcrumb spesifik untuk halaman ini (seperti di kode Vue)
  // Anda mungkin perlu menyesuaikan "terms" menjadi "term-condition" jika path-nya berbeda
  const breadcrumbSchema = generateBreadcrumbSchema(["home", "terms"]);

  return (
    <>
      {/* Sisipkan JSON-LD Schema untuk Breadcrumb */}
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Render semua komponen visual halaman Anda */}
      <HeroTitle
        title="Syarat dan Ketentuan"
        description="Pembaruan terakhir: 19 Maret 2025"
      />
      <ContentTermCondition />
      <DownloadCtaTermCondition />
    </>
  );
}
