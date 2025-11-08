const VisionMission = () => {
  return (
    <section className="relative">
      <div className="flex flex-col md:flex-row">
        {/* Visi */}
        <div className="bg-custom-orange w-full md:w-[40%] flex">
          <div className="py-8 md:py-14 px-4 sm:px-6 max-w-xl mx-auto text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
              Visi Kami
            </h2>
            <p className="text-base sm:text-lg text-gray-900 mt-4">
              Menjadi penyedia solusi <br />
              keuangan taktis terdepan <br />
              bagi konsumen Indonesia.
            </p>
          </div>
        </div>

        {/* Misi */}
        <div className="bg-custom-green2 w-full md:w-[60%] flex">
          <div className="py-8 md:py-14 px-4 sm:px-6 max-w-xl mx-auto text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
              Misi Kami
            </h2>
            <div className="text-base sm:text-lg text-black space-y-4 mt-4">
              <p>
                1. Menjunjung tinggi hukum Republik Indonesia & regulasi Otoritas
                Jasa Keuangan; dan mewujudkannya dalam produk teknologi finansial
                yang aman, kredibel, transparan, dan mudah digunakan.
              </p>
              <p>
                2. Menyediakan solusi & pengalaman positif bagi produktivitas
                ekonomi konsumen, melalui metode analisa kelayakan pinjaman yang
                bersandar pada terapan terbaik teknologi informasi terkini.
              </p>
              <p>
                3. Secara berkala, melalui berbagai metode & sarana komunikasi;
                menyediakan pengetahuan finansial yang berdampak positif bagi
                pertumbuhan kecerdasan finansial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
