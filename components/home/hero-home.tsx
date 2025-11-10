"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// --- Impor Gambar Manual ---
// (Semua impor gambar Anda tetap sama)
import bgImage01Desktop from "@/public/images/bgslide/horizontal/h1.png";
import bgImage02Desktop from "@/public/images/bgslide/horizontal/h2.png";
import bgImage03Desktop from "@/public/images/bgslide/horizontal/h3.png";
import bgImage04Desktop from "@/public/images/bgslide/horizontal/h4.png";
import bgImage01Mobile from "@/public/images/bgslide/vertical/v1.png";
import bgImage02Mobile from "@/public/images/bgslide/vertical/v2.png";
import bgImage03Mobile from "@/public/images/bgslide/vertical/v3.png";
import bgImage04Mobile from "@/public/images/bgslide/vertical/v4.png";
import androidLogo from "@/public/images/download/android-cta-logo.png";
import iosLogo from "@/public/images/download/ios-cta-logo.png";
import androidQR from "@/public/images/download/gp_qr_code.png";
import iosQR from "@/public/images/download/ios_qr_code.png";

// --- Definisi Tipe & Data (tetap sama) ---
type Slide = {
  title: string;
  description: string;
  desktop: StaticImageData;
  mobile: StaticImageData;
  link: string | null;
};

const slides: Slide[] = [
  {
    title: "7 Tahun Melayani\nPilihan Jutaan Pengguna",
    description: "Hidupkan setiap mimpi dengan hati. Nikmati pinjaman limit tinggi bunga rendah, sekarang juga!",
    desktop: bgImage01Desktop,
    mobile: bgImage01Mobile,
    link: null,
  },
  {
    title: "Proses Cepat, \nAtur Sesuai Kebutuhan",
    description: "Dapatkan pinjaman cepat cair hanya dengan KTP dan nomor HP, pengajuan cepat dalam hitungan menit.",
    desktop: bgImage02Desktop,
    mobile: bgImage02Mobile,
    link: null,
  },
  {
    title: "Layanan Andalan \nKebutuhan Keuangan",
    description: "Dari kebutuhan mendesak hingga usaha, pinjaman daring 24 jam Adapundi hadir memberikan solusi keuangan yang aman",
    desktop: bgImage03Desktop,
    mobile: bgImage03Mobile,
    link: null,
  },
  {
    title: "Keamanan Data Anda \nKomitmen Utama Kami",
    description: "Adapundi adalah pinjaman daring legal dengan sertifikasi perlindungan manajemen keamanan informasi ISO/IEC 27001:2022",
    desktop: bgImage04Desktop,
    mobile: bgImage04Mobile,
    link: null,
  },
];

const downloadButtons = [
  {
    platform: "Android",
    href: "https://adapundi.onelink.me/cN17/em5uj56b",
    logo: androidLogo,
    qrCode: androidQR,
  },
  {
    platform: "iOS",
    href: "https://adapundi.onelink.me/cN17/szh8qiwc",
    logo: iosLogo,
    qrCode: iosQR,
  },
];

export default function HeroHome() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative">
      {/* 1. Tambahkan blok <style> untuk menargetkan class global Swiper */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #ffffff !important;
        }
      `}</style>
      
      <Swiper
        className="h-full w-screen lg:w-full"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {slides.map((slide, index) => {
          const Component = slide.link ? "a" : "div";

          return (
            <SwiperSlide key={index}>
              <Component
                href={slide.link ?? undefined}
                target={slide.link ? "_blank" : undefined}
                rel={slide.link ? "nofollow noopener noreferrer" : undefined}
                className="flex w-full flex-col items-center justify-end bg-cover bg-center bg-no-repeat px-6 pt-20 md:bg-top md:pt-120 lg:items-start lg:bg-center lg:px-20 lg:pt-0"
                style={{
                  backgroundImage: `url(${(isMobileOrTablet ? slide.mobile : slide.desktop).src})`,
                }}
              >
                <div className="z-10 mx-auto flex min-h-147 w-full max-w-6xl flex-col justify-end px-4 sm:px-6 lg:justify-center">
                  <div className="w-full pb-10 pr-2 text-center text-gray-900 lg:mb-18 lg:w-1/2 lg:pb-0 lg:pt-40 lg:text-left">
                    {index === 0 ? (
                      <h1 className="h2 mb-4 whitespace-pre-line font-extrabold text-gray-900">
                        {slide.title}
                      </h1>
                    ) : (
                      <h2 className="h2 mb-4 whitespace-pre-line font-extrabold text-gray-900">
                        {slide.title}
                      </h2>
                    )}

                    <div className="flex flex-col">
                      <p className="p w-full whitespace-pre-line text-gray-900">
                        {slide.description}
                      </p>
                      <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                        {downloadButtons.map((button) => (
                          <a
                            key={button.platform}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            href={button.href}
                            className="relative flex items-center justify-center rounded-xl bg-custom-green p-2 transition-all duration-200 hover:rounded-b-xl hover:rounded-t-none hover:bg-green-600"
                            onMouseEnter={() => setHoveredPlatform(button.platform)}
                            onMouseLeave={() => setHoveredPlatform(null)}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Image
                              src={button.logo}
                              className="h-[25px] w-auto invert brightness-0 lg:h-[29px]"
                              alt={`${button.platform} Download`}
                            />
                            {hoveredPlatform === button.platform && !isMobileOrTablet && (
                              // 2. Ganti class dari CSS module dengan utility class Tailwind
                              <div className="absolute bottom-full left-0 right-0 z-20 flex justify-center rounded-t-xl bg-white px-4 pb-2 pt-4">
                                <Image
                                  src={button.qrCode}
                                  className="w-full max-w-[120px]"
                                  alt="QR Code"
                                />
                              </div>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                    <p className="p mt-4 h-8 text-gray-900">
                      Adapundi berizin dan diawasi OJK, serta resmi tergabung di AFPI
                    </p>
                  </div>
                </div>
              </Component>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
