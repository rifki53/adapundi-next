// components/home/RegulatorSection.tsx

import React from "react";
import Image, { StaticImageData } from "next/image";

// Impor semua logo
// Pastikan path ini sesuai dengan struktur folder 'public' Anda
import Afpi from "@/public/images/regulator/afpi.png";
import Laps from "@/public/images/regulator/laps.png";
import Ojk from "@/public/images/regulator/ojk.png";
import Komdigi from "@/public/images/regulator/komdigi.png";
import Iso from "@/public/images/regulator/iso.png";

// Definisikan tipe untuk objek regulator untuk type-safety
interface Regulator {
  img: StaticImageData;
  alt: string;
  title: string;
}

// Data regulator
const regulators: Regulator[] = [
  {
    img: Ojk,
    alt: "OJK Regulator",
    title: "Berizin dan diawasi oleh",
  },
  {
    img: Afpi,
    alt: "AFPI Regulator",
    title: "Terdaftar dalam",
  },
  {
    img: Komdigi,
    alt: "Komdigi Regulator",
    title: "Terdaftar dalam",
  },
  {
    img: Iso,
    alt: "ISO Regulator",
    title: "Tersertifikasi dengan",
  },
  {
    img: Laps,
    alt: "LAPS Regulator",
    title: "Anggota dari",
  },
];

export default function RegulatorSectionHome() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-8 pt-8 sm:pb-12 sm:pt-12 md:pb-20 md:pt-20">
          {/* Judul Section */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Berizin Resmi dan Tergabung
            </h2>
          </div>

          {/* Grid Container */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 xl:grid-cols-5">
            {/* 
              Menggunakan .map() untuk me-render daftar, pengganti v-for.
              Setiap item dalam loop harus memiliki 'key' yang unik.
            */}
            {regulators.map((regulator, index) => (
              <div
                key={index}
                className="flex h-24 items-center justify-between rounded-lg bg-gray-200 p-4 sm:h-auto sm:flex-col sm:justify-center sm:px-4 sm:py-6 sm:text-center"
              >
                {/* Judul */}
                <p className="text-sm font-medium leading-tight text-gray-800 sm:order-1">
                  {regulator.title}
                </p>

                {/* 
                  Logo:
                  - Menggunakan komponen <Image> dari next/image untuk optimasi.
                  - Semua kelas CSS dari <img> lama dipindahkan ke <Image>.
                */}
                <Image
                  src={regulator.img}
                  alt={regulator.alt}
                  className="h-12 w-auto object-contain sm:order-2 sm:mt-4 sm:h-14"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
