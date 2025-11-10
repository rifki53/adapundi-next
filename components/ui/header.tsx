"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios"; // <-- Import axios

import LogoImg from "@/public/images/logo/logo_new.png";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";

// Definisikan link navigasi di luar komponen
const aboutLinks = [
  { path: "/about", title: "Tentang Adapundi" },
  { path: "/testimonial", title: "Kisah Inspiratif" },
  { path: "/blog", title: "Artikel" },
];

const serviceLinks = [
  { path: "/riplay", title: "RIPLAY" },
  { path: "/antifraud", title: "Antifraud" },
  { path: "/faq", title: "FAQ" },
  { path: "/term-condition", title: "Syarat & Ketentuan" },
  { path: "/privacy-policy", title: "Kebijakan Privasi" },
];

const fundingLinks = [
  { path: "/loans", title: "Pinjaman" },
  { path: "/investment", title: "Pendanaan" },
];

export default function Header() {
  const [tkbData, setTkbData] = useState<any>({});
  const [isMobile, setIsMobile] = useState(false);

  // --- LOGIKA FETCHING & CACHING DATA (diadaptasi dari Vue) ---
  useEffect(() => {
    // Fungsi untuk mengambil data dari API
    const fetchTKBDataFromAPI = () => {
      axios
        .get("https://ap-api.adapundi.com/compliance/tkbdata")
        .then((response) => {
          if (response.data.success) {
            const data = response.data.data;
            setTkbData(data);

            // Simpan data dan timestamp ke localStorage
            localStorage.setItem("tkbData", JSON.stringify(data));
            localStorage.setItem("tkbDataTimestamp", new Date().getTime().toString());
            console.log("TKB data fetched and cached");
          }
        })
        .catch((error) => {
          console.error("Error fetching TKB data:", error);
        });
    };

    // Fungsi untuk memeriksa cache atau mengambil data baru
    const fetchTKBData = () => {
      const cachedData = localStorage.getItem("tkbData");
      const cachedTimestamp = localStorage.getItem("tkbDataTimestamp");
      const currentTime = new Date().getTime();

      // Jika ada cache dan belum lebih dari 1 jam
      if (cachedData && cachedTimestamp && currentTime - parseInt(cachedTimestamp) < 3600000) {
        try {
          setTkbData(JSON.parse(cachedData));
          console.log("Using cached TKB data");
        } catch (error) {
          console.error("Error parsing cached TKB data:", error);
          fetchTKBDataFromAPI(); // Ambil baru jika parse gagal
        }
      } else {
        // Jika tidak ada cache atau sudah kedaluwarsa
        fetchTKBDataFromAPI();
      }
    };

    fetchTKBData();
  }, []); // Array dependensi kosong agar hanya berjalan sekali saat mount

  // --- LOGIKA RESPONSIVE (mendeteksi ukuran layar) ---
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Breakpoint lg
    };

    handleResize(); // Panggil saat komponen pertama kali dimuat
    window.addEventListener("resize", handleResize);

    // Cleanup listener saat komponen di-unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-2 sm:px-4 md:px-6">
        <div className="relative flex h-16 items-center justify-between rounded-2xl bg-white/100 px-2 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] sm:px-3">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center mr-2">
            <Link className="inline-flex" href="/" aria-label="adapundi">
              <Image
                src={LogoImg}
                alt="Adapundi"
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Render Berdasarkan Ukuran Layar */}
          {isMobile ? (
            // Tampilan Mobile
            <MobileMenu
              aboutLinks={aboutLinks}
              serviceLinks={serviceLinks}
              fundingLinks={fundingLinks}
              tkbData={tkbData}
            />
          ) : (
            // Tampilan Desktop
            <>
              <nav className="flex grow justify-center">
                <ul className="flex items-center justify-center gap-1 text-sm sm:gap-2 md:text-base lg:gap-4">
                  <Dropdown
                    title="Layanan"
                    className="text-gray-700 hover:text-gray-900 whitespace-nowrap"
                  >
                    {fundingLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          href={link.path}
                          className="flex rounded-lg px-2 py-1.5 text-xs text-gray-700 hover:bg-gray-100 sm:text-sm whitespace-nowrap"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </Dropdown>

                  {aboutLinks.map((link) => (
                    <li key={link.path} className="px-1 py-1 sm:px-2">
                      <Link
                        href={link.path}
                        className="flex items-center text-gray-700 transition hover:text-gray-900 whitespace-nowrap"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}

                  <Dropdown
                    title="Bantuan"
                    className="text-gray-700 hover:text-gray-900 whitespace-nowrap"
                  >
                    {serviceLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          href={link.path}
                          className="flex rounded-lg px-2 py-1.5 text-xs text-gray-700 hover:bg-gray-100 sm:text-sm whitespace-nowrap"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </Dropdown>
                </ul>
              </nav>

              <div className="flex flex-shrink-0 items-center justify-end ml-2">
                <Dropdown
                  title={`TKB90=${tkbData?.tkb90 || "..."}`}
                  className="text-sm md:text-base text-gray-700 hover:text-gray-900 whitespace-nowrap"
                >
                  {tkbData?.tkb0 && <li><span className="flex rounded-lg px-2 py-1.5 text-xs text-gray-700 sm:text-sm whitespace-nowrap">TKB0 = {tkbData.tkb0}</span></li>}
                  {tkbData?.tkb30 && <li><span className="flex rounded-lg px-2 py-1.5 text-xs text-gray-700 sm:text-sm whitespace-nowrap">TKB30 = {tkbData.tkb30}</span></li>}
                  {tkbData?.tkb60 && <li><span className="flex rounded-lg px-2 py-1.5 text-xs text-gray-700 sm:text-sm whitespace-nowrap">TKB60 = {tkbData.tkb60}</span></li>}
                  {tkbData?.tkb90 && <li><span className="flex rounded-lg px-2 py-1.5 text-xs text-gray-700 sm:text-sm whitespace-nowrap">TKB90 = {tkbData.tkb90}</span></li>}
                </Dropdown>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
