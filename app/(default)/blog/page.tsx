import { getStrapiPosts, getStrapiCategories } from "@/hooks/strapi";
import type { Category } from "@/hooks/strapi";
import BlogList from "./BlogList"; // Kita akan buat komponen ini di bawah
import HeroTitle from "@/components/hero-title";

// Props 'searchParams' secara otomatis disediakan oleh Next.js di Server Component
interface BlogPageProps {
  searchParams: {
    category?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // 1. Tentukan kategori yang dipilih dari URL, default ke "All"
  const selectedCategory = searchParams.category || "All";

  // 2. Ambil data di server berdasarkan kategori yang dipilih
  // Promise.all untuk efisiensi
  const [posts, categoriesData] = await Promise.all([
    getStrapiPosts(selectedCategory),
    getStrapiCategories(),
  ]);

  // Tambahkan "All" ke daftar kategori untuk ditampilkan sebagai filter
  const allCategories: Category[] = [{ id: 0, name: "All" }, ...categoriesData];

  return (
    <>
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
