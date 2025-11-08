import Image from "next/image";

// Impor gambar dari direktori Anda.
// Pastikan path ini sesuai dengan struktur proyek Next.js Anda.
// Contoh: menempatkan gambar di dalam `src/assets/images`
import androidLogo from "@/public/images/download/android-cta-logo.png";
import iosLogo from "@/public/images/download/ios-cta-logo.png";
import punpunIcon from "@/public/images/punpun/Hello.png";

// Komponen ini tidak memerlukan "use client" karena tidak ada interaktivitas sisi klien.
const CtaTestimonial = () => {
  // Definisikan URL OneLink di dalam komponen
  const androidOneLinkUrl = "https://adapundi.onelink.me/cN17/em5uj56b";
  const iosOneLinkUrl = "https://adapundi.onelink.me/cN17/szh8qiwc";

  return (
    <section className="relative bg-custom-green">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row">
          {/* Left Content Side */}
          <div className="w-full md:w-4xl py-6 my-6 text-center md:text-left">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white leading-tight mb-6">
                Hidupkan Mimpi, <br />
                Jadi Inspirasi Bersama Adapundi
              </h2>
              <p className="text-base md:text-lg font-normal font-roboto text-white leading-relaxed mb-8">
                Download aplikasi Adapundi sekarang!
              </p>

              {/* Tombol Download */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  target="_blank"
                  // Menambahkan "nofollow" sesuai permintaan
                  rel="noopener noreferrer nofollow"
                  href={androidOneLinkUrl}
                  className="bg-white rounded-2xl p-3 flex justify-center items-center w-[183px]"
                >
                  <Image
                    src={androidLogo}
                    alt="Android Download"
                    // Width & height untuk optimasi Next.js
                    width={150}
                    height={29}
                    // Style dari class asli dipertahankan jika perlu
                    className="w-[150px] h-[29px]"
                  />
                </a>
                <a
                  target="_blank"
                  // Menambahkan "nofollow" sesuai permintaan
                  rel="noopener noreferrer nofollow"
                  href={iosOneLinkUrl}
                  className="bg-white rounded-2xl p-3 flex justify-center items-center w-[183px]"
                >
                  <Image
                    src={iosLogo}
                    alt="iOS Download"
                    width={150}
                    height={29}
                    className="w-[150px] h-[29px]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="hidden md:flex w-full md:w-1/2 justify-end items-end">
            <Image
              src={punpunIcon}
              alt="Icon punpun"
              // `h-[20rem]` adalah 320px. Width diatur agar rasio aspek terjaga.
              width={260} 
              height={320}
              className="h-[20rem] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaTestimonial;
