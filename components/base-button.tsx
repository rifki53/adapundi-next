import Link from "next/link";
import type { FC } from "react"; // Impor FC (Functional Component) untuk typing

// 1. Definisikan tipe untuk props menggunakan interface TypeScript
interface BaseButtonProps {
  // Teks yang akan ditampilkan di dalam tombol
  title: string;
  // Tujuan link (bisa berupa path internal atau URL eksternal)
  to: string;
  // Kelas CSS untuk mengatur margin (opsional)
  marginClass?: string;
  // Prop untuk menentukan apakah ini link eksternal (opsional)
  external?: boolean;
}

/**
 * Komponen tombol yang dapat berfungsi sebagai link internal (Next.js Link)
 * atau link eksternal (tag <a> biasa).
 * Ditulis dalam TypeScript untuk Next.js.
 */
// 2. Terapkan tipe props ke komponen dan berikan nilai default
const BaseButton: FC<BaseButtonProps> = ({
  title,
  to,
  marginClass = "",
  external = false,
}) => {
  // Kelas CSS untuk tombol dibuat responsif
  const buttonClasses =
    "btn bg-white text-gray-800 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors w-full lg:w-auto px-12 py-4";

  return (
    // Wrapper dengan flexbox untuk alignment
    <div className={`flex justify-center lg:justify-start ${marginClass}`}>
      {external ? (
        /*
         * Jika 'external' adalah true, render sebagai tag <a> biasa.
         */
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          {title}
        </a>
      ) : (
        /*
         * Jika 'external' adalah false (default), render sebagai <Link> dari Next.js.
         */
        <Link href={to} className={buttonClasses}>
          {title}
        </Link>
      )}
    </div>
  );
};

// 3. Hapus blok PropTypes karena sudah digantikan oleh interface TypeScript
export default BaseButton;
