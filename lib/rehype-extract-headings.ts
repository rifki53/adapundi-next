import { visit } from "unist-util-visit";
// Fungsi plugin rehype
export default function rehypeExtractHeadings({ headings }: any) {
  return (tree: any) => {
    visit(tree, "element", (node) => {
      // Hanya proses h2 dan h3. Anda bisa menambahkan h4, dll. jika perlu.
      if (node.tagName === "h2" || node.tagName === "h3") {
        // Pastikan node memiliki id, yang seharusnya ditambahkan oleh rehype-slug
        if (node.properties && node.properties.id) {
          headings.push({
            id: node.properties.id,
            // Ekstrak teks dari dalam node heading
            text: node.children
              .filter((child: any) => child.type === "text")
              .map((child: any) => child.value)
              .join(""),
            // Simpan level heading (misal: 2 untuk h2)
            level: parseInt(node.tagName.substring(1), 10),
          });
        }
      }
    });
  };
}
