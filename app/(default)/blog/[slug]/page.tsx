import type { Metadata } from "next";
import Image from "next/image";

import { getStrapiPostBySlug } from "@/components/mdx/utils";
import PostDate from "@/components/del/post-date";
import { CustomMDX } from "@/components/mdx/mdx";

import PageIllustration from "@/components/del/page-illustration";
import PostNav from "./post-nav";

// Fungsi untuk generate metadata dinamis
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const { post } = await getStrapiPostBySlug(params.slug);

  if (!post) {
    return;
  }

  // Ambil judul dan deskripsi dari metadata post
  // Pastikan ada properti 'description' atau 'summary' di post.metadata Anda
  const { title, description } = post.metadata;

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
  // Ambil data di server. Next.js akan otomatis men-deduplikasi request ini
  // sehingga tidak terjadi panggilan API ganda.
  const { post } = await getStrapiPostBySlug(params.slug);

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex justify-between pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Container ini sekarang lebih lebar untuk mengakomodasi 2 kolom */}
          <div className="max-w-3xl">
            <article>
              {/* Header tetap dirender di server, cepat dan SEO-friendly */}
              <header className="mb-10 max-w-3xl">
                <div className="mb-6"></div>
                <h1 className="text-4xl font-bold md:text-5xl">
                  {post.metadata.title}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-600">
                  <span className="font-medium text-gray-900">
                    {post.metadata.author}
                  </span>
                  <span>·</span>
                  <PostDate dateString={post.metadata.publishedAt} />
                  <span>·</span>
                  <span>{post.metadata.readingTime} min read</span>
                </div>
                {post.metadata.image && (
                  <figure className="my-8">
                    <Image
                      src={post.metadata.image}
                      alt={post.metadata.title}
                      width={928} // Sesuaikan dengan max-w-4xl
                      height={522}
                      className="w-full rounded-lg shadow-lg"
                      priority
                    />
                  </figure>
                )}
              </header>

              <div className="prose max-w-none text-gray-700 prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:font-medium prose-blockquote:italic prose-blockquote:text-gray-900 prose-strong:font-medium prose-strong:text-gray-900 prose-code:rounded prose-code:bg-transparent prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-gray-900 prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:border prose-pre:border-gray-700 prose-pre:bg-gray-900 prose-blockquote:xl:-ml-4">
                <CustomMDX source={post.content} />
              </div>
            </article>
          </div>

          <PostNav />
        </div>
      </div>
    </section>
  );
}
