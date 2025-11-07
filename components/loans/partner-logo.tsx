import Image, { StaticImageData } from 'next/image';

// Definisikan tipe props untuk TypeScript
interface PartnerLogoProps {
  logo: {
    img: StaticImageData | string;
    alt: string;
  };
  // Kita akan menerima className dari parent untuk mengatur ukuran
  className?: string; 
}

const PartnerLogo = ({ logo, className }: PartnerLogoProps) => {
  return (
    // Gabungkan className default dengan yang dari props
    <div className={`relative flex shrink-0 items-center justify-center rounded-2xl bg-white p-2 ${className}`}>
      <Image
        src={logo.img}
        alt={logo.alt}
        className="h-full w-full object-contain"
        // Atur tinggi max langsung di sini agar konsisten
        style={{ maxHeight: '56px' }} // 56px adalah h-14
      />
    </div>
  );
};

export default PartnerLogo;
