"use client";

import { useState } from "react";
import React from "react";

// Mendefinisikan tipe untuk link jika ada
type Link = {
  href: string;
  text: string;
};

// Mendefinisikan tipe untuk props komponen
type AccordionAltProps = {
  children?: React.ReactNode; // Untuk konten tambahan, setara dengan <slot>
  title: string;
  id: string;
  active?: boolean;
  answer?: string; // Prop untuk jawaban teks
  links?: Link[]; // Prop untuk daftar link
};

export default function AccordionAlt({
  children,
  title,
  id,
  active = false,
  answer,
  links,
}: AccordionAltProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(active);

  return (
    <div className="relative rounded-lg bg-white/70 shadow-sm shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
      <h2>
        <button
          id={`accordion-title-${id}`}
          className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen((prevState) => !prevState);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span>{title}</span>
          <span className="ml-8 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white shadow-xs">
            <svg
              className={`origin-center transform fill-gray-400 transition duration-200 ease-out ${accordionOpen && "rotate-180!"}`}
              xmlns="http://www.w3.org/2000/svg"
              width={10}
              height={6}
              fill="none"
            >
              <path
                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`overflow-y-auto text-sm text-gray-600 transition-all duration-300 ease-in-out ${
          accordionOpen ? "h-74 opacity-100" : "h-2 opacity-0"
        }`}
      >
        <div className="px-4 pb-3">
          {/* Konten di-render di sini, sama seperti Accordion standar */}
          {answer && <p>{answer}</p>}
          {links && links.length > 0 && (
            <div className="mt-2">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-green-500 hover:text-green-600 transition-colors duration-150 ease-in-out"
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
