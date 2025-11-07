// components/loan/hero-calculator-loan.tsx
"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";

// --- Custom Hook & Assets ---
import useWindowSize from "@/hooks/useWindowSize";
import MobileHero from "@/public/images/banner/vertical/loan.png";
import DesktopHero from "@/public/images/illustration/abstract-illustration.svg";
import styles from "./hero-calculator-loan.module.css";

// --- Definisi Tipe untuk Props (onSubmit dihapus) ---
interface HeroCalculatorLoanProps {
  isLoans?: number;
  timeCount?: number;
  minAmount?: number;
  maxAmount?: number;
  minTerm?: number;
  maxTerm?: number;
}

// --- Komponen Utama ---
export default function HeroCalculatorLoan({
  isLoans = 0,
  timeCount = 60,
  minAmount = 100000,
  maxAmount = 100000000,
  minTerm = 31,
  maxTerm = 360,
}: HeroCalculatorLoanProps) {
  // --- Logika Responsif ---
  const { width: screenWidth } = useWindowSize();
  const isMobile = screenWidth < 768;

  // --- State Komponen ---
  // State untuk nilai slider, diinisialisasi dari props.
  const [valueLoans, setValueLoans] = useState(maxAmount);
  const [valueTenure, setValueTenure] = useState(maxTerm);
  
  // State untuk warna slider, akan dihitung oleh useEffect.
  const [sliderColor, setSliderColor] = useState("");
  const [sliderColor2, setSliderColor2] = useState("");

  // --- EFEK SAMPING (useEffect) ---

  // Efek untuk sinkronisasi state jika props berubah.
  useEffect(() => {
    setValueLoans(maxAmount);
  }, [maxAmount]);

  useEffect(() => {
    setValueTenure(maxTerm);
  }, [maxTerm]);

  // Efek untuk menghitung warna slider pinjaman setiap kali nilainya berubah.
  useEffect(() => {
    const percentage = ((valueLoans - minAmount) * 100) / (maxAmount - minAmount);
    setSliderColor(
      `linear-gradient(to right, #10B981 ${percentage}%, #e5e7eb ${percentage}%)`
    );
  }, [valueLoans, minAmount, maxAmount]);

  // Efek untuk menghitung warna slider tenor setiap kali nilainya berubah.
  useEffect(() => {
    const percentage = ((valueTenure - minTerm) * 100) / (maxTerm - minTerm);
    setSliderColor2(
      `linear-gradient(to right, #10B981 ${percentage}%, #e5e7eb ${percentage}%)`
    );
  }, [valueTenure, minTerm, maxTerm]);


  // --- Helper Functions ---
  const numberFormat = (num: number) => num.toLocaleString("id-ID");

  const calculateInterest = (loanAmount: number, tenure: number, additionalRate: number) => {
    const interestRate = 0.0025 + additionalRate / 100;
    const totalAmount = loanAmount * (tenure * interestRate + 1);
    return numberFormat(Math.floor(totalAmount));
  };

  // --- Event Handlers (disederhanakan) ---
  const updateSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueLoans(Number(e.target.value));
  };

  const updateSliderTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueTenure(Number(e.target.value));
  };

  const handleSubmit = () => {
    window.open(
      "https://adapundi.onelink.me/cN17/bs728o5c",
      "_blank",
      "noopener,noreferrer"
    );
  };

  // --- Render JSX (tidak ada perubahan di sini) ---
  return (
    <section
      className="relative flex min-h-screen flex-col justify-end bg-custom-green bg-cover bg-center bg-no-repeat md:min-h-147 md:justify-center"
      style={{
        backgroundImage: `url(${isMobile ? MobileHero.src : DesktopHero.src})`,
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Bagian Teks Hero */}
            <div className="w-full px-6 md:w-3/5">
              <h1 className="h2 mb-6 text-center text-white md:text-left">
                Nikmati Pinjaman Daring Bunga Rendah Cepat Cair
              </h1>
              <p className="h4 !font-normal mb-6 hidden text-white md:block">
                Cek limitmu dan ajukan sekarang juga. Dapatkan solusi keuangan
                yang mudah, cepat dan aman.
              </p>
              <div className="hidden space-y-4 md:block">
                <p className="p text-sm text-white">
                  Adapundi berizin dan diawasi OJK, serta resmi tergabung di
                  AFPI
                </p>
              </div>
            </div>

            {/* Bagian Form Simulasi */}
            <div className="w-full px-6 md:w-2/5">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className={`mb-2 ${styles.rangeContainer}`}>
                  <div className="mb-2 flex justify-between">
                    <h6 className="h4 !text-base">Jumlah Pinjaman</h6>
                    <span className="font-semibold text-green-600">
                      Rp{numberFormat(valueLoans)}
                    </span>
                  </div>
                  <input
                    type="range"
                    className="w-full h-2 cursor-pointer appearance-none rounded-lg bg-gray-200"
                    style={{ background: sliderColor }}
                    value={valueLoans}
                    min={minAmount}
                    max={maxAmount}
                    onChange={updateSlider}
                  />
                  <div className="mt-2 flex justify-between text-sm text-gray-600">
                    <span>Rp{numberFormat(minAmount)}</span>
                    <span>Rp{numberFormat(maxAmount)}</span>
                  </div>
                </div>
                <div
                  className={`border-b border-gray-200 pb-2 ${styles.rangeContainer}`}
                >
                  <div className="mb-2 flex justify-between">
                    <h6 className="h4 !text-base">Tenor</h6>
                    <span className="font-semibold text-green-600">
                      {valueTenure} {isLoans === 0 ? "Hari" : "Periode"}
                    </span>
                  </div>
                  <input
                    type="range"
                    className="w-full h-2 cursor-pointer appearance-none rounded-lg bg-gray-200"
                    style={{ background: sliderColor2 }}
                    value={valueTenure}
                    min={minTerm}
                    max={maxTerm}
                    onChange={updateSliderTwo}
                  />
                  <div className="mt-2 flex justify-between text-sm text-gray-600">
                    <span>
                      {numberFormat(minTerm)}{" "}
                      {isLoans === 0 ? "Hari" : "Periode"}
                    </span>
                    <span>
                      {numberFormat(maxTerm)}{" "}
                      {isLoans === 0 ? "Hari" : "Periode"}
                    </span>
                  </div>
                </div>
                <div className="my-2 text-center">
                  <h5 className="h4 !text-base !font-semibold">
                    Jumlah yang harus dibayarkan
                  </h5>
                  <h4 className="h3 !font-bold mt-2 text-green-600">
                    Rp
                    {calculateInterest(
                      valueLoans,
                      valueTenure,
                      isLoans === 0 ? 0 : 30
                    )}
                  </h4>
                </div>
                <button
                  className={`w-full rounded-lg bg-green-500 py-3 font-medium text-white transition-colors hover:bg-yellow-600 ${styles.breathing}`}
                  onClick={handleSubmit}
                >
                  Ajukan Sekarang
                </button>
                <p className="p !text-xs !text-gray-500 mt-2">
                  *Catatan: Simulasi pinjaman di atas hanya berupa contoh. Angka
                  pinjaman secara rill dapat dicek di aplikasi.
                </p>
              </div>
            </div>

            {/* Teks OJK/AFPI untuk mobile */}
            <div className="block w-full px-6 pt-6 text-center md:hidden">
              <p className="p text-sm text-white">
                Adapundi berizin dan diawasi OJK, <br />
                serta resmi tergabung di AFPI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
