import Image from "next/image";

// Impor gambar-gambar yang dibutuhkan
// Pastikan path ini sesuai dengan struktur folder proyek Anda
import bgImage from "@/images/bgslide/eclipse.png";
import icon1 from "@/images/icon/ic-1.png";
import icon2 from "@/images/icon/ic-2.png";
import icon3 from "@/images/icon/ic-3.png";
import icon4 from "@/images/icon/ic-4.png";

// Data untuk kartu fitur, sama seperti di Vue
const featureCards = [
  {
    id: 1,
    icon: icon1,
    title: "Limit Tinggi",
    description: "Dengan KTP Anda dapat meminjam hingga Rp100.000.000",
  },
  {
    id: 2,
    icon: icon4,
    title: "Bunga Rendah",
    description: "Nikmati bunga harian mulai 0,03% untuk ajukan pinjaman",
  },
  {
    id: 3,
    icon: icon3,
    title: "Tanpa Jaminan",
    description: "Tidak perlu jaminan dan syarat rumit untuk ajukan pinjaman",
  },
  {
    id: 4,
    icon: icon2,
    title: "Proses Cepat",
    description: "Online 24 jam, seluruh proses pengajuan cepat hanya 15 menit",
  },
];

// Definisikan komponen React
export default function FeaturesHome() {
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto pt-8 md:pt-14 px-4 sm:px-6 pb-14 md:pb-0">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8">
          <h2 className="h2 font-bold mb-4">Inklusi Finansial Untuk Semua</h2>
        </div>
        <div className="container mx-auto mt-5">
          {/* Mengganti v-for dengan .map() di JSX */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featureCards.map((card) => (
              <div key={card.id} className="text-center">
                <Image
                  src={card.icon}
                  alt="Icon"
                  className="mx-auto"
                  width={80}
                  height={70}
                  placeholder="blur" // Optional: untuk efek blur saat loading
                />
                <h3 className="mt-4 mb-3 text-gray-800 font-semibold">
                  {card.title}
                </h3>
                <p className="p text-gray-600 w-full px-2">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Statistics Section with Background */}
          <div className="hidden md:block relative mt-12 mx-auto w-[896px] h-[217px]">
            {/* Background Image Container */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${bgImage.src})`, // Menggunakan .src untuk objek gambar
              }}
            ></div>

            {/* Content Container */}
            <div className="relative h-full flex items-center">
              <div className="w-full px-16 md:px-32">
                <div className="flex flex-col items-center gap-4">
                  {/* Top Section */}
                  <div className="text-center mb-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      +97,7 JUTA
                    </h2>
                    <p className="text-base md:text-lg font-medium text-white">
                      <span className="text-white text-sm md:text-base">
                        Masyarakat
                        <span className="italic"> Unbankable </span> Terjangkau
                        <span className="relative group">
                          <span className="cursor-pointer">*</span>
                          <span className="absolute top-[-100%] left-full transform -translate-y-1/2 ml-3 w-max px-4 py-2 bg-black text-white text-sm rounded-t-xl rounded-br-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                            Data World Bank 2021
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>

                  {/* Bottom Section - Flex Row */}
                  <div className="flex flex-row justify-center gap-16 md:gap-24">
                    {/* First Stat */}
                    <div className="text-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        +3,6 JUTA ORANG
                      </h2>
                      <p className="text-base md:text-lg font-medium text-white">
                        <span className="text-white text-sm md:text-base">
                          Menggunakan Adapundi
                          <span className="relative group">
                            <span className="cursor-pointer">*</span>
                            <span className="absolute top-[-100%] left-full transform -translate-y-1/2 ml-3 w-max px-4 py-2 bg-black text-white text-sm rounded-t-xl rounded-br-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                              Data per Maret 2025
                            </span>
                          </span>
                        </span>
                      </p>
                    </div>
                    {/* Second Stat */}
                    <div className="text-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        +724 RIBU UMKM
                      </h2>
                      <p className="text-base md:text-lg font-medium text-white">
                        <span className="text-white text-sm md:text-base">
                          Menerima Permodalan
                          <span className="relative group">
                            <span className="cursor-pointer">*</span>
                            <span className="absolute top-[-100%] left-full transform -translate-y-1/2 ml-3 w-max px-4 py-2 bg-black text-white text-sm rounded-t-xl rounded-br-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                              Data per Maret 2025
                            </span>
                          </span>
                        </span>
                      </p>
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
}
