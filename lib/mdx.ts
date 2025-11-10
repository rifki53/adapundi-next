import { MDXRemote } from "next-mdx-remote/rsc"; // Pastikan ini dari /rsc

// Import semua plugin yang Anda butuhkan
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeExtractHeadings from "./rehype-extract-headings"; // Plugin kustom kita
import type { Heading } from "./mdxUtils"; // Asumsi tipe Heading ada di sini

// Opsi untuk rehype-pretty-code
const prettyCodeOptions = {
  theme: "one-dark-pro",
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("line--highlighted");
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ["word--highlighted"];
  },
};

// Fungsi utama untuk mengompilasi MDX
export async function compileMdx(source: string) {
  // Array ini akan diisi oleh plugin kustom kita
  const headings: Heading[] = [];

  const compiledSource = await MDXRemote({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug, // 1. Tambahkan ID ke headings
          [rehypeAutolinkHeadings, { behavior: "wrap" }], // 2. Tambahkan link ke headings
          [rehypePrettyCode, prettyCodeOptions], // 3. Proses blok kode
          [rehypeExtractHeadings, { headings }], // 4. Ekstrak data headings ke dalam array kita
        ],
      },
    },
  });

  return {
    content: compiledSource,
    headings,
  };
}
