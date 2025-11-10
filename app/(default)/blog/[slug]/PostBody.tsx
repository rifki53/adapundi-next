import { CustomMDX } from "@/components/mdx/mdx";

// Komponen ini menerima konten MDX sebagai prop
export default function PostBody({ content }: { content: string }) {
  return (
    // Layout Flexbox untuk 2 kolom
    <div className="flex justify-between">
      {/* Kolom Kiri: Konten Artikel */}
      <div className="prose max-w-none prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-blue-500 hover:prose-a:underline">
        <CustomMDX source={content} />
      </div>

      {/* Kolom Kanan: Sidebar "On this page" */}
      {/* <SecondaryNav /> */}
    </div>
  );
}
