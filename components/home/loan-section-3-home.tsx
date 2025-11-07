import Image from 'next/image';
import Link from 'next/link';

// Impor gambar yang dibutuhkan
import heroImage3 from '@/public/images/hero-image/hero-3.png';

export default function LoanSection3Home() {
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 sm:p-6">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              className="w-full rounded-[10px] object-cover lg:h-full"
              src={heroImage3}
              alt="Keamanan Data Adapundi"
              placeholder="blur" // Optional
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">
            <h2 className="h2 text-center md:text-left">
              Keamanan Data Anda<br />
              Komitmen Utama Kami
            </h2>
            <div className="space-y-4">
              <p className="p">
                Adapundi memastikan perlindungan data terbaik dengan sertifikasi
                SNI ISO/IEC 27001:2022, standar tertinggi untuk sistem manajemen
                keamanan informasi.
              </p>
              <p className="text-base mt-2">
                HATI-HATI. TRANSAKSI INI BERISIKO TINGGI. ANDA DAPAT MENGALAMI
                KERUGIAN ATAU KEHILANGAN UANG. JANGAN BERUTANG JIKA TIDAK MEMILIKI
                KEMAMPUAN MEMBAYAR. PERTIMBANGKAN SECARA BIJAK SEBELUM
                BERTRANSAKSI.
              </p>
            </div>
            <Link
              href="/antifraud"
              className="bg-custom-green text-white font-bold text-sm text-center py-2.5 px-4 rounded-[10px] w-full md:w-fit hover:bg-[#0fb933] transition-colors"
            >
              CEK TIPSNYA
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
