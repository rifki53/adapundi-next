'use client'; // Diperlukan karena kita menggunakan hook (useState, useEffect)

import useWindowSize from '@/hooks/useWindowSize';
import BaseButton from '@/components/base-button'; // Asumsi BaseButton ada di sini

// Impor gambar latar belakang secara statis
// Path ini mengasumsikan folder 'public' ada di root project, satu level di atas alias '@' (src).
import MobileHero from '@/public/images/banner/vertical/investment.png';
import DesktopHero from '@/public/images/illustration/abstract-illustration.svg';

const HeroInvestment = () => {
  // Dapatkan lebar layar langsung dari hook
  const { width: screenWidth } = useWindowSize();

  // Tentukan URL gambar berdasarkan lebar layar secara langsung
  const backgroundImageUrl = screenWidth < 768 ? MobileHero.src : DesktopHero.src;

  return (
    <section
      // Gunakan kondisi 'screenWidth < 768' langsung untuk menentukan class
      className={`relative flex flex-col justify-end bg-custom-green bg-no-repeat bg-center bg-cover md:justify-center ${
        screenWidth < 768 ? 'h-screen' : 'md:min-h-[36.75rem]' // 147 * 0.25rem = 588px
      }`}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:items-start text-center md:text-left pb-26 md:pb-0">
        <div className="w-full md:max-w-3xl md:pt-12">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
            Dapatkan Akses Pendanaan dengan Imbal Hasil Menguntungkan
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white font-medium md:mb-12 mb-4">
            Proses akuntabel, terukur, dengan potensi imbal hasil yang menjanjikan.
          </p>

          {/* CTA Button */}
          <div className="md:mb-12 mb-4">
            <BaseButton
              title="HUBUNGI KAMI"
              to="mailto:bd@adapundi.com"
              external={true}
            />
          </div>

          {/* Footer Text */}
          <p className="text-white text-sm font-normal">
            Adapundi berizin dan diawasi OJK,
            <br className="md:hidden" />
            serta resmi tergabung di AFPI
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroInvestment;
