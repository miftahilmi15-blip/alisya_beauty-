import { initRouter, navigateTo } from "../router/router.js";

const initApp = () => {
    console.log("Aplikasi sedang dimuat...");

    // JARING PENGAMAN: Apapun yang terjadi pada router, 
    // kita tetap tampilkan body setelah 500ms agar user tidak melihat layar hitam selamanya.
    setTimeout(() => {
        document.body.style.visibility = 'visible';
        document.body.style.opacity = '1';
    }, 500);

    try {
        initRouter();
        navigateTo('home-page');
    } catch (error) {
        console.error("Router error:", error);
    }
};

document.addEventListener('DOMContentLoaded', initApp);
