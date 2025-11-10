// hooks/useContent.ts

import { useState, useCallback } from "react";

// --- Konstanta ---
const STRAPI_API_URL = "https://cms.adapundi.com";
const DEBUG = true; // Set ke false di produksi

// --- Tipe Data (Opsional tapi direkomendasikan) ---
interface PostSummary {
  slug: string;
  title: string;
}

// --- Fungsi Helper ---
function logDebug(...args: any[]) {
  if (DEBUG) console.debug("[useContent]", ...args);
}

// --- Custom Hook React ---
export const useContent = () => {
  // State management
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // --- State Baru untuk Navigasi Post ---
  const [prevPost, setPrevPost] = useState<PostSummary | null>(null);
  const [nextPost, setNextPost] = useState<PostSummary | null>(null);

  // --- Fungsi Utilitas Internal ---
  const calculateReadingTime = (blocks: any[] | null): number => {
    if (!blocks || !blocks.length) return 1;
    const richTextBlock = blocks.find(
      (block) => block.__component === "shared.rich-text"
    );
    if (!richTextBlock || !richTextBlock.body) return 1;
    const words = richTextBlock.body.split(/\s+/).length;
    const wordsPerMinute = 225;
    return Math.ceil(words / wordsPerMinute);
  };

  const formatDate = (
    dateString: string,
    format: "short" | "long" = "short"
  ): string => {
    const options: Intl.DateTimeFormatOptions =
      format === "long"
        ? { year: "numeric", month: "long", day: "numeric" }
        : { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // --- Fungsi Fetch Data ---

  const fetchPosts = useCallback(async (categoryName: string | null = null) => {
    setLoading(true);
    setError(null);
    let url = `${STRAPI_API_URL}/api/articles?populate=*&sort[0]=publishedAt:desc`;
    if (categoryName && categoryName !== "All") {
      url += `&filters[category][name][$eq]=${categoryName}`;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Gagal mengambil daftar post dari Strapi");
      const jsonResponse = await response.json();
      const formattedPosts = jsonResponse.data.map((item: any) => ({
        slug: item.slug,
        title: item.title,
        description: item.description,
        date: item.publishedAt,
        image: item.cover?.formats?.small?.url
          ? `${STRAPI_API_URL}${item.cover.formats.small.url}`
          : (item.cover?.url ? `${STRAPI_API_URL}${item.cover.url}` : null),
        author: item.author?.name || "Unknown Author",
        category: item.category?.name || "Uncategorized",
        readingTime: calculateReadingTime(item.blocks),
      }));
      setPosts(formattedPosts);
    } catch (e: any) {
      setError(e.message);
      console.error("Error saat memproses post:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    // ... (fungsi ini tidak berubah)
    try {
      const response = await fetch(`${STRAPI_API_URL}/api/categories`);
      if (!response.ok) throw new Error("Gagal mengambil kategori");
      const jsonResponse = await response.json();
      const categoryNames = jsonResponse.data.map((item: any) => item.name);
      setCategories(["All", ...categoryNames]);
    } catch (e: any) {
      console.error("Error saat mengambil kategori:", e);
      setCategories(["All"]);
    }
  }, []);

  // --- FUNGSI UTAMA YANG DIMODIFIKASI ---
  const fetchPostBySlug = useCallback(async (slug: string) => {
    setLoading(true);
    setError(null);
    setPost(null);
    setPrevPost(null); // Reset state navigasi
    setNextPost(null); // Reset state navigasi

    // URL untuk mengambil post spesifik (dengan semua data)
    const postUrl = `${STRAPI_API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`;
    
    // URL untuk mengambil SEMUA post (hanya field yang perlu untuk navigasi)
    // Ini dioptimalkan untuk hanya mengambil slug dan title, diurutkan berdasarkan tanggal
    const allPostsNavUrl = `${STRAPI_API_URL}/api/articles?sort[0]=publishedAt:desc&fields[0]=slug&fields[1]=title`;

    try {
      logDebug("Fetching post and all posts for navigation...");
      // Jalankan kedua fetch secara bersamaan untuk efisiensi
      const [postResponse, allPostsNavResponse] = await Promise.all([
        fetch(postUrl),
        fetch(allPostsNavUrl)
      ]);

      if (!postResponse.ok) throw new Error("Gagal mengambil data post.");
      if (!allPostsNavResponse.ok) throw new Error("Gagal mengambil data navigasi post.");

      const postJson = await postResponse.json();
      const allPostsNavJson = await allPostsNavResponse.json();

      if (!postJson.data || postJson.data.length === 0) {
        throw new Error("Post tidak ditemukan.");
      }

      // --- Proses Post Saat Ini (logika lama) ---
      const item = postJson.data[0];
      const richTextBlock = item.blocks?.find(
        (block: any) => block.__component === "shared.rich-text"
      );
      const detailedPostData = {
        slug: item.slug,
        title: item.title,
        description: item.description,
        date: item.publishedAt,
        body: richTextBlock ? richTextBlock.body : "",
        blocks: item.blocks,
        image: item.cover ? `${STRAPI_API_URL}${item.cover.url}` : null,
        author: item.author?.name || "Unknown Author",
        category: item.category?.name || "Uncategorized",
        readingTime: calculateReadingTime(item.blocks),
        tags: item.tags || [],
      };
      setPost(detailedPostData);

      // --- LOGIKA BARU: Cari post sebelum dan sesudahnya ---
      const allPostsNavData = allPostsNavJson.data as PostSummary[];
      const currentIndex = allPostsNavData.findIndex(p => p.slug === slug);

      if (currentIndex !== -1) {
        // Post "selanjutnya" adalah post yang lebih baru (index lebih kecil)
        const next = currentIndex > 0 ? allPostsNavData[currentIndex - 1] : null;
        setNextPost(next);

        // Post "sebelumnya" adalah post yang lebih lama (index lebih besar)
        const prev = currentIndex < allPostsNavData.length - 1 ? allPostsNavData[currentIndex + 1] : null;
        setPrevPost(prev);

        logDebug("Navigation found:", { prev, next });
      }

    } catch (e: any) {
      setError(e.message);
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  // --- Kembalikan state dan fungsi, TERMASUK prevPost dan nextPost ---
  return {
    posts,
    categories,
    post,
    loading,
    error,
    prevPost, // <-- Kembalikan state baru
    nextPost, // <-- Kembalikan state baru
    fetchPosts,
    fetchCategories,
    fetchPostBySlug,
    formatDate,
  };
};
