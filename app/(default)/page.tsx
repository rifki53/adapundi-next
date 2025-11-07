export const metadata = {
  title: "Home - Adapundi", // Judul diperbarui agar lebih relevan
  description: "Pinjaman online cepat cair, aman, dan terpercaya. Simulasi pinjaman, proses mudah, dan keamanan data terjamin.",
};

// Komponen yang sudah ada
import HeroHome from "@/components/hero-home";
import FeaturesHome from "@/components/features-home";

// Impor komponen baru yang telah dimigrasi
import HowItWorksHome from "@/components/how-it-works-home";
import LoanSection1Home from "@/components/loan-section-1-home";
import LoanSection2Home from "@/components/loan-section-2-home";
import LoanSection3Home from "@/components/loan-section-3-home";

export default function Home() {
  return (
    <>
      {/* Bagian Atas Halaman */}
      <HeroHome />
      <FeaturesHome />

      {/* Menampilkan Proses Cara Kerja */}
      <HowItWorksHome />

      {/* Menampilkan Detail dan Keunggulan Pinjaman */}
      <LoanSection1Home />
      <LoanSection2Home />
      <LoanSection3Home />
    </>
  );
}
