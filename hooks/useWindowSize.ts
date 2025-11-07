// hooks/useWindowSize.ts
import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler untuk dipanggil saat jendela diubah ukurannya
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Tambahkan event listener
    window.addEventListener("resize", handleResize);
    
    // Panggil handler segera agar state terisi dengan ukuran awal
    handleResize();
    
    // Hapus event listener saat komponen di-unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Array kosong memastikan efek ini hanya berjalan sekali (saat mount)

  return windowSize;
}
