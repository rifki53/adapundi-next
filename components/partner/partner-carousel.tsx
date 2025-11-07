// components/partner/PartnerCarousel.tsx

import React from "react";
import PartnerLogo from "./partner-logo"; // Impor komponen anak yang baru

// Impor semua logo
import BCALogo from "@/public/images/partner/bca.png";
import InstamoneyLogo from "@/public/images/partner/instamoney.png";
import FaspayLogo from "@/public/images/partner/faspay.png";
import BNILogo from "@/public/images/partner/bni.png";
import SeaBankLogo from "@/public/images/partner/seabank.png";
import BNCLogo from "@/public/images/partner/bnc.png";
import DBS from "@/public/images/payment/dbs.png";
import OVO from "@/public/images/payment/ovo.png";
import Privy from "@/public/images/partner/privy.png";

// Data partner, sama seperti sebelumnya
const partners = [
  { img: BCALogo, alt: "Bank Central Asia (BCA) Logo" },
  { img: InstamoneyLogo, alt: "Instamoney Logo" },
  { img: FaspayLogo, alt: "Faspay Logo" },
  { img: BNCLogo, alt: "Bank Neo Commerce (BNC) Logo" },
  { img: BNILogo, alt: "Bank Negara Indonesia (BNI) Logo" },
  { img: SeaBankLogo, alt: "SeaBank Logo" },
  { img: DBS, alt: "DBS Bank Logo" },
  { img: OVO, alt: "OVO Logo" },
  { img: Privy, alt: "Privy Logo" },
];

export default function PartnerCarousel() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-8 sm:pt-12 md:pt-20">
          {/* Judul Section */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Didukung Partner Terpercaya
            </h2>
          </div>

          {/* Container Carousel */}
          <div className="relative mt-8 flex justify-center sm:mt-10 md:mt-12">
            <div className="group w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
              {/* Blok Pertama (Hasil dari .map) */}
              <div className="flex items-center justify-start [&>*]:mx-2 animate-[infinite-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]">
                {partners.map((partner, index) => (
                  <PartnerLogo
                    key={`partner1-${index}`}
                    partner={partner}
                    className="w-[9rem] transition-transform duration-300 group-hover:rotate-0 md:w-[16rem]"
                  />
                ))}
              </div>
              {/* Blok Kedua (Duplikat untuk efek seamless loop) */}
              <div
                className="flex items-center justify-start [&>*]:mx-2 animate-[infinite-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]"
                aria-hidden="true"
              >
                {partners.map((partner, index) => (
                  <PartnerLogo
                    key={`partner2-${index}`}
                    partner={partner}
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
}
