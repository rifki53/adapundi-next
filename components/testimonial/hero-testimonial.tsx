"use client"; // Diperlukan karena menggunakan hook untuk mendeteksi ukuran layar

import { useState, useEffect } from "react";
import Image from "next/image";
import ModalVideo from "@/components/modal-video";

// --- Image Imports ---
import mobileBg from "@/public/images/banner/vertical/testimonial.png";
import desktopBg from "@/public/images/illustration/abstract-illustration.svg";
import testimonialImage from "@/public/images/testimonial/CEVY-1.png";

// Custom hook untuk mendapatkan ukuran window
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<any>({ width: undefined });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Panggil sekali saat inisialisasi

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default function HeroTestimonial() {
  const { width: screenWidth } = useWindowSize();
  const isMobile = screenWidth < 1024;

  const backgroundImageUrl = isMobile ? mobileBg.src : desktopBg.src;
  const sectionClasses = `relative flex flex-col justify-end lg:justify-center bg-no-repeat bg-center bg-cover w-full ${
    isMobile ? "h-screen" : "bg-custom-green md:min-h-[36.75rem]" // min-h-147
  }`;

  return (
    <section
      className={sectionClasses}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left pb-26 lg:pb-0">
        {/* Konten Testimoni (Kiri) */}
        <div className="w-full lg:w-3/5 lg:pr-10">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-normal font-montserrat leading-tight mb-6">
            Aplikasi Adapundi{" "}
            <span className="font-bold">
              Limitnya Besar dan Pencairan Cepat
            </span>
            , Sehingga Bisa Mendukung Usaha Saya.
          </h1>
          <p className="text-white text-lg sm:text-xl font-normal font-montserrat mb-8">
            CEVY, PENGUSAHA UMKM
          </p>
          <ModalVideo
            videoUrl="https://assets.adapundi.com/adapundi/media/cevy.mp4"
            buttonText="Kisah Selengkapnya"
          />
        </div>

        {/* Gambar (Kanan) - Tersembunyi di mobile */}
        <div className="hidden lg:flex w-full lg:w-1/3 justify-center">
          <Image
            className="w-full max-w-md object-cover"
            src={testimonialImage}
            alt="Testimonial Icon"
            priority // Prioritaskan load gambar ini karena berada di atas
          />
        </div>
      </div>
    </section>
  );
}
