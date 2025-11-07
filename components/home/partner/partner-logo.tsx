// components/partner/PartnerLogo.tsx

import React from "react";
import Image, { StaticImageData } from "next/image";

// Definisikan tipe untuk props
interface Partner {
  img: StaticImageData | string;
  alt: string;
}

interface PartnerLogoProps {
  partner: Partner;
  className?: string; // Izinkan className dari luar
}

export default function PartnerLogo({ partner, className }: PartnerLogoProps) {
  return (
    // Gabungkan className dari props dengan yang dari komponen induk
    <div
      className={`relative flex items-center justify-center rounded-2xl bg-white p-2 md:p-6 ${className}`}
    >
      <Image
        src={partner.img}
        alt={partner.alt}
        className="h-full w-full max-h-12 object-contain transition-opacity duration-300 hover:opacity-100 md:max-h-16"
        // 'loading="lazy"' adalah default di next/image, jadi tidak perlu ditulis
        // Ukuran gambar akan dioptimalkan oleh Next.js
      />
    </div>
  );
}
