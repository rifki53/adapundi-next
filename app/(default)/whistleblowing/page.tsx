import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schemas";

import HeroTitle from "@/components/hero-title";
import WhistleblowerForm from "@/components/whistleblower-form";

// 1. Definisikan Metadata SPESIFIK untuk Halaman Antifraud
export const metadata: Metadata = {
  // Judul spesifik. Akan menjadi: "Kenali Modus... | Adapundi"
  title: "Kenali Modus Penipuan Pinjaman Daring dan Tips Mengatasinya",
  description:
    "Panduan antifraud untuk memastikan transaksi aman dan Anda terhindar penipuan yang mengatasnamakan Adapundi.",

  // URL kanonis untuk halaman ini.
  alternates: {
    canonical: "/antifraud",
  },

  // --- Menimpa Open Graph & Twitter untuk halaman ini ---
  openGraph: {
    title: "Kenali Modus Penipuan Pinjaman Daring dan Tips Mengatasinya",
    description:
      "Panduan antifraud untuk memastikan transaksi aman dan Anda terhindar penipuan yang mengatasnamakan Adapundi.",
    url: "/antifraud", // URL spesifik halaman ini
    // Menggunakan gambar default situs untuk preview saat dibagikan
    images: [
      {
        url: "/twitter-card-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Adapundi - Waspada Penipuan",
      },
    ],
  },
  twitter: {
    title: "Kenali Modus Penipuan Pinjaman Daring dan Tips Mengatasinya",
    description:
      "Panduan antifraud untuk memastikan transaksi aman dan Anda terhindar penipuan yang mengatasnamakan Adapundi.",
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

// 2. Komponen Halaman Antifraud
export default function Antifraud() {
  // Buat schema breadcrumb spesifik untuk halaman ini (seperti di kode Vue)
  const breadcrumbSchema = generateBreadcrumbSchema(["home", "antifraud"]);

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
        title="Saluran <i>Whistleblowing</i> Adapundi<br>Jaga Integritas Kita Bersama"
        description="Laporkan dugaan pelanggaran atau praktik tidak etis. Kami menjamin kerahasiaan dan pelindungan penuh bagi setiap pelapor."
      />
      <WhistleblowerForm />
    </>
  );
}
