import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schemas";

// Impor komponen halaman Anda
import FeaturesLoan from "@/components/loans/features-loan";
import HeroCalculatorLoan from "@/components/loans/hero-calculator-loan";
import PaymentPartners from "@/components/loans/payment-partners";
import RiplayLoans from "@/components/loans/riplay-loans";
import SecurityLoans from "@/components/loans/security-loans";

// 1. Definisikan Metadata SPESIFIK untuk Halaman Pinjaman (/loans)
//    Ini akan menimpa metadata default dari layout.tsx
export const metadata: Metadata = {
  // Judul spesifik untuk halaman ini. Akan menjadi: "Pinjaman Daring Legal... | Adapundi"
  title: "Pinjaman Daring Legal Cepat Cair Tanpa Jaminan, Cukup KTP",
  description:
    "Lakukan simulasi pinjaman Adapundi, dapat limit hingga 100 juta cukup KTP dengan proses penciaran cepat.",

  // URL kanonis untuk halaman ini. Next.js akan menggabungkannya dengan `metadataBase`
  // menjadi "https://www.adapundi.com/loans"
  alternates: {
    canonical: "/loans",
  },

  // --- Menimpa Open Graph & Twitter untuk halaman ini ---
  openGraph: {
    title: "Pinjaman Daring Legal Cepat Cair Tanpa Jaminan, Cukup KTP",
    description:
      "Lakukan simulasi pinjaman Adapundi, dapat limit hingga 100 juta cukup KTP dengan proses penciaran cepat.",
    url: "/loans", // URL spesifik untuk halaman ini
    // Gunakan gambar yang sama dengan homepage sebagai fallback jika tidak ada yang spesifik
    images: [
      {
        url: "/twitter-card-1200x630.png", // Path dari folder /public
        width: 1200,
        height: 630,
        alt: "Adapundi - Pinjaman Daring Legal",
      },
    ],
  },
  twitter: {
    title: "Pinjaman Daring Legal Cepat Cair Tanpa Jaminan, Cukup KTP",
    description:
      "Lakukan simulasi pinjaman Adapundi, dapat limit hingga 100 juta cukup KTP dengan proses penciaran cepat.",
    images: [
      {
        url: "/twitter-card-1200x630.png", // Path dari folder /public
        width: 1200,
        height: 630,
        alt: "Adapundi Twitter Card",
      },
    ],
  },
};

// 2. Komponen Halaman Loans
export default function Loans() {
  // Buat schema breadcrumb spesifik untuk halaman ini
  const breadcrumbSchema = generateBreadcrumbSchema(["home", "loans"]);

  return (
    <>
      {/* Sisipkan JSON-LD Schema untuk Breadcrumb */}
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Render semua komponen halaman Anda */}
      <HeroCalculatorLoan />
      <FeaturesLoan />
      <PaymentPartners />
      <RiplayLoans />
      <SecurityLoans />
    </>
  );
}
