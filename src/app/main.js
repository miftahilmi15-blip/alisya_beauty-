import { initRouter, navigateTo } from "../router/router.js";

const initApp = () => {
    console.log("Aplikasi sedang dimuat...");

    // 1. Jaring Pengaman Utama
    const safetyNet = setTimeout(() => {
        document.body.style.setProperty('visibility', 'visible', 'important');
        document.body.style.opacity = '1';
    }, 1000);

    try {
        // 2. Inisialisasi
        initRouter();
        navigateTo('home-page');
        
        // Bersihkan timeout jika berhasil
        clearTimeout(safetyNet);
        document.body.style.visibility = 'visible';
        document.body.style.opacity = '1';
        
    } catch (error) {
        console.error("Router error:", error);
        // Tetap tampilkan meski error
        document.body.style.visibility = 'visible';
    }
};

document.addEventListener('DOMContentLoaded', initApp);
