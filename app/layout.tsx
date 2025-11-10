// Impor yang dibutuhkan
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./css/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 1. Definisikan Viewport (Global)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

// 2. Definisikan Metadata GLOBAL / DASAR
export const metadata: Metadata = {
  // BARU: Tambahkan metadataBase untuk menangani URL absolut secara otomatis
  metadataBase: new URL("https://www.adapundi.com"),

  // --- Template Judul & Fallback Deskripsi ---
  title: {
    default: "Adapundi: Aplikasi Pinjaman Daring Terpercaya", // Judul jika halaman tidak punya title
    template: "%s | Adapundi", // Format untuk halaman anak: "Judul Halaman | Adapundi"
  },
  description:
    "Pinjaman aman dipercaya hampir 30 juta pengguna, dengan 14 juta+ pencairan telah disalurkan, serta berizin dan diawasi selama 7 tahun. Download Adapundi sekarang!",

  // --- Branding, Ikon, dan Verifikasi Situs ---
  applicationName: "Adapundi",
  verification: {
    google: "UXqnevNmiKreKUmmvEfhBKDiNLSVqh9YKVgcNqBeIn4",
    other: { "facebook-domain-verification": "zr02nzouts34b1lfetf6nlnwf7nbvt" },
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-196x196.png", sizes: "196x196", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-touch-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-touch-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-touch-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-touch-icon-167x167.png", sizes: "167x167" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180" },
    ],
  },
  other: {
    "msapplication-TileColor": "#FFFFFF",
    "msapplication-TileImage": "/mstile-144x144.png",
    "msapplication-square70x70logo": "/mstile-70x70.png",
    "msapplication-square150x150logo": "/mstile-150x150.png",
    "msapplication-wide310x150logo": "/mstile-310x150.png",
    "msapplication-square310x310logo": "/mstile-310x310.png",
  },

  // --- Dasar untuk Open Graph & Twitter ---
  openGraph: {
    type: "website",
    url: "https://www.adapundi.com",
    siteName: "Adapundi",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// 3. Komponen RootLayout utama
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-EEQS4820CP"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EEQS4820CP');
          `}
        </Script>
      </body>
    </html>
  );
}
