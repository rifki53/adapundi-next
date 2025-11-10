import type { Metadata } from "next";
import Image from "next/image";

// GANTI IMPORT INI
import { getStrapiPostBySlug, formatDate } from "@/hooks/strapi"; 
import { CustomMDX } from "@/components/mdx/mdx";

import PageIllustration from "@/components/del/page-illustration";
import PostNav from "./post-nav"; // Asumsi komponen ini juga diupdate untuk menerima prev/next post

// Fungsi generateMetadata sudah benar, hanya ganti sumber import
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
  // Panggil sekali, Next.js akan otomatis men-deduplikasi request
  const { post,  } = await getStrapiPostBySlug(params.slug);

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Pass prevPost dan nextPost ke komponen yang membutuhkan */}
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

              <div className="prose max-w-none ...">
                <CustomMDX source={post.content} />
              </div>
            </article>
          </div>

          {/* Pastikan PostNav menerima prevPost dan nextPost sebagai props */}
          <PostNav />
        </div>
      </div>
    </section>
  );
}
