import { Metadata } from "next";
import { faqPageSchema, generateBreadcrumbSchema } from "@/utils/schemas";

// Impor komponen-komponen halaman Anda
import FaqCta from "@/components/faq/faq-cta";
import GeneralQuestionsFaq from "@/components/faq/general-questions-faq";
import HeroTitle from "@/components/hero-title";

// 1. Definisikan Metadata SPESIFIK untuk Halaman FAQ
export const metadata: Metadata = {
  // Judul spesifik. Akan menjadi: "FAQ Seputar Layanan... | Adapundi"
  title: "FAQ Seputar Layanan dan Produk Adapundi",
  description:
    "Temukan jawaban dari berbagai pertanyaan terkait layanan dan produk Adapundi untuk mendukung kemudahan Anda.",

  // URL kanonis untuk halaman ini.
  alternates: {
    canonical: "/faq",
  },

  // --- Menimpa Open Graph & Twitter untuk halaman ini ---
  openGraph: {
    title: "FAQ Seputar Layanan dan Produk Adapundi",
    description:
      "Temukan jawaban dari berbagai pertanyaan terkait layanan dan produk Adapundi untuk mendukung kemudahan Anda.",
    url: "/faq", // URL spesifik halaman ini
    // Menggunakan gambar default situs untuk preview saat dibagikan
    images: [
      {
        url: "/twitter-card-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Adapundi - Pertanyaan Umum (FAQ)",
      },
    ],
  },
  twitter: {
    title: "FAQ Seputar Layanan dan Produk Adapundi",
    description:
      "Temukan jawaban dari berbagai pertanyaan terkait layanan dan produk Adapundi untuk mendukung kemudahan Anda.",
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

// 2. Komponen Halaman Faq
export default function Faq() {
  // Buat schema breadcrumb spesifik untuk halaman ini
  const breadcrumbSchema = generateBreadcrumbSchema(["home", "faq"]);

  return (
    <>
      {/* Sisipkan JSON-LD Schema untuk Breadcrumb */}
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Sisipkan JSON-LD Schema untuk FAQPage (looping melalui array) */}
      {faqPageSchema.map((schema, index) => (
        <script
          key={`faq-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Render semua komponen visual halaman Anda */}
      <HeroTitle
        title="Pertanyaan Seputar Adapundi"
        description="Temukan jawaban terkait layanan dan produk pinjaman dana tunai Adapundi"
      />
      <GeneralQuestionsFaq />
      <FaqCta />
    </>
  );
}
