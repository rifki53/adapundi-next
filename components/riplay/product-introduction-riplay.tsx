const ProductIntroductionRiplay = () => {
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="relative overflow-hidden">
          {/* Header Bagian */}
          <h2 className="text-center md:text-left text-gray-900 text-3xl sm:text-4xl font-bold mb-6">
            Pengenalan Produk
          </h2>

          {/* Kotak Fitur */}
          <div className="bg-custom-green3 rounded-3xl p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
              {/* Kolom Kiri - Fitur Utama */}
              <div className="flex flex-col">
                <h3 className="text-gray-900 text-xl font-bold mb-6">
                  Fitur utama produk Pendanaan Adapundi di antaranya:
                </h3>
                <ul className="text-lg sm:text-xl font-medium space-y-4 list-disc pl-6 h-full">
                  <li>
                    Limit Pendanaan yang dapat dipilih mulai dari{" "}
                    <span className="font-bold">Rp100.000</span> hingga{" "}
                    <span className="font-bold">Rp100.000.000</span>
                  </li>
                  <li>
                    Bunga maksimal <span className="font-bold">0,3%</span> per
                    hari
                  </li>
                  <li>
                    PPN sebesar <span className="font-bold">11%</span>
                  </li>
                </ul>
              </div>

              {/* Kolom Kanan - Opsi Tenor */}
              <div className="flex flex-col">
                <h3 className="text-gray-900 text-xl font-bold mb-6">
                  Tenor produk Pendanaan yang tersedia saat ini di antaranya:
                </h3>
                <ul className="text-lg sm:text-xl font-medium space-y-4 list-disc pl-6 h-full">
                  <li>90 hari dengan tenor 30x3</li>
                  <li>120 hari dengan tenor 30x4</li>
                  <li>180 hari dengan tenor 30x6</li>
                  <li>270 hari dengan tenor 30x9</li>
                  <li>360 hari dengan tenor 30x12</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntroductionRiplay;
