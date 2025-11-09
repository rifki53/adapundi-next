"use client"; // Diperlukan untuk hook seperti useState, useEffect, dan event listeners

import { useState, useEffect } from "react";

// Import gambar dari direktori public
import MobileBg from "@/public/images/banner/vertical/about.png";
import DesktopHero from "@/public/images/illustration/abstract-illustration.svg";

// Definisikan tipe untuk props
interface HeroTitleProps {
  title: string;
  description?: string;
  isBlog?: boolean;
}

// Custom hook untuk mendapatkan ukuran window
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{ width?: number }>({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Panggil saat mount untuk mendapatkan ukuran awal

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const HeroTitle: React.FC<HeroTitleProps> = ({
  title,
  description,
  isBlog,
}) => {
  const { width: screenWidth } = useWindowSize();
  const isMobile = screenWidth ? screenWidth < 768 : false; // Tailwind's `md` breakpoint

  // Menggabungkan kelas secara dinamis
  const sectionClasses = [
    "relative bg-custom-green bg-section flex flex-col md:justify-center",
    isBlog ? "h-90" : isMobile ? "h-screen" : "md:min-h-147",
    isBlog && isMobile ? "pt-32" : "",
    !isBlog ? "justify-end" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const contentClasses = [
    "max-w-6xl w-full mx-auto px-4 sm:px-6 lg:p-8 flex flex-col items-center md:items-start text-center md:text-left",
    !isBlog ? "pb-26" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const headingWrapperClasses = ["w-full md:max-w-3xl", isBlog ? "pt-12" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <section
        className={sectionClasses}
        style={{
          backgroundImage: `url(${(isMobile ? MobileBg : DesktopHero).src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <div className={contentClasses}>
          <div className={headingWrapperClasses}>
            {/* Heading */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight max-w-4xl mb-6"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            {/* Subheading */}
            {description && (
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed max-w-3xl mb-12">
                {description}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroTitle;
