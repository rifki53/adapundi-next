import { Metadata } from "next";
import { getStrapiPosts, getStrapiCategories } from "@/hooks/strapi";
import type { Category } from "@/hooks/strapi";
import { generateBreadcrumbSchema } from "@/utils/schemas";

// Impor komponen Anda
import BlogList from "./BlogList";
import HeroTitle from "@/components/hero-title";

// 1. Definisikan Metadata SPESIFIK untuk Halaman Indeks Blog (/blog)
export const metadata: Metadata = {
  // Judul spesifik. Akan menjadi: "Blog & Artikel Keuangan Terbaru | Adapundi"
  title: "Blog & Artikel Keuangan Terbaru",
  description:
    "Jelajahi blog Adapundi untuk menemukan artikel, berita, dan informasi terkini seputar keuangan, tips pinjaman, dan solusi finansial terpercaya.",

  // URL kanonis untuk halaman ini.
  alternates: {
    canonical: "/blog",
  },

  // --- Menimpa Open Graph & Twitter untuk halaman ini ---
  openGraph: {
    // Tipe 'website' (dari layout) sudah cocok untuk halaman indeks blog.
    // Jika ini halaman detail artikel, tipenya harus 'article'.
    title: "Blog & Artikel Keuangan Terbaru | Adapundi",
    description:
      "Jelajahi blog Adapundi untuk menemukan artikel, berita, dan informasi terkini seputar keuangan, tips pinjaman, dan solusi finansial terpercaya.",
    url: "/blog", // URL spesifik halaman ini
    images: [
      {
        url: "/twitter-card-1200x630.png", // Fallback image
        width: 1200,
        height: 630,
        alt: "Blog Adapundi",
      },
    ],
  },
  twitter: {
    title: "Blog & Artikel Keuangan Terbaru | Adapundi",
    description:
      "Jelajahi blog Adapundi untuk menemukan artikel, berita, dan informasi terkini seputar keuangan, tips pinjaman, dan solusi finansial terpercaya.",
    images: [
      {
        url: "/twitter-card-1200x630.png", // Fallback image
        width: 1200,
        height: 630,
        alt: "Adapundi Twitter Card",
      },
    ],
  },
};

// Props 'searchParams' secara otomatis disediakan oleh Next.js di Server Component
interface BlogPageProps {
  searchParams: {
    category?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Ambil data dari server
  const selectedCategory = searchParams.category || "All";
  const [posts, categoriesData] = await Promise.all([
    getStrapiPosts(selectedCategory),
    getStrapiCategories(),
  ]);
  const allCategories: Category[] = [{ id: 0, name: "All" }, ...categoriesData];

  // 2. Buat skema Breadcrumb JSON-LD
  const breadcrumbSchema = generateBreadcrumbSchema(["home", "blog"]);

  return (
    <>
      {/* Sisipkan JSON-LD Schema untuk Breadcrumb */}
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <HeroTitle
        title="Terkini di Adapundi"
        description="Cek berita dan kegiatan terbaru di sini"
        isBlog={true}
      />

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mx-auto pt-10 pb-12 md:pb-20">
            <div className="flex flex-wrap gap-2 mb-10">
              <BlogList
                posts={posts}
                categories={allCategories}
                selectedCategory={selectedCategory}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
