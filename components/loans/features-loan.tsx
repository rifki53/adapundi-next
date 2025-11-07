import Image from 'next/image';

// 1. Impor semua aset gambar yang akan digunakan (sama seperti sebelumnya)
import iconProses from '@/public/images/icon/nate-2.png';
import iconLimit from '@/public/images/icon/calcu.png';
import iconCepat from '@/public/images/icon/clock.png';
import iconRingan from '@/public/images/icon/interest.png';

// 2. Definisikan data fitur sebagai array konstan
const featuresData = [
  {
    imgSrc: iconProses,
    imgAlt: 'Proses Pengajuan Icon',
    title: 'Proses Pengajuan Mudah',
    description: 'Pengajuan pinjaman hanya butuh nomor HP dan KTP.',
  },
  {
    imgSrc: iconLimit,
    imgAlt: 'Limit Pinjaman Icon',
    title: 'Limit Pinjaman Tinggi',
    description: 'Pinjaman tanpa jaminan, limit hingga Rp100 juta.',
  },
  {
    imgSrc: iconCepat,
    imgAlt: 'Pencairan Dana Icon',
    title: 'Pencairan Dana Cepat',
    description: 'Dalam hitungan menit dana cair langsung ke rekening.',
  },
  {
    imgSrc: iconRingan,
    imgAlt: 'Cicilan Bulanan Icon',
    title: 'Cicilan Bulanan Ringan',
    description: 'Bunga harian mulai dari 0,03% tenor hingga 12 bulan.',
  },
];

// 3. Buat komponen React
const FeaturesLoan = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="h2 mb-12 text-center text-gray-900 md:mb-16 md:text-left">
          Keunggulan Adapundi
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-2">
          {/* Ganti v-for dengan .map() */}
          {featuresData.map((feature, index) => (
            <div
              key={index} // key tetap penting untuk list rendering
              className="flex items-center gap-4 text-left md:gap-6"
            >
              {/* Gunakan komponen <Image> dari Next.js untuk performa */}
              <Image
                src={feature.imgSrc}
                alt={feature.imgAlt}
                className="h-24 w-24 flex-shrink-0 object-contain md:h-28 md:w-28"
                // loading="lazy" adalah default di Next.js Image, jadi tidak perlu ditulis
              />
              <div className="flex-1">
                <h4 className="h4 mb-2 font-bold text-black md:mb-3 md:text-[25px]">
                  {feature.title}
                </h4>
                <p className="text-base text-black md:text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesLoan;
