import Image from "next/image";
import BaseButton from "@/components/base-button"; // Pastikan path import ini benar

// Import gambar yang akan digunakan
import PunpunIcon from "@/public/images/punpun/Hello.png"; // Sesuaikan path ini dengan struktur folder Anda

const CtaInvestment = () => {
  return (
    <section className="relative bg-custom-green">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row">
          {/* Left Content Side */}
          <div className="w-full md:w-1/2 py-6 my-6">
            <div className="max-w-xl text-center md:text-left">
              <h2
                className="text-3xl md:text-4xl font-bold font-montserrat text-white leading-tight mb-6"
              >
                Siap Menjadi Partner Pendanaan?
              </h2>
              <p
                className="text-base md:text-lg font-normal font-roboto text-white leading-relaxed mb-8"
              >
                Hubungi tim kami untuk informasi lebih lanjut
              </p>

              {/* Button */}
              <BaseButton
                title="Hubungi Sekarang"
                to="mailto:bd@adapundi.com"
                external={true}
              />
            </div>
          </div>

          {/* Right Image Side - Hidden on mobile, visible on md and up */}
          <div className="hidden md:block w-full md:w-1/2 justify-items-end">
            {/* Menggunakan komponen Image dari Next.js untuk optimisasi */}
            <Image
              src={PunpunIcon}
              alt="Icon punpun"
              className="h-[20rem] object-contain"
              priority={false} // Sama dengan loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaInvestment;
