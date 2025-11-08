"use client";

import { useState, Fragment } from "react";
import Image from "next/image";

// Komponen ini menangani logika untuk menampilkan dan menyembunyikan modal.
export default function ImageModal({
  imageSrc,
  altText,
  modalTitle,
  children,
}: any) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Ini adalah elemen pemicu. Mengkliknya akan membuka modal. */}
      <div onClick={openModal} className="cursor-pointer">
        {children}
      </div>

      {/* Modal Overlay dan Konten */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal} // Menutup modal saat mengklik latar belakang
        >
          <div
            className="relative bg-white p-4 sm:p-6 rounded-lg shadow-2xl max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat mengklik kontennya
          >
            {/* Header Modal */}
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h3 className="text-lg font-semibold font-montserrat text-gray-900">
                {modalTitle}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-900 text-2xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            {/* Konten Modal (Gambar) */}
            <div className="relative w-full h-[70vh]">
              <Image
                src={imageSrc}
                alt={altText}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
