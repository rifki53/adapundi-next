/**
 * =================================================================================
 * PENTING: Utilitas Deteksi Perangkat Mobile
 * =================================================================================
 * Fungsi-fungsi ini dirancang untuk berjalan di sisi klien (client-side).
 * Saat dieksekusi di sisi server (SSR/SSG) dalam lingkungan Next.js,
 * semua fungsi ini akan secara otomatis mengembalikan `false` untuk mencegah error.
 * =================================================================================
 */

/**
 * Mendeteksi apakah perangkat adalah iOS (khususnya iPhone).
 * @param customUA - (Opsional) String User-Agent kustom untuk pengujian.
 * @returns {boolean} - True jika terdeteksi sebagai iOS (iPhone), selain itu false.
 */
export function isIOS(customUA: any): boolean {
  // Guard clause untuk Server-Side Rendering (SSR)
  if (typeof navigator === 'undefined') {
    return false;
  }

  try {
    const ua = (customUA || navigator.userAgent).toLowerCase();
    
    // Cek user agent untuk 'iphone'
    const isIPhone = /iphone/.test(ua);

    // Cek platform, berguna untuk beberapa kasus di iPadOS atau simulator
    const isIOSPlatform = ["iPhone Simulator", "iPhone"].includes(navigator.platform);

    return isIPhone || isIOSPlatform;
  } catch (error) {
    console.error("Error in iOS detection:", error);
    return false;
  }
}

/**
 * Mendeteksi apakah perangkat adalah Android.
 * @param customUA - (Opsional) String User-Agent kustom untuk pengujian.
 * @returns {boolean} - True jika terdeteksi sebagai Android, selain itu false.
 */
export function isAndroid(customUA: any): boolean {
  // Guard clause untuk SSR
  if (typeof navigator === 'undefined') {
    return false;
  }

  try {
    const ua = (customUA || navigator.userAgent).toLowerCase();
    return /android/.test(ua);
  } catch (error) {
    console.error("Error in Android detection:", error);
    return false;
  }
}

/**
 * Mendeteksi apakah perangkat adalah perangkat mobile secara umum (iOS atau Android).
 * @param opts - (Opsional) Objek opsi, bisa berisi `{ ua: '...' }` untuk user agent kustom.
 * @returns {boolean} - True jika terdeteksi sebagai perangkat mobile, selain itu false.
 */
export function isMobile(opts: any = {}): boolean {
  // Guard clause untuk SSR
  if (typeof navigator === 'undefined') {
    return false;
  }

  try {
    const ua = (opts.ua || navigator.userAgent).toLowerCase();

    // Ekspresi reguler umum untuk mendeteksi kata kunci mobile
    const mobileRE = /(iphone|ipod|ipad|android|mobile|phone)/i;

    // Gunakan fungsi yang lebih spesifik untuk akurasi tambahan
    const isIOSDevice = isIOS(ua);
    const isAndroidDevice = isAndroid(ua);

    // Gabungkan hasil dari regex umum dan deteksi spesifik
    return mobileRE.test(ua) || isIOSDevice || isAndroidDevice;
  } catch (error) {
    console.error("Error in mobile detection:", error);
    return false;
  }
}
