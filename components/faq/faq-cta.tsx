"use client";

import { useState } from "react";
import Image from "next/image";
import ModalPdfView from "@/components/modal-pdf-view"; // Sesuaikan path jika perlu
import PunpunHello from "@/public/images/punpun/Hello.png"; // Impor gambar

const FaqCta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-custom-green">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Kontainer Utama */}
          <div className="flex flex-col md:flex-row">
            {/* Konten Kiri */}
            <div className="w-full md:w-1/2 py-6 my-6 flex items-center">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white leading-tight mb-6">
                  Pertanyaan Umum Layanan Adapundi
                </h2>
                <p className="text-base md:text-lg font-normal font-roboto text-white leading-relaxed mb-8">
                  Klik tombol di bawah ini sekarang juga
                </p>
                {/* Tombol */}
                <div className="mx-6 md:mx-0">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn bg-white text-gray-800 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors"
                  >
                    Lihat Selengkapnya
                  </button>
                </div>
              </div>
            </div>

            {/* Gambar Kanan */}
            <div className="hidden md:flex w-full md:w-1/2 justify-end items-center">
              <Image
                src={PunpunHello}
                alt="Icon punpun"
                className="h-[20rem] w-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal PDF */}
      <ModalPdfView
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pdfFile="/docs/common-ask.pdf"
        title="Pertanyaan Umum Layanan Adapundi"
      />
    </>
  );
};

export default FaqCta;
