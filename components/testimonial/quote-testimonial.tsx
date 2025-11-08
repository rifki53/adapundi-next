import React from 'react';

const QuoteTestimonial = () => {
  return (
    <section className="relative bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-2xl">
            {/* Judul */}
            <h2 className="text-gray-800 text-4xl font-bold leading-[45px] text-center mb-12">
              Tanggung Jawab Sosial Lingkungan
            </h2>

            {/* Kutipan */}
            <blockquote className="text-xl font-normal italic text-center mb-8">
              "Melalui program CSR,
              <br />
              Adapundi ingin membuktikan bahwa inovasi teknologi keuangan dapat
              berjalan beriringan dengan tanggung jawab sosial dan keberlanjutan
              lingkungan."
            </blockquote>

            {/* Author */}
            <p className="text-black text-xl font-normal leading-[35px] text-center">
              ACHMAD INDRAWAN, DIREKTUR UTAMA ADAPUNDI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteTestimonial;
