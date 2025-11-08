'use client'; // Required because it uses the ImageModal which has client-side logic

import ImageModal from '@/components/image-modal';
import publicationImage2024 from '@/public/images/publication/2024.jpg'; // Adjust the import path

// Image Icon Component
const ImageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
    </svg>
);

// Data for the component
const publicationsData = [
  {
    year: 2024,
    imageSrc: publicationImage2024,
  },
];

export default function ComplaintPublicationsAbout() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        {/* Title in Indonesian */}
        <h2 className="font-montserrat mb-8 text-center text-2xl font-bold text-gray-900 sm:text-left sm:text-3xl md:text-4xl">
          Publikasi Pengaduan Konsumen
        </h2>

        {/* Links Container */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Header in Indonesian */}
          <div className="bg-custom-green3 px-6 py-3">
            <span className="font-inter text-sm font-medium text-gray-900">
              Lihat Lampiran
            </span>
          </div>
          <div className="flex flex-col">
            {/* Map over the data */}
            {publicationsData.map((item) => (
              <ImageModal
                key={item.year}
                imgSrc={item.imageSrc}
                altText={`Publikasi Pengaduan Konsumen ${item.year}`}
                modalTitle={`Publikasi Pengaduan Konsumen PT Info Tekno Siaga ${item.year}`}
              >
                {/* This is the trigger element, passed as a child */}
                <div className="flex cursor-pointer items-center gap-2.5 border-b border-gray-200 px-6 py-3 text-gray-500 transition-colors duration-200 hover:bg-[#e2e7f0] hover:text-gray-900 last:border-b-0">
                  <ImageIcon />
                  {/* Trigger text in Indonesian */}
                  <span className="font-inter text-sm font-medium">
                    Publikasi Pengaduan Konsumen PT Info Tekno Siaga {item.year}
                  </span>
                </div>
              </ImageModal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
