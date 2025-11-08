"use client"; // Diperlukan karena Swiper adalah komponen sisi klien

import Image from 'next/image';
// 1. Import Swiper untuk React
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// 2. Import CSS Swiper (biasanya dilakukan di file layout utama atau global.css)
import 'swiper/css';
import 'swiper/css/pagination';

// --- Image Imports ---
import AchmadIndrawanImg from '@/public/images/directors/achmad-indrawan.png';
import MinervaAgustianiImg from '@/public/images/directors/minerva-agustiani.png';
import NovaNoviantiImg from '@/public/images/directors/nova-novianti.png';

// 3. Definisikan data sebagai array konstan di luar komponen
const team = [
  {
    name: 'Achmad Indrawan',
    position: 'Direktur Utama PT Info Tekno Siaga',
    img: AchmadIndrawanImg,
    alt: 'Achmad Indrawan',
    description: `Berbekal pengalaman di industri keuangan lebih dari 10 tahun dan ketertarikannya pada fintech, mendorong Achmad Indrawan mendirikan Adapundi. Sebagai lulusan Magister Keuangan dan Perbankan dari Universitas Indonesia, beliau percaya teknologi bisa menjadi jawaban atas tantangan inklusi keuangan yang strategis dan berdampak di Indonesia.`,
  },
  {
    name: 'Minerva Agustiani',
    position: 'Direktur Operasional PT Info Tekno Siaga',
    img: MinervaAgustianiImg,
    alt: 'Minerva Agustiani',
    description: `Sebagai Direktur Operasional yang memegang peranan krusial untuk memberikan pelayanan dan pengalaman terbaik pelanggan Adapundi, Minerva Agustiani memimpin operasional perusahaan, agar berjalan sesuai regulasi. Sebagai lulusan terbaik Manajemen dari President University, beliau turut serta mengembangkan langkah strategis yang berorientasi pada pertumbuhan bisnis.`,
  },
  {
    name: 'Nova Novianti',
    position: 'Komisaris PT Info Tekno Siaga',
    img: NovaNoviantiImg,
    alt: 'Nova Novianti',
    description: `Nova Novianti memulai karier sebagai Senior Staff Akuntansi di PT Senayan Trikarya Sempana dan telah memiliki sertifikat keahlian Auditor ISO 9001:2008 dari International Register of Certified Auditors (IRCA) UK, yang menjadi komitmen terhadap kualitas produk dan sistem manajemen yang dijalankan Adapundi sesuai standarisasi yang berlaku di Indonesia.`,
  },
];

/*
  CATATAN PENTING UNTUK STYLE SWIPER:
  Blok <style> dari kode Vue Anda digunakan untuk mengubah tampilan default navigasi dan paginasi Swiper.
  Di Next.js, cara terbaik untuk melakukan ini adalah dengan menambahkan aturan berikut ke file CSS global Anda (misalnya: `src/app/globals.css`).

  .swiper-pagination-bullet {
    background: #000 !important;
  }

  .swiper-pagination-bullet-active {
    background: #000 !important;
  }
*/

const ExecutiveTeamAbout = () => {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto py-8 md:py-14 px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto text-center md:text-left pb-4 md:pb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Tim Eksekutif</h2>
        </div>

        {/* 4. Gunakan komponen Swiper React */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {/* 5. Gunakan .map() untuk me-render slide */}
          {team.map((member) => (
            <SwiperSlide key={member.name}>
              <div className="flex flex-col md:flex-row gap-8 md:items-center">
                <div className="w-full md:w-[35%]">
                  <div className="aspect-square bg-gray-200 rounded-[1.5rem] overflow-hidden border-2 border-black mx-auto max-w-sm md:mx-0 md:max-w-none">
                    <Image
                      src={member.img}
                      alt={member.alt}
                      className="w-full h-full object-cover"
                      priority={false} // Setara dengan loading="lazy"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[65%]">
                  <div className="bg-gray-50 rounded-lg p-6 md:p-8 h-full text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {member.position}
                    </p>
                    <div className="text-gray-700 space-y-4">
                      <p>{member.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ExecutiveTeamAbout;
