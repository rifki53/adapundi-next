import React from "react";
import PartnerLogo from "./partner-logo"; // Pastikan path ini benar

// Impor semua logo yang dibutuhkan
import Alfa from "@/public/images/payment/alfa.png";
import Bca from "@/public/images/payment/bca.png";
import Bni from "@/public/images/payment/bni.png";
import Bri from "@/public/images/payment/bri.png";
import Ovo from "@/public/images/payment/ovo.png";

// Data untuk mitra pembayaran
const paymentPartners = [
  { img: Ovo, alt: "OVO Logo" },
  { img: Bca, alt: "Bank Central Asia (BCA) Logo" },
  { img: Bni, alt: "Bank Negara Indonesia (BNI) Logo" },
  { img: Bri, alt: "Bank Rakyat Indonesia (BRI) Logo" },
  { img: Alfa, alt: "Alfamart Logo" },
];

const PaymentPartners = () => {
  return (
    <section className="relative bg-white">
      {/* Container utama dibuat sama dengan padding atas dan bawah di div dalamnya */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-8 sm:py-12 md:py-20">
          {/* Judul Section */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Mitra Pembayaran
            </h2>
          </div>

          {/* Container Carousel (Struktur diubah mengikuti contoh) */}
          <div className="relative mt-8 flex justify-center sm:mt-10 md:mt-12">
            <div className="group w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
              
              {/* Blok Pertama (Hasil dari .map) */}
              <div className="flex items-center justify-start [&>*]:mx-2 animate-[infinite-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]">
                {paymentPartners.map((logo, index) => (
                  <PartnerLogo
                    key={`payment1-${index}`}
                    logo={logo} // Menggunakan prop 'logo'
                    // Class ditambahkan agar sama dengan contoh
                    className="w-[9rem] transition-transform duration-300 group-hover:rotate-0 md:w-[16rem]"
                  />
                ))}
              </div>

              {/* Blok Kedua (Duplikat untuk efek seamless loop) */}
              <div
                className="flex items-center justify-start [&>*]:mx-2 animate-[infinite-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]"
                aria-hidden="true"
              >
                {paymentPartners.map((logo, index) => (
                  <PartnerLogo
                    key={`payment2-${index}`}
                    logo={logo} // Menggunakan prop 'logo'
                    // Class ditambahkan agar sama dengan contoh
                    className="w-[9rem] transition-transform duration-300 group-hover:rotate-0 md:w-[16rem]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPartners;
