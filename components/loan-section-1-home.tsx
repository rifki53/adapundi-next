import Image from 'next/image';
import Link from 'next/link';

// Impor gambar yang dibutuhkan
// Pastikan path ini sesuai dengan struktur folder proyek Anda
import heroImage1 from '@/public/images/hero-image/hero-1.png';

export default function LoanSection1Home() {
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 sm:p-6">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              className="w-full rounded-[10px] object-cover lg:h-full"
              src={heroImage1}
              alt="Simulasi Pinjaman Adapundi"
              placeholder="blur" // Optional: untuk efek blur saat loading
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">
            <h2 className="h2 text-center md:text-left">
              Simulasi Pinjaman<br />
              Tenor 30 Hari
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="p font-bold mb-2">
                  Nilai Pengajuan Pinjaman Terendah
                </h3>
                <div className="text-black font-normal space-y-1 text-base">
                  <p>a) Nilai uang yang diterima Penerima Dana: Rp100.000</p>
                  <p>b) Nilai uang yang harus dikembalikan: Rp109.000</p>
                  <p>c) Total bunga: Rp9.000</p>
                  <p>d) Persentase total bunga per hari: 0,3%</p>
                </div>
              </div>
              <div>
                <h3 className="p font-bold mb-2">
                  Nilai Pengajuan Pinjaman Tertinggi
                </h3>
                <div className="text-black font-normal space-y-1 text-base">
                  <p>a) Nilai uang yang diterima Penerima Dana: Rp100.000.000</p>
                  <p>b) Nilai uang yang harus dikembalikan: Rp109.000.000</p>
                  <p>c) Total bunga: Rp9.000.000</p>
                  <p>d) Persentase total bunga per hari: 0,3%</p>
                </div>
              </div>
            </div>

            <Link
              href="/loans"
              className="bg-custom-green text-white font-bold text-sm text-center py-2.5 px-4 rounded-[10px] w-full md:w-fit hover:bg-[#0fb933] transition-colors"
            >
              HITUNG PINJAMAN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
