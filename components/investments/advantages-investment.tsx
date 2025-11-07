import Image from 'next/image';

// 1. Impor semua aset gambar yang akan digunakan secara statis
// Sesuaikan path ini dengan struktur folder Anda.
import iconKeuntungan from '@/public/images/icon/convert.png';
import iconPengguna from '@/public/images/icon/planet.png';
import iconRisiko from '@/public/images/icon/bars.png';

// 2. Definisikan data fitur dalam sebuah array konstan
const advantages = [
  {
    imgSrc: iconKeuntungan,
    imgAlt: 'Potensi Keuntungan Icon',
    title: 'Keuntungan Kompetitif',
    description: 'Imbal hasil kompetitif dikelola dengan baik serta akuntabel.',
  },
  {
    imgSrc: iconPengguna,
    imgAlt: 'Basis Pengguna Icon',
    title: 'Basis Pengguna Luas',
    description: 'Adapundi telah menjadi pilihan jutaan pengguna di Indonesia.',
  },
  {
    imgSrc: iconRisiko,
    imgAlt: 'Manajemen Risiko Icon',
    title: 'Risiko Terkendali',
    description: 'Kami membantu meminimalisir NPL (Non-Performing Loan).',
  },
];

const AdvantagesInvestment = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-16 text-center md:text-left">
          Keunggulan Pendanaan
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12">
          {/* Looping melalui array 'advantages' menggunakan .map() */}
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex flex-row items-start gap-4 lg:flex-col lg:items-center lg:text-center"
            >
              <Image
                src={advantage.imgSrc}
                alt={advantage.imgAlt}
                className="w-[6.5rem] h-auto flex-shrink-0 object-contain"
                // 'loading' prop tidak diperlukan karena Next/Image menanganinya secara otomatis
              />
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {advantage.title}
                </h3>
                <p className="text-base font-medium text-black">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesInvestment;
