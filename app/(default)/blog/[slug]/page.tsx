import type { Metadata } from "next";
import Image from "next/image";

// Ganti sumber import jika Anda memindahkannya
import { getStrapiPostBySlug, formatDate } from "@/hooks/strapi"; 
import { extractHeadings } from "@/lib/mdxUtils"; // <-- Impor helper baru
import { CustomMDX } from "@/components/mdx/mdx";

import PageIllustration from "@/components/del/page-illustration";
import PostNav from "./post-nav";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const data = await getStrapiPostBySlug(params.slug);

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
  const { post } = await getStrapiPostBySlug(params.slug);

  // 1. Ekstrak judul dari konten di server
  const headings = extractHeadings(post.content);

  // 2. Modifikasi konten untuk menambahkan ID ke setiap h2
  const contentWithIds = post.content.replace(/^##\s+(.*)/gm, (match, text) => {
    const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[?]/g, '');
    return `<h2 id="${id}">${text}</h2>`;
  });

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex justify-between pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="max-w-3xl">
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
                  {/* Gunakan formatDate dari utilitas baru */}
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
                <CustomMDX source={contentWithIds} />
              </div>
            </article>
          </div>

          {/* 4. Kirim data headings ke PostNav sebagai prop */}
          <PostNav headings={headings} />
        </div>
      </div>
    </section>
  );
}
