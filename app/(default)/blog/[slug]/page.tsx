import type { Metadata } from "next";
import Image from "next/image";

// Impor yang dibutuhkan
import { getStrapiPostBySlug, formatDate } from "@/hooks/strapi"; 
import { CustomMDX } from "@/components/mdx/mdx";
import PageIllustration from "@/components/page-illustration";
// import PostNav from "./post-nav"; // Dinonaktifkan untuk sementara
// import { extractHeadings } from "@/lib/mdxUtils"; // Tidak lagi diperlukan

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const resolvedParams = await params;
  const data = await getStrapiPostBySlug(resolvedParams.slug);

  if (!data || !data.post) {
    return;
  }
  
  const { title, description } = data.post.metadata;

  return {
    title,
    description,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await params;
  const { post } = await getStrapiPostBySlug(resolvedParams.slug);

  if (!post) {
    // Anda bisa mengaktifkan notFound() jika diinginkan
    // import { notFound } from 'next/navigation';
    // notFound();
    return <div>Post not found.</div>;
  }

  // --- LOGIKA YANG MENYEBABKAN ERROR TELAH DIHAPUS ---
  // const headings = extractHeadings(post.content); // <-- DIHAPUS
  // const contentWithIds = post.content.replace(...) // <-- DIHAPUS

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Mengubah flex menjadi grid atau block agar PostNav bisa diposisikan berbeda jika diperlukan nanti */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Wrapper untuk konten utama */}
          <div className="max-w-3xl mx-auto"> {/* mx-auto untuk menengahkan jika PostNav dihilangkan */}
            <article>
              <header className="mb-10 max-w-3xl">
                <h1 className="text-4xl font-bold md:text-5xl">
                  {post.metadata.title}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-600">
                  <span className="font-medium text-gray-900">
                    {post.metadata.author}
                  </span>
                  <span>·</span>
                  <span>{formatDate(post.metadata.publishedAt)}</span>
                  <span>·</span>
                  <span>{post.metadata.readingTime} min read</span>
                </div>
                {post.metadata.image && (
                  <figure className="my-8">
                    <Image
                      src={post.metadata.image}
                      alt={post.metadata.title}
                      width={928}
                      height={522}
                      className="w-full rounded-lg shadow-lg"
                      priority
                    />
                  </figure>
                )}
              </header>

              <div className="prose max-w-none prose-h2:scroll-mt-24">
                {/* Langsung teruskan konten Markdown mentah ke CustomMDX */}
                <CustomMDX source={post.content} />
              </div>
            </article>
          </div>

          {/* 
            PostNav dinonaktifkan karena headings tidak lagi diekstrak di sini.
            Fungsi pembuatan ID untuk heading sekarang ditangani oleh `rehype-slug`
            di dalam komponen CustomMDX Anda.
          */}
          {/* <PostNav headings={headings} /> */}
        </div>
      </div>
    </section>
  );
}
