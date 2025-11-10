"use client";

import useScrollSpy from "@/utils/useScrollSpy";
import type { Heading } from "@/lib/mdxUtils"; // <-- Impor tipe data

export default function PostNav({ headings }: { headings: Heading[] }) {
  const ids = headings.map((h) => h.id);

  const activeId = useScrollSpy(ids, { offset: 120 }); // Sesuaikan offset jika perlu

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="ml-6 w-60 shrink-0 max-md:hidden">
      <nav className="sticky top-24 border-l border-r p-5 [border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.5),transparent)1]">
        <div className="font-bold">On this page</div>
        <ul className="mt-2 space-y-2 text-sm">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                // Terapkan kelas 'scrollspy-active' jika ID-nya cocok dengan activeId dari hook
                className={`
                  hover:text-gray-900
                  ${
                    activeId === heading.id
                      ? "text-sky-500"
                      : "text-gray-700"
                  }
                `}
                href={`#${heading.id}`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
