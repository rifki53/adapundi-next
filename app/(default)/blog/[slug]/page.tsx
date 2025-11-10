import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

// Impor fungsi dan tipe yang benar dari hooks/strapi
import { getStrapiPostBySlug, formatDate } from "@/hooks/strapi"; 

// Impor komponen PostNav dan CustomMDX
import PostNav from "./post-nav";
import { CustomMDX } from "@/components/mdx/mdx"; // Pastikan nama file dan path ini benar

// Props untuk halaman dinamis
interface PostPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata dinamis berdasarkan slug
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const data = await getStrapiPostBySlug(resolvedParams.slug);

  if (!data || !data.post) {
    return {
      title: "Post Not Found",
    };
  }
  
  const post = data.post;

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      url: `/blog/${post.slug}`,
      images: [
        {
          url: post.metadata.image || "/fallback-image.png",
          width: 1200,
          height: 630,
          alt: post.metadata.title,
        },
      ],
    },
  };
}

// Komponen Halaman Detail Artikel
export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const { post, prevPost, nextPost } = await getStrapiPostBySlug(resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <article>
              <header className="mb-8">
                {/* Judul dan meta */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.metadata.title}</h1>
                <div className="text-lg text-gray-500">
                  Oleh {post.metadata.author} · {formatDate(post.metadata.publishedAt)} · {post.metadata.readingTime} mnt baca
                </div>
              </header>

              {/* Gambar utama */}
              {post.metadata.image && (
                <figure className="mb-8">
                  <Image
                    className="w-full rounded"
                    src={post.metadata.image}
                    width={1024}
                    height={576}
                    alt={post.metadata.title}
                    priority
                  />
                </figure>
              )}

              {/* Konten artikel dirender dengan CustomMDX */}
              <div className="prose lg:prose-lg max-w-none">
                <CustomMDX source={post.content} />
              </div>

              {/* --- NAVIGASI POST --- */}
              <footer className="mt-12 pt-8 border-t border-gray-200">
                <PostNav previousPost={prevPost} nextPost={nextPost} />
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
