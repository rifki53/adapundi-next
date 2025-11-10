import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schemas";

// Impor komponen halaman Anda
import CsrTestimonial from "@/components/testimonial/csr-testimonial";
import CtaTestimonial from "@/components/testimonial/cta-testimonial";
import HeroTestimonial from "@/components/testimonial/hero-testimonial";
import ListTestimonial from "@/components/testimonial/list-testimonial";
import QuoteTestimonial from "@/components/testimonial/quote-testimonial";

// 1. Definisikan Metadata SPESIFIK untuk Halaman Testimoni (/testimonial)
export const metadata: Metadata = {
  // Judul spesifik. Akan menjadi: "Kisah Inspiratif dan Ulasan... | Adapundi"
  title: "Kisah Inspiratif dan Ulasan Seputar Adapundi",
  description:
    "Temukan berbagai kisah inspiratif bagaimana Adapundi memberikan dampak postif bagi para penggunanya.",

  // URL kanonis untuk halaman ini.
  alternates: {
    canonical: "/testimonial",
  },

  // --- Menimpa Open Graph & Twitter untuk halaman ini ---
  openGraph: {
    title: "Kisah Inspiratif dan Ulasan Seputar Adapundi",
    description:
      "Temukan berbagai kisah inspiratif bagaimana Adapundi memberikan dampak postif bagi para penggunanya.",
    url: "/testimonial", // URL spesifik halaman ini
    // Menggunakan gambar default situs karena tidak ada yang spesifik
    images: [
      {
        url: "/twitter-card-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Adapundi - Kisah Inspiratif",
      },
    ],
  },
  twitter: {
    title: "Kisah Inspiratif dan Ulasan Seputar Adapundi",
    description:
      "Temukan berbagai kisah inspiratif bagaimana Adapundi memberikan dampak postif bagi para penggunanya.",
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

// 2. Komponen Halaman Testimonial
export default function Testimonial() {
  // Buat schema breadcrumb spesifik untuk halaman ini
  const breadcrumbSchema = generateBreadcrumbSchema(["home", "testimonial"]);

  return (
    <>
      {/* Sisipkan JSON-LD Schema untuk Breadcrumb */}
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Render semua komponen halaman Anda */}
      <HeroTestimonial />
      <ListTestimonial />
      <QuoteTestimonial />
      <CsrTestimonial />
      <CtaTestimonial />
    </>
  );
}
