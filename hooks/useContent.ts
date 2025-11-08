import { useState, useCallback } from "react";

// --- Konstanta ---
const STRAPI_API_URL = "https://cms.adapundi.com";
const DEBUG = true; // Set ke false di produksi

// --- Fungsi Helper ---
function logDebug(...args: any[]) {
  if (DEBUG) console.debug("[useContent]", ...args);
}

// --- Custom Hook React ---

export const useContent = () => {
  // State management menggunakan useState dengan tipe 'any'
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // --- Fungsi Utilitas Internal (Sama seperti versi Vue) ---

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

  // --- Fungsi Fetch Data (Logika disesuaikan agar sama persis dengan Vue) ---

  const fetchPosts = useCallback(async (categoryName: string | null = null) => {
    setLoading(true);
    setError(null);

    let url = `${STRAPI_API_URL}/api/articles?populate=*&sort[0]=publishedAt:desc`;
    if (categoryName && categoryName !== "All") {
      url += `&filters[category][name][$eq]=${categoryName}`;
    }

    try {
      logDebug("fetchPosts url:", url);
      const response = await fetch(url);
      if (!response.ok)
        throw new Error("Gagal mengambil daftar post dari Strapi");

      const jsonResponse = await response.json();
      logDebug("fetchPosts response count:", jsonResponse.data?.length ?? 0);

      // PERBAIKAN UTAMA: Mengakses properti langsung dari 'item', bukan 'item.attributes'
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
    try {
      const response = await fetch(`${STRAPI_API_URL}/api/categories`);
      if (!response.ok) throw new Error("Gagal mengambil kategori");
      const jsonResponse = await response.json();
      // PERBAIKAN: Mengakses 'item.name' langsung
      const categoryNames = jsonResponse.data.map((item: any) => item.name);
      setCategories(["All", ...categoryNames]);
    } catch (e: any) {
      console.error("Error saat mengambil kategori:", e);
      setCategories(["All"]); // Fallback
    }
  }, []);

  const fetchPostBySlug = useCallback(async (slug: string) => {
    setLoading(true);
    setError(null);
    setPost(null);

    const url = `${STRAPI_API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`;

    try {
      logDebug("fetchPostBySlug url:", url);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Gagal mengambil data post.");

      const jsonResponse = await response.json();
      if (!jsonResponse.data || jsonResponse.data.length === 0) {
        throw new Error("Post tidak ditemukan.");
      }

      // PERBAIKAN UTAMA: Menggunakan 'item' secara langsung, bukan 'item.attributes'
      const item = jsonResponse.data[0];
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
        // PERBAIKAN: Logika URL gambar disesuaikan dengan versi Vue
        image: item.cover ? `${STRAPI_API_URL}${item.cover.url}` : null,
        author: item.author?.name || "Unknown Author",
        category: item.category?.name || "Uncategorized",
        readingTime: calculateReadingTime(item.blocks),
        tags: item.tags || [],
      };
      setPost(detailedPostData);

      logDebug("Post loaded:", {
        slug: detailedPostData.slug,
        hasBody: !!detailedPostData.body,
        bodyLength: detailedPostData.body?.length ?? 0,
      });
    } catch (e: any) {
      setError(e.message);
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  // Mengembalikan state dan fungsi agar bisa digunakan oleh komponen
  return {
    posts,
    categories,
    post,
    loading,
    error,
    fetchPosts,
    fetchCategories,
    fetchPostBySlug,
    formatDate,
  };
};
