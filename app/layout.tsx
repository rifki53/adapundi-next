// Impor CSS global dan Font
import "./css/style.css"; // Pastikan path ini benar sesuai struktur Anda
import { Inter } from "next/font/google";

// Konfigurasi Font (contoh menggunakan Inter)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Metadata untuk SEO (wajib di Server Component)
export const metadata = {
  title: "AdaPundi - Solusi Keuangan Anda",
  description:
    "Platform pinjaman online yang aman, cepat, dan terpercaya. Terdaftar dan diawasi oleh OJK.",
};

// Ganti nama DefaultLayout menjadi RootLayout untuk kejelasan
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <>
          <div className="flex flex-col min-h-screen overflow-hidden">
            <main className="grow">{children}</main>
          </div>
        </>
      </body>
    </html>
  );
}
