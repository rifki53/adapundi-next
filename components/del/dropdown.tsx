"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import React from "react";

// Definisikan tipe untuk props
type DropdownProps = {
  children: React.ReactNode;
  title: string;
  mobile?: boolean;
  className?: string; // <-- FIX: Tambahkan prop className
};

export default function Dropdown({
  children,
  title,
  mobile = false,
  className, // <-- FIX: Ambil prop className
}: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Hook untuk menutup dropdown saat mengklik di luar
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownOpen || dropdownRef.current.contains(target as Node)) return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // Render versi Desktop
  if (!mobile) {
    return (
      <li
        ref={dropdownRef}
        className="relative flex items-center gap-0.5 px-3 py-1"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        {/* Desktop Trigger */}
        <span
          // FIX: Terapkan className ke elemen span
          className={`flex cursor-pointer items-center text-sm transition md:text-base ${className}`}
        >
          {title}
        </span>
        <button
          className="shrink-0 p-1"
          aria-expanded={dropdownOpen}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="sr-only">Show submenu for '{title}'</span>
          <svg
            className="fill-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
          >
            <path d="m1.06.19 3.5 3.5 3.5-3.5 1.061 1.06-4.56 4.56L0 1.25 1.06.19Z" />
          </svg>
        </button>

        {/* Transisi/Animasi */}
        <Transition
          show={dropdownOpen}
          as="div"
          className="origin-top-left absolute top-full left-0 w-40 bg-white p-2 rounded-xl shadow-lg shadow-black/[0.03] border border-gray-100"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="space-y-1">{children}</ul>
        </Transition>
      </li>
    );
  }

  // Render versi Mobile
  return (
    <li ref={dropdownRef} className="relative flex w-full flex-col px-3 py-1">
      {/* Mobile Trigger */}
      <button
        // FIX: Terapkan className ke elemen button mobile
        className={`flex w-full items-center justify-between py-2 text-sm ${className}`}
        aria-expanded={dropdownOpen}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span>{title}</span>
        <svg
          className={`fill-gray-400 ml-2 transform transition-transform duration-200 ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
        >
          <path d="m1.06.19 3.5 3.5 3.5-3.5 1.061 1.06-4.56 4.56L0 1.25 1.06.19Z" />
        </svg>
      </button>

      {/* Transisi/Animasi untuk Accordion Mobile */}
      <Transition
        show={dropdownOpen}
        as="div"
        className="w-full bg-white px-2 py-1 mt-1"
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul className="space-y-1">{children}</ul>
      </Transition>
    </li>
  );
}
