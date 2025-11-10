import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schemas";

// Impor komponen-komponen halaman Anda
import HeroTitle from "@/components/hero-title";
import ContentPrivacyPolicy from "@/components/privacy-policy/content-privacy-policy";
import CtaTestimonial from "@/components/testimonial/cta-testimonial";

// 1. Definisikan Metadata SPESIFIK untuk Halaman Kebijakan Privasi
export const metadata: Metadata = {
  // Judul spesifik. Akan menjadi: "Privacy Policy Aplikasi Adapundi | Adapundi"
  title: "Privacy Policy Aplikasi Adapundi",
  description:
    "Pelajari lebih lanjut tentang privacy policy aplikasi Adapundi terbaru di sini!",

  // URL kanonis untuk halaman ini.
  alternates: {
    canonical: "/privacy-policy",
  },

  // --- Menimpa Open Graph & Twitter untuk halaman ini ---
  openGraph: {
    title: "Privacy Policy Aplikasi Adapundi",
    description:
      "Pelajari lebih lanjut tentang privacy policy aplikasi Adapundi terbaru di sini!",
    url: "/privacy-policy", // URL spesifik halaman ini
    // Menggunakan gambar default situs untuk preview saat dibagikan
    images: [
      {
        url: "/twitter-card-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Adapundi - Kebijakan Privasi",
      },
    ],
  },
  twitter: {
    title: "Privacy Policy Aplikasi Adapundi",
    description:
      "Pelajari lebih lanjut tentang privacy policy aplikasi Adapundi terbaru di sini!",
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

// 2. Komponen Halaman PrivacyPolicy
export default function PrivacyPolicy() {
  // Buat schema breadcrumb spesifik untuk halaman ini (seperti di kode Vue)
  const breadcrumbSchema = generateBreadcrumbSchema(["home", "privacy"]);

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
        title="Kebijakan Privasi"
        description="Pembaruan terakhir: 15 Juli 2025"
      />
      <ContentPrivacyPolicy />
      <CtaTestimonial />
    </>
  );
}
