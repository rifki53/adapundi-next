import ImageModal from '@/components/image-modal'; // Sesuaikan path jika perlu

// Impor gambar secara statis. Next.js akan menanganinya secara otomatis.
import Pub2024 from '@/images/publication/2024.jpg'; // Pastikan path ini benar

// Data untuk Piutang Tidak Tertagih
const uncollectibleReceivables = [
  {
    year: 2024,
    file: "https://assets.adapundi.com/adapundi/file/Daftar_Piutang_Yang_Tidak_Dapat_Tertagih_2024_.pdf",
  },
];

// Data untuk Publikasi
const publications = [
  {
    year: 2024,
    imageSrc: Pub2024,
  },
];

// SVG untuk ikon PDF dan Gambar untuk menggantikan PrimeIcons
const IconPdf = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
    <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227.81.81 0 0 1 .08-1.102c.195-.388.516-.6.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227.81.81 0 0 1 .08-1.102c.195-.388.516-.6.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227.81.81 0 0 1 .08-1.102c.195-.388.516-.6.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227.81.81 0 0 1 .08-1.102c.195-.388.516-.6.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227.81.81 0 0 1 .08-1.102c.195-.388.516-.6.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227.81.81 0 0 1 .08-1.102c.195-.388.516-.6.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227.81.81 0 0 1 .08-1.102c.195-.388.516-.6.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227z"/>
  </svg>
);

const IconImage = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
    </svg>
);


export default function ReceivablesAndPublicationsAbout() {
  return (
    <>
      {/* Section 1: Uncollectible Receivables */}
      <section className="bg-neutral">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <h2 className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-8">
            List of Uncollectible Receivables
          </h2>
          <div className="bg-white">
            <div className="bg-custom-green3 px-6 py-3">
              <span className="text-sm font-medium font-inter">
                Download Attachment
              </span>
            </div>
            <div className="flex flex-col">
              {uncollectibleReceivables.map((item) => (
                <a
                  key={item.year}
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3 hover:bg-[#e2e7f0] transition-colors duration-200 text-gray-500 hover:text-gray-900 border-b border-gray-200"
                >
                  <IconPdf />
                  <span className="text-sm font-medium font-inter">
                    List of Uncollectible Receivables {item.year}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Consumer Complaint Publications */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-montserrat mb-8 text-center text-2xl font-bold text-gray-900 sm:text-left sm:text-3xl md:text-4xl">
            Publication of PT Info Tekno Siaga Consumer Complaints
          </h2>
          <div className="bg-white">
            <div className="bg-custom-green3 px-6 py-3">
              <span className="font-inter text-sm font-medium">
                View Attachment
              </span>
            </div>
            <div className="flex flex-col">
              {publications.map((item) => (
                <ImageModal
                  key={item.year}
                  imageSrc={item.imageSrc}
                  altText={`Consumer Complaint Publication ${item.year}`}
                  modalTitle={`Publication of PT Info Tekno Siaga Consumer Complaints ${item.year}`}
                >
                  {/* Ini adalah pemicu yang akan ditampilkan di dalam ImageModal */}
                  <div className="flex items-center gap-2.5 border-b border-gray-200 px-6 py-3 text-gray-500 transition-colors duration-200 hover:bg-[#e2e7f0] hover:text-gray-900">
                    <IconImage />
                    <span className="font-inter text-sm font-medium">
                      Publication of PT Info Tekno Siaga Consumer Complaints {item.year}
                    </span>
                  </div>
                </ImageModal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
