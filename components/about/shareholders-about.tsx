const ShareholdersAbout = () => {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center sm:text-left">
          Pemegang Saham
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="rounded-xl overflow-hidden bg-white shadow-md">
            {/* Content Section */}
            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-sans text-gray-800">
                Digital Technologies HK Limited
              </h3>
              <p className="text-sm sm:text-base text-gray-500 font-medium">
                Digital Technologies HK Limited (DTL HK) merupakan perusahaan
                investasi yang berlokasi di Hongkong. Potensi pasar yang besar dan
                positif di Indonesia menjadi alasan utama DTL HK berinvestasi
                sekaligus mendorong pertumbuhan ekonomi melalui bisnis Fintech
                pendanaan.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl overflow-hidden bg-white shadow-md">
            {/* Content Section */}
            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-sans text-gray-800">
                PT Info Tekno Selaras
              </h3>
              <p className="text-sm sm:text-base text-gray-500 font-medium font-montserrat">
                PT Info Tekno Selaras (PT ITSelaras) merupakan perusahaan
                investasi yang berlokasi di Indonesia, bergerak pada bidang
                pengembangan aset dan konsultasi, khususnya untuk perusahaan
                dengan bidang keuangan dan manajemen. solusi strategis bisnis di
                sektor keuangan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareholdersAbout;
