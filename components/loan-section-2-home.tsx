import Image from 'next/image';
import Link from 'next/link';

// Impor gambar yang dibutuhkan
import heroImage2 from '@/public/images/hero-image/hero-2.png';

export default function LoanSection2Home() {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-6xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6">
        {/* Urutan dibalik di mobile (flex-col-reverse), gambar di kanan di desktop (md:flex-row) */}
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8 p-4 sm:p-6">
          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">
            <h2 className="h2 text-center md:text-left">
              Lebih Ringan, Atur<br />
              Sesuai Kebutuhan
            </h2>
            <div className="space-y-4">
              <p className="p">
                Mulai dari kebutuhan rumah tangga hingga bisnis, Adapundi hadir
                untuk menemani Anda dengan menyediakan pinjaman yang aman dan
                nyaman bagi pengguna.
              </p>
              <p className="p">
                Adapundi berperan aktif dalam mendukung kebutuhan finansial jutaan
                pelanggan, mendorong inklusi keuangan, dan mempercepat pertumbuhan
                ekonomi nasional.
              </p>
            </div>
            <Link
              href="/testimonial"
              className="bg-custom-green text-white font-bold text-sm text-center py-2.5 px-4 rounded-[10px] w-full md:w-fit hover:bg-[#0fb933] transition-colors"
            >
              TEMUKAN INSPIRASI
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              className="w-full rounded-[10px] object-cover lg:h-full"
              src={heroImage2}
              alt="Layanan Adapundi"
              placeholder="blur" // Optional
            />
          </div>
        </div>
      </div>
    </section>
  );
}
