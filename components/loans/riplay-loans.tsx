// 1. Impor gambar di bagian atas file
import punpunHello from "@/public/images/punpun/Hello.png";

import Image from "next/image";
import BaseButton from "@/components/base-button";

const RiplayLoans = () => {
  return (
    <section className="relative bg-custom-green">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row">
          {/* Left Content Side */}
          <div className="w-full md:w-1/2 py-6 my-6">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white leading-tight mb-6">
                Ringkasan Informasi Produk dan Layanan
              </h2>
              <p className="text-base md:text-lg font-normal font-roboto text-white leading-relaxed mb-8">
                Baca informasi lebih lanjut mengenai pinjaman Adapundi
              </p>

              <BaseButton
                to="/riplay"
                title="Pelajari Sekarang"
                marginClass=""
              />
            </div>
          </div>

          {/* Right Image Side */}
          <div className="hidden md:block w-full md:w-1/2 justify-items-end">
            {/* 2. Gunakan variabel gambar yang sudah diimpor di prop 'src' */}
            <Image
              src={punpunHello}
              alt="Icon punpun"
              placeholder="blur" // Opsi bagus untuk gambar statis
              className="h-[20rem] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiplayLoans;
