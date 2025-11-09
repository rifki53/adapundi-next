// Pastikan komponen AccordionAlt sudah ada dan diimpor dengan benar
import AccordionAlt from "@/components/accordion-alt";

const faqs01 = [
  {
    question: "Customer Service & Sosial Media Palsu",
    answer: `
    Ciri akun Adapundi asli:
•  Akun media sosial dengan username @adapundi_official_id telah terverifikasi (centang biru).
•  Email menggunakan domain perusahaan cs@adapundi.com.
•  Nomor CS resmi (021) 50860666.

Ciri akun Adapundi palsu:
•  Akun media sosial tidak terverifikasi (centang biru) dan username menyerupai Adapundi.
•  Email menggunakan domain gratis.
•  Nomor telepon CS di luar hotline resmi Adapundi dan menggunakan nomor pribadi.
`,
    active: false,
  },
  {
    question: "Pembatalan dan Pelunasan Pinjaman",
    answer: `• Menghubungi pengguna melalui akun palsu.
• Melakukan pendekatan untuk mengonfirmasi pengguna memiliki pinjaman di Adapundi.
• Menawarkan layanan pembatalan atau pelunasan untuk menaikan limit.
• Melakukan konfirmasi data pribadi, seperti nomor HP, PIN, KTP, atau nama ibu kandung.
• Meminta pengguna melakukan transfer dana ke rekening VA palsu mengatasnamakan Adapundi.

Pinjaman di Adapundi tidak bisa dibatalkan dan pelunasan hanya melalui aplikasi resmi. 
CS Adapundi tidak pernah meminta imbalan apa pun.`,
    active: false,
  },
  {
    question: "Pembayaran di Luar Aplikasi Adapundi",
    answer: `Penipu akan memberikan ancaman dan tekanan waktu tertentu agar segera mentransfer dana ke rekening mereka.

Modus ancaman seperti:
• Pihak berwenang akan mendatangi pengguna secara langsung.
• Data pribadi akan disebar dan disalahgunakan.
• Akun Adapundi telah diretas dan tersambung dengan perangkat lain.

Pastikan nomor VA resmi pembayaran pinjaman, cek aplikasi Adapundi, atau kontak CS resmi di nomor (021) 50860666.`,
    active: false,
  },
  {
    question: "Pencairan Dana Pinjaman Berulang",
    answer: `Penipu sering menginformasikan terjadi pencairan ganda di aplikasi dan meminta pengguna mentransfer kembali kelebihan dana menggunakan kode VA/ rekening yang diberikan melalui WhatsApp atau akun palsu yang menyerupai Adapundi.

Selalu cek mutasi penerimaan dana dan konfirmasi ke CS resmi Adapundi. Kerugian akibat penipuan menjadi tanggung jawab pengguna, dan pinjaman tetap harus dilunasi.`,
    active: false,
  },
  {
    question: "Tawaran Bonus atau Voucher Belanja",
    answer: `Penipu akan menginformasikan pengguna mendapatkan hadiah atau voucher dengan syarat transfer dana untuk pencairan.

Adapundi tidak pernah meminta pengguna mentransfer dana untuk klaim hadiah. Cek event dan promo hanya di aplikasi dan akun resmi Adapundi.`,
    active: false,
  },
];

const faqs02 = [
  {
    question: "Jaga Informasi Pribadi Kamu",
    answer: `Waspada terhadap siapa pun (termasuk: kerabat atau keluarga) yang mencoba meminta data pribadi seperti nomor HP, PIN, KTP, atau nama ibu kandung dengan alasan apa pun.`,
    active: false,
  },
  {
    question: "Jangan Pernah Memberikan Kode OTP",
    answer: `Kode OTP (One-Time Password) tidak boleh dibagikan kepada siapa pun, termasuk pihak yang mengatasnamakan Adapundi.`,
    active: false,
  },
  {
    question: "Akses Pinjaman Untuk Kerabat",
    answer: `Jangan menggunakan data pribadi untuk mengajukan pinjaman atas nama orang lain. Pengajuan dan pelunasan pinjaman adalah tanggung jawab pribadi; penggunaan data oleh pihak yang tidak bertanggungjawab bisa membahayakan reputasi keuangan dan keamanan data kamu.`,
    active: false,
  },
  {
    question: "Periksa Kode VA Pembayaran",
    answer: `Selalu periksa ulang informasi VA pembayaran di aplikasi.
Gunakan aplikasi resmi Adapundi untuk memverifikasi informasi, atau hubungi customer service melalui media sosial atau nomor telepon resmi.`,
    active: false,
  },
  {
    question: "Gunakan Password Unik & Aman",
    answer: `Gunakan password unik (kombinasi huruf kapital, angka, karakter) dan berbeda dengan platform lain, agar data tidak mudah dicuri atau disalahgunakan.`,
    active: false,
  },
];

const FraudPreventionAntifraud = () => {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-6 rounded-lg py-12">
          <h2 className="text-3xl font-bold text-center mb-8 pt-8">
            Tenang Hadapi TuTi pake Jurus PUNDI
            <br />
            (Perlindungan Diri)
          </h2>
          <p className="text-center mb-8">
            Modus penipuan makin marak terjadi, yuk lindungi diri dengan cara
            berikut:
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left column */}
          <div className="w-full md:w-1/2">
            <div className="py-12">
              <div className="pb-12 md:pb-20 px-2">
                <div className="max-w-3xl mx-auto space-y-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-5 text-center">
                      Kenali
                    </h2>
                    <div className="space-y-2">
                      {faqs01.map((faq, index) => (
                        <AccordionAlt
                          key={`faqs-01-${index}`}
                          title={faq.question}
                          id={`faqs-01-${index}`}
                          active={faq.active}
                        >
                          <div className="whitespace-pre-line">
                            {faq.answer}
                          </div>
                        </AccordionAlt>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="w-full md:w-1/2">
            <div className="py-12">
              <div className="pb-12 md:pb-20 px-2">
                <div className="max-w-3xl mx-auto space-y-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-5 text-center">
                      Cegah
                    </h2>
                    <div className="space-y-2">
                      {faqs02.map((faq, index) => (
                        <AccordionAlt
                          key={`faqs-02-${index}`}
                          title={faq.question}
                          id={`faqs-02-${index}`}
                          active={faq.active}
                        >
                          <div className="whitespace-pre-line">
                            {faq.answer}
                          </div>
                        </AccordionAlt>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FraudPreventionAntifraud;
