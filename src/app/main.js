import { initRouter, navigateTo } from "../router/router.js";

// Fungsi untuk memastikan aplikasi tampil
const initApp = () => {
    try {
        console.log("Aplikasi sedang dimuat...");
        
        // 1. Inisialisasi Navigasi
        initRouter();
        
        // 2. Set halaman default
        navigateTo('home-page');
        
        // 3. Tampilkan body setelah semuanya siap
        document.body.style.visibility = 'visible';
        console.log("Aplikasi berhasil dimuat!");
    } catch (error) {
        console.error("Terjadi error saat load aplikasi:", error);
        // Tetap tampilkan body agar tidak blank meski ada error
        document.body.style.visibility = 'visible';
    }
};

// Jalankan saat DOM siap
document.addEventListener('DOMContentLoaded', initApp);
