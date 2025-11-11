import Image from "next/image";
import ModalVideo from "@/components/modal-video";

// --- Image Imports ---
import lizaImage from "@/public/images/testimonial/Liza.png";
import yuliImage from "@/public/images/testimonial/Yuli.png";
import bahrudinImage from "@/public/images/testimonial/Bahrudin2.png";

// Data untuk testimoni agar lebih mudah dikelola
const testimonialsData = [
  {
    name: "Liza",
    role: "Driver Ojek Online",
    quote:
      "Adapundi jadi teman setia Liza dalam memenuhi kebutuhan, dengan menyediakan layanan yang praktis dan mudah untuk semua kalangan, membantu masyarakat yang membutuhkan dana tambahan.",
    imageSrc: lizaImage,
    videoUrl: "https://assets.adapundi.com/adapundi/media/liza.mp4",
    bgColor: "bg-custom-green3",
    isReversed: false,
  },
  {
    name: "Yuli",
    role: "Pemilik Depot Air Minum",
    quote:
      "Keterbatasan modal sempat menghalangi Yuli untuk mengembangkan usaha depot airnya. Bersama Adapundi yang memberikan limit pinjaman tinggi, kini bisnisnya tumbuh pesat.",
    imageSrc: yuliImage,
    videoUrl: "https://assets.adapundi.com/adapundi/media/yuli.mp4",
    bgColor: "bg-custom-orange",
    isReversed: true,
  },
  {
    name: "Bahrudin",
    role: "Pengrajin Kayu",
    quote:
      "Berawal dari kebutuhan modal usaha, Bahrudin mencoba Adapundi. Sejak itu, ia tahu ke mana harus pergi saat membutuhkan dana darurat yang cepat, aman dan bisa diandalkan.",
    imageSrc: bahrudinImage,
    videoUrl: "https://assets.adapundi.com/adapundi/media/bahrudin.mp4",
    bgColor: "bg-custom-green3",
    isReversed: false,
  },
];

// Komponen Card Testimoni individual
function TestimonialCard({ data }: any) {
  const { name, role, quote, imageSrc, videoUrl, bgColor, isReversed } = data;
  const directionClass = isReversed ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div className="container mx-auto px-4 mb-16">
      <div className={`flex flex-col ${directionClass} items-stretch`}>
        {/* Gambar */}
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <Image
            src={imageSrc}
            alt={`Testimonial Image - ${name}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        {/* Konten */}
        <div
          className={`w-full md:w-3/5 ${bgColor} p-8 md:p-12 flex flex-col justify-center`}
        >
          <h3 className="text-2xl md:text-3xl font-bold font-sans text-black text-center mb-6">
            {name} - {role}
          </h3>
          <p className="text-sm md:text-base font-montserrat text-black text-center mb-8">
            {quote}
          </p>
          <div className="flex justify-center mx-6 md:mx-0">
            <ModalVideo videoUrl={videoUrl} buttonText="Kisah Selengkapnya" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Komponen utama
export default function ListTestimonial() {
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        {/* Header Section */}
        <div className="container px-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#1e1e1e] mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-lg md:text-xl font-normal font-sans text-black max-w-2xl mx-auto">
            Dengarkan kisah inspiratif dan ulasan pengguna Adapundi.
          </p>
        </div>

        {/* Daftar Testimoni */}
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.name} data={testimonial} />
        ))}
      </div>
    </section>
  );
}
