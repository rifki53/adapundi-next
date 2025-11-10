import { useState, useEffect } from 'react';

/**
 * Hook untuk memata-mata posisi scroll relatif terhadap elemen dengan ID tertentu.
 * @param ids - Array dari string ID elemen yang ingin dipantau.
 * @param options - Opsi untuk offset dari atas viewport.
 * @returns ID dari elemen yang sedang aktif.
 */
export const useScrollSpy = (
  ids: string[],
  options?: { offset?: number }
): string => {
  const [activeId, setActiveId] = useState<string>('');
  const offset = options?.offset ?? 100; // Jarak dari atas layar (default 100px)

  useEffect(() => {
    // Cari elemen berdasarkan ID yang diberikan setelah komponen mount
    const elements = ids.map((id) => document.getElementById(id));

    const handleScroll = () => {
      // Dapatkan posisi scroll vertikal saat ini
      const scrollY = window.scrollY;

      // Cari elemen terakhir yang posisi atasnya sudah dilewati oleh scroll + offset
      // Kita iterasi dari bawah ke atas untuk efisiensi
      for (let i = elements.length - 1; i >= 0; i--) {
        const element = elements[i];
        if (element && element.offsetTop <= scrollY + offset) {
          setActiveId(element.id);
          return; // Keluar dari loop setelah menemukan yang aktif
        }
      }
      
      // Jika tidak ada yang aktif (misalnya di paling atas halaman), kosongkan ID
      setActiveId('');
    };

    // Panggil sekali saat inisialisasi untuk set state awal
    handleScroll();

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // WAJIB: Hapus event listener saat komponen unmount untuk mencegah memory leak
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ids, offset]); // Jalankan ulang efek jika daftar ID atau offset berubah

  return activeId;
};

// Jangan lupa export default jika file lain mengimpornya seperti itu
export default useScrollSpy;
