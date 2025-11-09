"use client";

import Accordion from "@/components/accordion"; // Pastikan path import benar

const faqs01 = {
  title: "Tentang Adapundi",
  items: [
    {
      question: "Apa itu Adapundi?",
      answer:
        "PT. Info Tekno Siaga (Adapundi) adalah perusahaan pendanaan berbasis teknologi yang telah terdaftar dan diawasi OJK. Berdiri sejak tahun 2021, diunduh lebih dari 10 juta penguna di PlayStore dan App store dengan banyak ulasan positif.\nAdapundi berkomitmen untuk selalu ada bagi mereka yang membutuhkan bantuan dana sementara dengan memberikan akses kemudahan, cepat dan menetapkan standar tertinggi dalam perlindungan dan kerahasian data nasabah.",
      active: false,
    },
    {
      question: "Apakah Adapundi terdaftar OJK?",
      answer:
        "Adapundi telah terdaftar dan diawasi Otoritas Jasa Keuangan (OJK) dengan nomor KEP-48/D/05/2021 tanggal 2 Juni 2021.",
      active: false,
    },
    {
      question:
        "Berapa limit dan tenor pinjaman yang bisa diajukan di Adapundi?",
      answer:
        "Produk pinjaman Adapundi memiliki limit pinjaman mulai dari Rp100.000 hingga Rp100.000.000, dengan tenor 30 sampai dengan 360 hari. Bunga pinjaman berkisar antara 0,03% hingga 0,3% per hari.",
      active: false,
    },
  ],
};

const faqs02 = {
  title: "Pengajuan dan Pencairan Pinjaman",
  items: [
    {
      question: "Bagaimana cara mengajukan pinjaman di Adapundi?",
      answer:
        'Cara mengajukan pinjaman di Adapundi:\n1. Download Aplikasi Adapundi di Google Play Store atau App Store\n2. Klik "Dapatkan Limit"\n3. Masukkan no HP aktif dan klik tombol Daftar/Masuk\n4. Pilih metode verifikasi, isi kode OTP lalu buat kata sandi\n5. Setelah berhasil login, klik tombol "Pinjam Sekarang"\n6. Lengkapi data dengan benar: Informasi pribadi, Informasi pekerjaan, Informasi kontak, dan Unggah foto KTP dan foto diri\n7. Jika pengajuan limit Anda lolos, Anda akan mendapatkan limit pinjaman\n8. Tentukan limit dan jangka waktu pengembalian, lalu masukan rekening bank Anda,\n9. Klik tombol "Cairkan Dana Sekarang"\n10. Setelah proses verifikasi berhasil, Anda dapat tanda tangan dokumen Perjanjian Pendanaan.\n11. Pinjaman Anda akan segera cair.',
      active: false,
    },
    {
      question: "Apa saja persyaratan untuk mengajukan pinjaman?",
      answer:
        "Syarat untuk mengajukan pinjaman di Adapundi :\n1. Berkewarganegaraan Indonesia dan memiliki KTP yang sah.\n2. Berusia 18-64 tahun.\n3. Memiliki nomor ponsel yang aktif.\n4. Memiliki sumber pendapatan tetap.",
      active: false,
    },
    {
      question: "Mengapa pengajuan pinjaman saya ditolak?",
      answer:
        "Mohon maaf, berdasarkan hasil analisis risiko kami, permohonan pinjaman Anda belum disetujui. Pastikan data akurat dan skor kredit memadai. Harap cek secara berkala melalui aplikasi Adapundi untuk informasi lebih lanjut.\nPengajuan pinjaman yang ditolak didasarkan pada hasil evaluasi internal, termasuk analisis data dan penilaian risiko kredit. Pastikan informasi yang Anda berikan lengkap, akurat, dan sesuai, serta memiliki riwayat kredit yang baik. Silakan cek aplikasi Adapundi secara berkala untuk melihat informasi lebih lanjut.",
      active: false,
    },
    {
      question: "Bagaimana cara melihat status pinjaman di Adapundi?",
      answer:
        'Silakan klik "Saya", kemudian klik pada "Pinjaman Saya" untuk melihat status riwayat pinjaman. Klik nilai pinjaman untuk memeriksa informasi pinjaman.',
      active: false,
    },
    {
      question: "Apakah bisa membatalkan pinjaman yang sudah dicairkan?",
      answer:
        "Pinjaman yang sudah berhasil dicairkan melalui Adapundi tidak dapat dibatalkan. Segala jenis tawaran atau bantuan apapun untuk melakukan pengembalian dana yang sudah cair dapat dipastikan adalah penipuan.",
      active: false,
    },
  ],
};

const faqs03 = {
  title: "Pembayaran",
  items: [
    {
      question: "Bagaimana cara melakukan pembayaran pinjaman Adapundi?",
      answer:
        'Adapundi akan melakukan panggilan dan mengirimkan SMS ke nomor ponsel yang didaftarkan di Adapundi pada hari sebelum jatuh tempo pembayaran untuk mengingatkan pembayaran. Anda dapat mengecek kode Virtual Account pembayaran melalui aplikasi, kemudian melakukan pembayaran melalui Alfamart atau ATM, Internet Bank, Mobile Banking dari bank-bank ternama.\nPastikan untuk membayar sesuai dengan Virtual account pembayaran yang hanya tertera di aplikasi. Setelah transfer berhasil, Aplikasi Adapundi akan secara otomatis memperbaharui pembayaran Anda pada sistem. Pelunasan awal diizinkan oleh Adapundi, serta dapat menambahkan kualitas riwayat pinjaman Anda.\nCara Melakukan Pembayaran Pinjaman di Adapundi:\n1. Klik "Bayar" pada halaman utama atau melalui menu Pembayaran.\n2. Pilih metode pembayaran, lalu salin kode Virtual Account (VA).\n3. Lakukan pembayaran melalui ATM, Internet Banking, Mobile Banking, atau Alfamart.\nPastikan melakukan pembayaran menggunakan kode VA yang diakses dari aplikasi Adapundi.\nJangan melakukan pembayaran melalui QRIS, VA atau nomor rekening yang dikirimkan lewat WhatsApp atau akun non-resmi Adapundi.',
      active: false,
    },
    {
      question: "Bagaimana cara mendapatkan kode pelunasan?",
      answer:
        'Silakan menuju halaman depan "Pinjaman" - klik "Bayar" - pilih metode pembayaran untuk melihat kode VA pelunasan.',
      active: false,
    },
  ],
};

const faqs04 = {
  title: "Akun",
  items: [
    {
      question: "Apa yang harus dilakukan jika tidak mendapatkan OTP?",
      answer:
        "Berikut hal-hal yang mungkin menyebabkan Anda tidak mendapatkan Kode Verifikasi:\n1. Nomor ponsel dalam masa tenggang\n2. Kendala pada jaringan provider\nBeberapa langkah yang Anda bisa lakukan jika tidak menerima kode OTP:\n1. Klik “Dapatkan Kode” kembali setelah 15 menit tidak terima dan tunggu,\n2. Jika masih belum mendapatkan kode, cabut kartu perdana dari ponsel (dalam kondisi menyala. lebih aman jika dalam Airplane Mode), kemudian matikan ponsel beberapa saat, dan hidupkan lagi. Setelah ponsel diaktifkan kembali, masukan lagi kartu perdana dan lakukan permintaan kode OTP, atau\n3. Cabut kartu perdana yang Anda pakai, kemudian untuk sementara Anda pindahkan ke ponsel lain. Lalu, lakukan permintaan kode OTP melalui/ke nomor Anda di ponsel tersebut,\n4. Jika beberapa hal di atas tidak bekerja, mohon mencoba kembali ketika koneksi penyedia SMS baik. Jika Anda masih mengalami masalah, silakan hubungi layanan pelanggan di cs@adapundi.com.",
      active: false,
    },
    {
      question:
        "Bagaimana jika perangkat yang saya gunakan hilang, apa yang harus saya lakukan?",
      answer:
        "Kami turut sedih atas kejadian yang Anda alami. Silakan kontak kami di cs@adapundi.com atau hubungi Layanan Pengaduan kami di 021-50860666 untuk untuk membekukan akun Anda supaya terhindar dari penyalahgunaan akun oleh pihak yang tidak bertanggung jawab.",
      active: false,
    },
  ],
};

const faqs05 = {
  title: "Tips Keamanan",
  items: [
    {
      question:
        "Bagaimanakah cara untuk mengecek keaslian informasi terkait Adapundi?",
      answer:
        "Untuk memverifikasi informasi yang kamu dapatkan, kamu dapat menghubungi nomor resmi layanan pelanggan di (021)50860666, chat dalam aplikasi, atau sosial media Adapundi di Instagram, Facebook, dan Tiktok yaitu adapundi_official_id yang memiliki lencana verifikasi.",
      active: false,
    },
    {
      question:
        "Apa yang harus dilakukan jika saya menerima tawaran bantuan pencairan pinjaman?",
      answer:
        "Pihak Adapundi tidak pernah menjanjikan adanya bantuan pencairan pinjaman yang dilakukan di luar dari aplikasi Adapundi. Mohon untuk memastikan menerima informasi hanya dari saluran komunikasi resmi Adapundi yang tertera di atas.",
      active: false,
    },
    {
      question:
        "Apakah saya akan dikenakan biaya saat melakukan proses pengaduan di Adapundi?",
      answer:
        "Adapundi tidak mengenakan biaya apa pun kepada pengguna atas pelayanan pengaduan. Biaya yang timbul saat menghubungi tim layanan pengaduan seperti tarif telepon seluler atau kuota internet tidak ditanggung oleh pihak Adapundi.",
      active: false,
    },
    {
      question:
        "Bagaimana jika perangkat yang saya gunakan hilang, apa yang harus saya lakukan?",
      answer:
        "Kami turut sedih atas kejadian yang Anda alami. Silakan kontak kami di cs@adapundi.com atau hubungi Layanan Pengaduan kami di 021-50860666 untuk untuk membekukan akun Anda supaya terhindar dari penyalahgunaan akun oleh pihak yang tidak bertanggung jawab.",
      active: false,
    },
  ],
};

const faqs06 = {
  title: "Layanan Pengaduan",
  items: [
    {
      question: "Bagaimana jika saya mengalami masalah terkait aplikasi?",
      answer:
        "Anda bisa menghubungi Layanan Pengaduan Online Adapundi Setiap setiap hari pukul 08:00-20.00 melalui:\n\n- Live chat aplikasi\n- Telepon: (021) 50860666\n- Whatsapp: 0812-99925778\n- Email: cs@adapundi.com\n- Instagram: @adapundi_official_id\n- Facebook: @adapundi_official_id\n- Tiktok: @adapundi_official_id\n\nAtau mengunjungi Layanan Pengaduan Langsung Adapundi pada hari kerja pukul 09.00-17.00 di alamat:\n\n- Kantor Pengaduan Adapundi: Jl. Bungur Besar Raya No.29 RT.11/RW.2, Gn. Sahari Sel., Kec. Kemayoran, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10610\n\nTim kami akan dengan senang hati membantu Anda!",
      active: true,
    },
  ],
};
const GeneralQuestionsFaq = () => {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        <div className="pb-12 md:pb-20 py-14">
          <div className="space-y-12">
            {/* Faq 1 */}
            <div className="grid grid-cols-12 gap-8 md:gap-8 sm:gap-y-6 xs:gap-y-6">
              <div className="col-span-12 md:col-span-3">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">
                  {faqs01.title}
                </h2>
              </div>
              <div className="col-span-12 md:col-span-9">
                <div className="space-y-2">
                  {faqs01.items.map((faq, index) => (
                    <Accordion
                      key={`faqs-01-${index}`}
                      title={faq.question}
                      id={`faqs-01-${index}`}
                      active={faq.active}
                    >
                      <div className="whitespace-pre-line">{faq.answer}</div>
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>

            {/* Faq 2 */}
            <div className="grid grid-cols-12 gap-8 md:gap-8 sm:gap-y-6 xs:gap-y-6">
              <div className="col-span-12 md:col-span-3">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">
                  {faqs02.title}
                </h2>
              </div>
              <div className="col-span-12 md:col-span-9">
                <div className="space-y-2">
                  {faqs02.items.map((faq, index) => (
                    <Accordion
                      key={`faqs-02-${index}`}
                      title={faq.question}
                      id={`faqs-02-${index}`}
                      active={faq.active}
                    >
                      <div className="whitespace-pre-line">{faq.answer}</div>
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>

            {/* Faq 3 */}
            <div className="grid grid-cols-12 gap-8 md:gap-8 sm:gap-y-6 xs:gap-y-6">
              <div className="col-span-12 md:col-span-3">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">
                  {faqs03.title}
                </h2>
              </div>
              <div className="col-span-12 md:col-span-9">
                <div className="space-y-2">
                  {faqs03.items.map((faq, index) => (
                    <Accordion
                      key={`faqs-03-${index}`}
                      title={faq.question}
                      id={`faqs-03-${index}`}
                      active={faq.active}
                    >
                      <div className="whitespace-pre-line">{faq.answer}</div>
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>

            {/* Faq 4 */}
            <div className="grid grid-cols-12 gap-8 md:gap-8 sm:gap-y-6 xs:gap-y-6">
              <div className="col-span-12 md:col-span-3">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">
                  {faqs04.title}
                </h2>
              </div>
              <div className="col-span-12 md:col-span-9">
                <div className="space-y-2">
                  {faqs04.items.map((faq, index) => (
                    <Accordion
                      key={`faqs-04-${index}`}
                      title={faq.question}
                      id={`faqs-04-${index}`}
                      active={faq.active}
                    >
                      <div className="whitespace-pre-line">{faq.answer}</div>
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>

            {/* Faq 5 */}
            <div className="grid grid-cols-12 gap-8 md:gap-8 sm:gap-y-6 xs:gap-y-6">
              <div className="col-span-12 md:col-span-3">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">
                  {faqs05.title}
                </h2>
              </div>
              <div className="col-span-12 md:col-span-9">
                <div className="space-y-2">
                  {faqs05.items.map((faq, index) => (
                    <Accordion
                      key={`faqs-05-${index}`}
                      title={faq.question}
                      id={`faqs-05-${index}`}
                      active={faq.active}
                    >
                      <div className="whitespace-pre-line">{faq.answer}</div>
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>

            {/* Faq 6 */}
            <div className="grid grid-cols-12 gap-8 md:gap-8 sm:gap-y-6 xs:gap-y-6">
              <div className="col-span-12 md:col-span-3">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">
                  {faqs06.title}
                </h2>
              </div>
              <div className="col-span-12 md:col-span-9">
                <div className="space-y-2">
                  {faqs06.items.map((faq, index) => (
                    <Accordion
                      key={`faqs-06-${index}`}
                      title={faq.question}
                      id={`faqs-06-${index}`}
                      active={faq.active}
                    >
                      <div className="whitespace-pre-line">{faq.answer}</div>
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralQuestionsFaq;
