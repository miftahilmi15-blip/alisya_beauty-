// src/app/main.js
import { initRouter, navigateTo } from "../router/router.js";

document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi event klik nav
    initRouter();
    
    // Default halaman saat pertama kali buka
    navigateTo('home-page');
});
