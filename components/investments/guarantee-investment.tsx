import Image from "next/image";

// 1. Import semua gambar regulator di bagian atas
import Afpi from '@/public/images/regulator/reg-1.png';
import Laps from '@/public/images/regulator/reg-2.png';
import Ojk from '@/public/images/regulator/reg-3.png';
import Tuv from '@/public/images/regulator/reg-5.png';

// 2. Definisikan data sebagai array konstan di luar komponen
const regulators = [
  {
    img: Ojk,
    alt: 'OJK Regulator',
    title: 'Berizin dan diawasi oleh',
    imgClass: 'object-contain flex-shrink-0 h-[2.5rem] md:h-[4rem]',
  },
  {
    img: Afpi,
    alt: 'AFPI Regulator',
    title: 'Terdaftar dalam',
    imgClass: 'object-contain flex-shrink-0 h-[2.5rem] md:h-[4rem]',
  },
  {
    img: Tuv,
    alt: 'TUV Regulator',
    title: 'Tersertifikasi dengan',
    imgClass: 'object-contain flex-shrink-0 h-[3.5rem] md:h-[5rem]',
  },
  {
    img: Laps,
    alt: 'LAPS Regulator',
    title: 'Anggota dari',
    imgClass: 'object-contain flex-shrink-0 h-[3.5rem] md:h-[5rem]',
  },
];

const GuaranteeInvestment = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main container */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left">
            {/* Top Content */}
            <div className="mb-8 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-black mb-4 md:mb-6">
                Aman & Terjamin
              </h2>
              <p className="text-base md:text-lg font-roboto text-black">
                Adapundi hadir sebagai aplikasi pinjaman daring terpercaya.
                Layanan pinjaman Adapundi telah terdaftar dan diatur secara resmi
                sesuai standar, untuk memastikan setiap transaksi berjalan dengan
                aman dan transparan.
              </p>
            </div>

            {/* Bottom Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold font-roboto text-black">
                  Memiliki Izin Resmi
                </h3>
                <p className="text-sm md:text-base font-roboto text-black">
                  Adapundi memastikan setiap layanan berjalan sesuai regulasi
                  dengan pengawasan langsung oleh OJK.
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold font-roboto text-black">
                  Transaksi Aman
                </h3>
                <p className="text-sm md:text-base font-roboto text-black">
                  Nikmati proses pinjaman transparan dan terpercaya, dengan
                  jaminan keamanan di setiap langkah.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (Logos) */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 h-full">
              {/* 3. Gunakan .map() untuk me-render daftar regulator */}
              {regulators.map((regulator, index) => (
                <div
                  key={index}
                  className="flex bg-gray-200 md:bg-transparent items-center justify-between p-4 rounded-lg md:flex-col md:justify-center md:text-center"
                >
                  <p className="text-sm text-gray-800 font-medium mr-2 md:mr-0 md:mb-2">
                    {regulator.title}
                  </p>
                  <Image
                    src={regulator.img}
                    alt={regulator.alt}
                    className={regulator.imgClass}
                    priority={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeInvestment;
