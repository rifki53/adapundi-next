const DisclaimerRiplay = () => {
  return (
    <section className="relative bg-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="rounded-lg p-6">
          {/* Section Header */}
          <h2 className="text-center md:text-left text-gray-900 text-3xl sm:text-4xl font-bold font-montserrat mb-8 sm:mb-10">
            Disclaimer
          </h2>

          {/* Disclaimer Text */}
          <div className="text-gray-900 text-lg sm:text-xl font-normal font-montserrat leading-relaxed">
            <ol className="list-decimal pl-8 space-y-6">
              <li>
                Informasi yang tercakup dalam RIPLAY Umum ini adalah ketentuan
                terbaru sampai dengan diterbitkannya RIPLAY Umum yang lebih
                baru, dan Adapundi berhak memperbarui informasi yang tercantum
                pada RIPLAY Umum ini sewaktu-waktu.
              </li>
              <li>
                RIPLAY Umum ini hanya digunakan sebagai referensi untuk
                memberikan penjelasan mengenai produk pinjaman tunai dan bukan
                merupakan suatu perjanjian pinjaman yang mengikat.
              </li>
              <li>
                Pengguna wajib membaca dan memahami ketentuan ini. Pengguna
                memiliki hak untuk menghubungi Adapundi untuk bertanya terkait
                ketentuan ini.
              </li>
              <li>
                Adapundi berhak menolak permohonan Pengguna atas pengajuan
                pinjaman dana tunai apabila tidak memenuhi persyaratan dan
                peraturan yang berlaku.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerRiplay;
