"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Dropdown from "@/components/del/dropdown"; // Pastikan path ini benar

// Definisikan tipe untuk link navigasi dan props komponen
type NavLink = {
  path: string;
  title: string;
};

type MobileMenuProps = {
  aboutLinks: NavLink[];
  serviceLinks: NavLink[];
  fundingLinks: NavLink[];
  tkbData: any;
};

export default function MobileMenu({
  aboutLinks,
  serviceLinks,
  fundingLinks,
  tkbData,
}: MobileMenuProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // Menutup menu saat klik di luar area menu
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // Menutup menu saat tombol 'Escape' ditekan
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Tombol Hamburger (diadaptasi dari Vue) */}
      <button
        ref={trigger}
        className={`group inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-center text-gray-800 transition-all duration-300 ease-in-out ${
          mobileNavOpen ? "active" : ""
        }`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <div className="relative flex h-6 w-6 items-center justify-center">
          <span
            className={`absolute h-0.5 w-6 rounded-sm bg-gray-800 transform transition-all duration-300 ease-in-out ${
              mobileNavOpen ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 rounded-sm bg-gray-800 transform transition-all duration-300 ease-in-out ${
              mobileNavOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 rounded-sm bg-gray-800 transform transition-all duration-300 ease-in-out ${
              mobileNavOpen ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </div>
      </button>

      {/* Navigasi Mobile */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute left-0 top-full z-20 w-full rounded-xl bg-white p-2 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important]"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="space-y-1">
            <Dropdown
              title="Layanan"
              mobile={true}
              className="text-sm text-gray-700 hover:text-gray-900 whitespace-nowrap"
            >
              {fundingLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="flex rounded-lg px-2 py-1.5 text-xs text-gray-700 hover:bg-gray-100 sm:text-sm"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </Dropdown>

            {aboutLinks.map((link) => (
              <li key={link.path} className="px-3 py-1">
                <Link
                  href={link.path}
                  className="flex items-center text-sm text-gray-700 transition hover:text-gray-900"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}

            <Dropdown
              title="Bantuan"
              mobile={true}
              className="text-sm text-gray-700 hover:text-gray-900 whitespace-nowrap"
            >
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="flex rounded-lg px-2 py-1.5 text-xs text-gray-700 hover:bg-gray-100 sm:text-sm"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </Dropdown>

            <Dropdown
              title={`TKB90=${tkbData?.tkb90 || "..."}`}
              mobile={true}
              className="text-sm text-gray-700 hover:text-gray-900 whitespace-nowrap"
            >
              {tkbData?.tkb0 && (
                <li>
                  <span className="flex rounded-lg px-2 py-1.5 text-xs text-gray-700 sm:text-sm">
                    TKB0 = {tkbData.tkb0}
                  </span>
                </li>
              )}
              {tkbData?.tkb30 && (
                <li>
                  <span className="flex rounded-lg px-2 py-1.5 text-xs text-gray-700 sm:text-sm">
                    TKB30 = {tkbData.tkb30}
                  </span>
                </li>
              )}
              {tkbData?.tkb60 && (
                <li>
                  <span className="flex rounded-lg px-2 py-1.5 text-xs text-gray-700 sm:text-sm">
                    TKB60 = {tkbData.tkb60}
                  </span>
                </li>
              )}
              {tkbData?.tkb90 && (
                <li>
                  <span className="flex rounded-lg px-2 py-1.5 text-xs text-gray-700 sm:text-sm">
                    TKB90 = {tkbData.tkb90}
                  </span>
                </li>
              )}
            </Dropdown>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
