"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Menggunakan Next.js Image untuk optimasi
import { useContent } from "@/hooks/useContent";

export default function BlogList() {
  const {
    posts,
    categories,
    loading,
    error,
    fetchPosts,
    fetchCategories,
    formatDate,
  } = useContent();

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Efek untuk mengambil data awal saat komponen pertama kali dimuat
  useEffect(() => {
    fetchCategories();
    fetchPosts("All"); // Memuat semua post pada awalnya
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Array dependensi kosong agar hanya berjalan sekali

  // Fungsi untuk menangani klik pada kategori
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    fetchPosts(category);
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mx-auto pt-10 pb-12 md:pb-20">
          {/* Judul Halaman (opsional, bisa ditambahkan) */}
          <div className="pb-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-gray-700">
              Konten terbaru seputar developer, produk, dan para ahli digital.
            </p>
          </div>

          {/* Tombol Kategori */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`btn-sm font-normal shadow-sm ${
                  selectedCategory === category
                    ? "text-gray-200 bg-gray-800 hover:bg-gray-900"
                    : "text-gray-800 bg-white hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* State Loading */}
          {loading && (
            <div className="text-center py-8">
              <div className="text-gray-500">Memuat post...</div>
            </div>
          )}

          {/* State Error */}
          {error && (
            <div className="text-center py-8">
              <div className="text-red-500">Error: {error}</div>
            </div>
          )}

          {/* Daftar Artikel */}
          {!loading && !error && (
            <div className="space-y-12">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-col sm:flex-row items-start gap-6"
                >
                  {/* Gambar */}
                  {post.image && (
                    <Link
                      className="block w-full sm:w-1/3 shrink-0"
                      href={`/blog/${post.slug}`}
                    >
                      {/* Menggunakan komponen Image dari Next.js untuk optimasi */}
                      <Image
                        src={post.image}
                        alt={`Preview for ${post.title}`}
                        width={400} // Ganti dengan lebar yang sesuai
                        height={225} // Ganti dengan tinggi yang sesuai
                        className="w-full h-auto aspect-video object-cover rounded-md shadow-md hover:opacity-90 transition-opacity"
                      />
                    </Link>
                  )}

                  {/* Konten Teks */}
                  <div className="w-full">
                    <header className="mb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-sm text-gray-500">
                          {post.author} · {formatDate(post.date)} ·{" "}
                          {post.readingTime} min read
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold">
                        <Link
                          className="hover:underline"
                          href={`/blog/${post.slug}`}
                        >
                          {post.title}
                        </Link>
                      </h2>
                    </header>

                    <p className="text-gray-700 mb-4">{post.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {post.category}
                      </span>
                    </div>

                    <footer>
                      <Link
                        className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                        href={`/blog/${post.slug}`}
                      >
                        Baca selengkapnya
                        <span className="tracking-normal text-blue-300">
                          -&gt;
                        </span>
                      </Link>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pesan jika tidak ada post */}
          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-8">
              <div className="text-gray-500">
                Tidak ada post yang ditemukan di kategori ini.
              </div>
            </div>
          )}

          {/* Tombol Load more (placeholder) */}
          {posts.length > 0 && (
            <div className="text-center mt-12">
              <button className="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow-sm py-1.5 min-w-[220px]">
                Muat lebih banyak{" "}
                <span className="tracking-normal text-gray-500 ml-2">↓</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
