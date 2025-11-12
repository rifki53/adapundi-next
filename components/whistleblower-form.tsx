// components/WhistleblowerForm.tsx
"use client";

import type { FC } from "react";

const WhistleblowerForm: FC = () => {
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto py-8 md:py-14 px-4 sm:px-6">
        <div className="w-full max-w-5xl mx-auto bg-white p-6 sm:p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 italic">
              Formulir Laporan Whistleblower
            </h1>
            <p className="mt-2 text-md text-gray-600">
              Silakan isi formulir di bawah ini. Kami menjamin kerahasiaan
              identitas Anda.
            </p>
          </div>

          {/* --- Bagian Iframe dengan Border Atas & Bawah --- */}
          <div className="my-6 py-4 border-y border-gray-200">
            {/* Container untuk menjaga rasio aspek iframe */}
            <div
              className="relative w-full overflow-hidden"
              style={{ paddingTop: "150%" }}
            >
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSevDuVPDtl1iFqeZEK_Qfvcu_852xgdaITaSwG3ZnwUQnqXhg/viewform?embedded=true"
                className="absolute top-0 left-0 w-full h-full"
                title="Formulir Laporan Whistleblower" // Menambahkan atribut title untuk aksesibilitas
              >
                Loading…
              </iframe>
            </div>
          </div>

          <p className="mt-4 text-xs text-center text-gray-500">
            Jika formulir tidak tampil, Anda bisa mengaksesnya{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSevDuVPDtl1iFqeZEK_Qfvcu_852xgdaITaSwG3ZnwUQnqXhg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              di sini
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhistleblowerForm;
