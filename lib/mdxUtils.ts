// lib/mdxUtils.ts
export interface Heading {
  id: string;
  text: string;
}

/**
 * Mengekstrak judul h2 dari string MDX dan membuat ID yang ramah URL.
 * @param content - Konten string dari file MDX.
 * @returns Array dari objek Heading.
 */
export const extractHeadings = (content: string): Heading[] => {
  const headings: Heading[] = [];
  // Regex untuk menemukan baris yang dimulai dengan '## ' (h2)
  const headingRegex = /^##\s+(.*)/gm;
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1];
    // Buat ID yang simpel: lowercase dan ganti spasi dengan '-'
    const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[?]/g, '');
    headings.push({ id, text });
  }

  return headings;
};
