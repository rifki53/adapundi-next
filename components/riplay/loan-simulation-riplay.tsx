const LoanSimulationRiplay = () => {
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Section Header */}
        <h2 className="text-center md:text-left text-gray-900 text-3xl sm:text-4xl font-bold font-montserrat mb-8 sm:mb-12">
          Simulasi Pinjaman
        </h2>

        {/* Simulation Box */}
        <div className="bg-custom-orange rounded-3xl p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Left Column - 90 Days Simulation */}
            <div>
              <h3 className="text-gray-900 text-xl font-bold font-montserrat mb-6">
                Simulasi menggunakan contoh tenor 90 hari dengan suku bunga 0,3%
              </h3>
              <div className="space-y-4">
                <ul className="list-disc pl-8 space-y-3">
                  <li className="text-lg sm:text-xl font-montserrat">
                    <span className="font-medium">
                      Nilai uang yang diterima Penerima Dana:{" "}
                    </span>
                    <span className="font-bold">Rp1.000.000</span>
                  </li>
                  <li className="text-lg sm:text-xl font-montserrat">
                    <span className="font-medium">
                      Suku bunga pinjaman 9% per bulan:{" "}
                    </span>
                    <span className="font-bold">Rp90.000</span>
                  </li>
                  <li className="text-lg sm:text-xl font-montserrat">
                    <span className="font-medium">
                      Nilai uang yang harus dikembalikan dalam 90 hari:{" "}
                    </span>
                    <span className="font-bold">Rp1.270.000</span>
                  </li>
                  <li className="text-lg sm:text-xl font-montserrat">
                    <span className="font-medium">
                      Estimasi nilai cicilan per bulan:{" "}
                    </span>
                    <span className="font-bold">Rp423.000</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - 270 Days Simulation */}
            <div>
              <h3 className="text-gray-900 text-xl font-bold font-montserrat mb-6">
                Simulasi menggunakan contoh tenor 270 hari dengan suku bunga
                0,2%
              </h3>
              <div className="space-y-4">
                <ul className="list-disc pl-8 space-y-3">
                  <li className="text-lg sm:text-xl font-montserrat">
                    <span className="font-medium">
                      Nilai uang yang diterima Penerima Dana:{" "}
                    </span>
                    <span className="font-bold">Rp1.000.000</span>
                  </li>
                  <li className="text-lg sm:text-xl font-montserrat">
                    <span className="font-medium">
                      Suku bunga pinjaman 6% per bulan:{" "}
                    </span>
                    <span className="font-bold">Rp60.000</span>
                  </li>
                  <li className="text-lg sm:text-xl font-montserrat">
                    <span className="font-medium">
                      Nilai uang yang harus dikembalikan dalam 270 hari:{" "}
                    </span>
                    <span className="font-bold">Rp1.540.000</span>
                  </li>
                  <li className="text-lg sm:text-xl font-montserrat">
                    <span className="font-medium">
                      Estimasi nilai cicilan per bulan:{" "}
                    </span>
                    <span className="font-bold">Rp171.000</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanSimulationRiplay;
