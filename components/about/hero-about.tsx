"use client"; // Diperlukan karena menggunakan hook (useState, useEffect)

import { useState, useEffect } from 'react';
import Image from 'next/image';

// --- Image Imports ---
import MobileBg from '@/public/images/banner/vertical/about.png';
import DesktopBg from '@/public/images/illustration/abstract-illustration.svg';
import AdapundiLogo from '@/public/images/logo/AP-logo.png';

// --- Custom Hook untuk Ukuran Layar ---
const useWindowSize = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Pastikan kode ini hanya berjalan di sisi klien
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set nilai awal dan tambahkan event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup listener saat komponen di-unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenWidth;
};

// --- Komponen Utama ---
const HeroAbout = () => {
  const screenWidth = useWindowSize();
  const isMobile = screenWidth < 768;

  // Menggabungkan kelas dari <style scoped> ke dalam Tailwind
  const sectionClasses = [
    'relative',
    'flex flex-col justify-end md:justify-center',
    'bg-no-repeat bg-center bg-cover', // Konversi dari <style scoped>
    isMobile ? 'h-screen' : 'bg-custom-green md:min-h-147',
  ].join(' ');

  // Style dinamis untuk background image
  const sectionStyle = {
    // Gunakan .src karena gambar diimpor sebagai objek statis
    backgroundImage: `url(${isMobile ? MobileBg.src : DesktopBg.src})`,
  };

  return (
    <section className={sectionClasses} style={sectionStyle}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col pb-26 md:pb-0 md:flex-row md:gap-8 md:items-center">
        {/* Image Section */}
        <div className="w-full md:w-2/5 flex justify-center items-center order-1 md:order-2">
          <div className="w-20 h-20 md:w-[60%] md:h-auto md:max-w-sm">
            <Image
              className="w-full h-auto object-cover"
              src={AdapundiLogo}
              alt="Adapundi Services"
              priority={false} // Setara dengan loading="lazy"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 flex flex-col gap-6 order-2 md:order-1 mt-12 md:mt-0">
          {/* Title */}
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">
            Tentang Adapundi
          </h1>

          {/* Description */}
          <div className="flex-grow space-y-8">
            <div className="text-white text-xl font-normal space-y-4 text-center md:text-left">
              <p>
                PT Info Tekno Siaga (Adapundi) adalah aplikasi pinjaman daring
                yang berizin OJK (KEP-48/D.05/2021) dan tergabung dalam Asosiasi
                Fintech Pendanaan Bersama Indonesia (AFPI).
              </p>
              <p>
                Adapundi berkomitmen untuk memberikan solusi keuangan yang mudah,
                cepat dan aman bagi seluruh masyarakat di Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
