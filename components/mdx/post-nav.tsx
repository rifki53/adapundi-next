import Link from 'next/link';

// Tipe ini cocok dengan data navigasi yang dikirim oleh getStrapiPostBySlug
interface NavPost {
  slug: string;
  title: string;
}

interface PostNavProps {
  previousPost?: NavPost | null;
  nextPost?: NavPost | null;
}

export default function PostNav({ previousPost, nextPost }: PostNavProps) {
  // Jika tidak ada post sebelum atau sesudahnya, jangan render komponen ini
  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <div className="text-center md:text-left">
      <div className="grid sm:grid-cols-2 gap-8 items-start">
        
        {/* Kolom untuk Artikel Sebelumnya */}
        <div className="text-center md:text-left">
          {previousPost && (
            <>
              <div className="text-sm text-gray-500 mb-1">← Postingan Sebelumnya</div>
              <h4 className="text-lg font-medium">
                <Link className="text-gray-800 hover:underline" href={`/blog/${previousPost.slug}`}>
                  {previousPost.title}
                </Link>
              </h4>
            </>
          )}
        </div>

        {/* Kolom untuk Artikel Selanjutnya */}
        <div className="text-center md:text-right">
          {nextPost && (
            <>
              <div className="text-sm text-gray-500 mb-1">Postingan Selanjutnya →</div>
              <h4 className="text-lg font-medium">
                <Link className="text-gray-800 hover:underline" href={`/blog/${nextPost.slug}`}>
                  {nextPost.title}
                </Link>
              </h4>
            </>
          )}
        </div>
        
      </div>
    </div>
  );
}
