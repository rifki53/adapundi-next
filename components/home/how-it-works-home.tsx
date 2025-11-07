"use client"; // Komponen ini interaktif, jadi harus menjadi Client Component

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Impor gambar-gambar
import app1 from '@/public/images/shot/app-1.png';
import app2 from '@/public/images/shot/app-2.png';
import app3 from '@/public/images/shot/app-3.png';
import app4 from '@/public/images/shot/app-4.png';
import androidLogo from '@/public/images/download/android-cta-logo.png';
import iosLogo from '@/public/images/download/ios-cta-logo.png';

// Definisikan tipe untuk data agar lebih aman
const images: { [key: number]: StaticImageData } = { 1: app1, 2: app2, 3: app3, 4: app4 };
const alts: { [key: number]: string } = { 1: 'Download App img', 2: 'Isi Data img', 3: 'Verifikasi img', 4: 'Pencairan Dana img' };
const stepTitles = ['Download App', 'Isi Data', 'Verifikasi', 'Pencairan Dana'];
const stepDescriptions = [
  'Download aplikasi Adapundi di Google Play dan App Store.',
  'Cukup siapkan KTP dan isi data diri, lalu ikuti petunjuk pada aplikasi.',
  'Sistem akan mengevaluasi secara otomatis dan memberikan hasil segera.',
  'Dalam hitungan menit dana dicairkan setelah pengajuan Anda disetujui.',
];

// OneLink URLs
const androidOneLinkUrl = 'https://adapundi.onelink.me/cN17/em5uj56b';
const iosOneLinkUrl = 'https://adapundi.onelink.me/cN17/szh8qiwc';

export default function HowItWorksHome() {
  // Menggunakan useState untuk mengelola langkah yang aktif
  const [stepActive, setStepActive] = useState(1);

  // Preload gambar, sama seperti onMounted di Vue
  useEffect(() => {
    Object.values(images).forEach((src) => {
      const img = new window.Image();
      img.src = src.src; // Akses .src dari objek StaticImageData
    });
  }, []);

  return (
    <section className="relative bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div>
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8">
            <h2 className="h2">Pencairan Satset Pakai Adapundi</h2>
          </div>

          {/* Main container */}
          <div className="flex flex-col md:flex-row justify-center md:space-x-8 items-center">
            
            {/* Image container dengan animasi */}
            <div className="md:w-1/2 w-full">
              <div className="relative min-h-[450px] h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stepActive}
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -32 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 h-full w-[25rem]"
                  >
                    <Image
                      src={images[stepActive]}
                      alt={alts[stepActive]}
                      layout="fill"
                      objectFit="contain"
                      priority={true} // Prioritaskan gambar yang terlihat
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Steps container */}
            <div className="md:w-1/2 md:pl-0 md:mt-4 pt-4 relative space-y-6">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className="flex cursor-pointer h-[5rem] rounded-md transition-all duration-200"
                  onClick={() => setStepActive(step)}
                >
                  <div className="w-1/6 relative flex justify-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 bg-white transition-transform duration-200">
                      <button
                        type="button"
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 transition-all duration-200 ${
                          stepActive >= step
                            ? 'bg-green-500 text-white'
                            : 'border-2 border-green-300 text-green-500'
                        }`}
                      >
                        {step}
                      </button>
                    </div>

                    {step !== 4 && (
                      <div
                        className={`absolute top-10 h-full left-1/2 w-0.5 -translate-x-1/2 transition-colors duration-200 ${
                          stepActive >= step ? 'bg-green-500' : 'bg-green-300'
                        }`}
                      ></div>
                    )}
                  </div>
                  <div className="w-5/6 pl-4">
                    <h4 className="h4 mb-2">{stepTitles[step - 1]}</h4>
                    <p className="p">{stepDescriptions[step - 1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Button container */}
          <div className="flex justify-center mt-8 px-4 md:px-0">
            <div className="flex justify-center items-center gap-2 sm:gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={androidOneLinkUrl}
                className="bg-custom-green rounded-2xl p-3 flex justify-center items-center hover:bg-green-600 transition-colors duration-200"
              >
                <Image
                  src={androidLogo}
                  className="h-auto brightness-0 invert w-[120px] sm:w-[150px]"
                  alt="Android Download"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={iosOneLinkUrl}
                className="bg-custom-green rounded-2xl p-3 flex justify-center items-center hover:bg-green-600 transition-colors duration-200"
              >
                <Image
                  src={iosLogo}
                  className="h-auto brightness-0 invert w-[120px] sm:w-[150px]"
                  alt="iOS Download"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
