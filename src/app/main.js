import { initRouter, navigateTo } from "../router/router.js";
import { initializeAuth } from "../features/auth/authService.js"; // Pastikan Anda buat file ini

const initApp = () => {
    console.log("Aplikasi sedang dimuat...");

    // 1. Jaring Pengaman Utama
    const safetyNet = setTimeout(() => {
        document.body.style.visibility = 'visible';
        document.body.style.opacity = '1';
    }, 1000);

    try {
        // 2. Inisialisasi Firebase Auth & Router
        initializeAuth(); // Fungsi ini nanti kita buat untuk mendengarkan klik tombol
        initRouter();
        navigateTo('home-page');
        
        clearTimeout(safetyNet);
        document.body.style.visibility = 'visible';
        document.body.style.opacity = '1';
        
    } catch (error) {
        console.error("Initialization error:", error);
        document.body.style.visibility = 'visible';
    }
};

document.addEventListener('DOMContentLoaded', initApp);
