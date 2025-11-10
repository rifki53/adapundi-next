"use client"; // WAJIB: Menandai ini sebagai Client Component

import { useState, useEffect } from "react";
import Link from "next/link";

// Impor dari library Swiper untuk React
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Impor custom hooks dan utilitas
import { useContent } from "@/hooks/strapi";
import { isMobile } from "@/utils/isMobile";

// Impor CSS untuk Swiper
import "swiper/css";
import "swiper/css/navigation";

// Hapus interface props karena tidak lagi digunakan
// interface CsrCarouselProps {
//   category: string;
// }

// Hapus props dari parameter komponen
const CsrTestimonial = () => {
  const { posts, loading, fetchPosts } = useContent();
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // useEffect menggantikan onMounted di Vue
  useEffect(() => {
    // Langsung panggil fetchPosts dengan kategori "CSR"
    fetchPosts("CSR");

    // Cek tipe perangkat hanya di sisi klien
    setIsMobileDevice(isMobile());
    
  // Hapus 'category' dari dependency array karena sudah tidak ada
  }, [fetchPosts]);

  if (loading) {
    return (
      <div className="bg-yellow-400 py-16">
        <p className="text-center text-gray-900">Memuat artikel...</p>
      </div>
    );
  }

  if (!loading && posts.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-50">
        <p className="text-gray-500">
          {/* Ganti variabel category dengan string "CSR" */}
          Tidak ada artikel dalam kategori 'CSR'.
        </p>
      </div>
    );
  }

  return (
    <section className="relative bg-yellow-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="flex items-center md:gap-4">
          {/* Tombol Navigasi Kiri (Desktop) */}
          <button className="swiper-button-prev-custom hidden md:block text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            slidesPerView={1}
            spaceBetween={50}
            loop={true}
            className="w-full"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.slug}>
                <div
                  className={`flex justify-center gap-8 md:gap-16 md:flex-row ${
                    isMobileDevice ? "flex-col" : ""
                  }`}
                >
                  {/* Gambar di Kiri */}
                  {post.image && (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block w-full md:w-1/2 shrink-0"
                    >
                      <img
                        src={post.image}
                        alt={`Cover for ${post.title}`}
                        className="w-full h-full aspect-video object-cover rounded-lg"
                      />
                    </Link>
                  )}

                  <div className="w-full md:w-1/2 flex flex-col text-center md:text-left md:justify-between md:self-stretch">
                    {/* Wrapper untuk Judul dan Navigasi Mobile */}
                    <div className="flex items-center justify-center gap-4 md:block">
                      {/* Tombol Prev Mobile */}
                      <button className="swiper-button-prev-custom text-gray-900 md:hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>

                      {/* Judul */}
                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="md:h-60 h-auto flex justify-center md:justify-start items-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 md:pb-4 leading-tight hover:underline">
                          {post.title.length > 80
                            ? `${post.title.substring(0, 80)}...`
                            : post.title}
                        </h2>
                      </Link>

                      {/* Tombol Next Mobile */}
                      <button className="swiper-button-next-custom text-gray-900 md:hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24" // Perbaikan: viewBox sebelumnya ada 'D'
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Wrapper konten bawah (Kategori & Link) */}
                    <div className="pt-4">
                      <div className="text-gray-800 font-semibold">
                        #{post.category.toUpperCase()}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="font-bold text-gray-900 tracking-wider hover:underline"
                      >
                        BACA SEKARANG
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tombol Navigasi Kanan (Desktop) */}
          <button className="swiper-button-next-custom hidden md:block text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CsrTestimonial;

