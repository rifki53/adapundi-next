"use client";

import { useState, useEffect } from "react";

// Impor gambar dari direktori aset Anda
import MobileHero from "@/public/images/banner/vertical/riplay.png";
import DesktopHero from "@/public/images/illustration/abstract-illustration.svg";

// 1. Impor komponen BaseButton
// Pastikan path ini sesuai dengan lokasi file BaseButton.tsx Anda
import BaseButton from "@/components/base-button"; 

const HeroRiplay = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionClasses = `relative flex flex-col justify-end md:justify-center ${
    isMobile ? "h-screen" : "bg-custom-green min-h-147"
  }`;

  const sectionStyles = {
    backgroundImage: `url(${isMobile ? MobileHero.src : DesktopHero.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <section className={sectionClasses} style={sectionStyles}>
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 pb-26 md:pb-0">
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:max-w-4xl">
          {/* Judul */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
            Ringkasan Informasi Produk dan Layanan (RIPLAY)
          </h1>

          {/* Sub-judul */}
          <p className="text-lg md:text-xl text-white font-medium mb-12">
            Adapundi adalah aplikasi pinjaman daring yang sudah berizin dan
            diawasi OJK.
          </p>

          {/* 2. Gunakan komponen BaseButton */}
          <div className="w-full">
            <BaseButton
              to="/docs/riplay.pdf"
              title="DOWNLOAD RIPLAY"
              external={true} // Prop ini akan merender tag <a> dengan target="_blank"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroRiplay;
