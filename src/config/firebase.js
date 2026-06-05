import { initRouter, navigateTo } from "../router/router.js";
import { initializeAuth } from "../features/auth/authService.js";

const initApp = () => {
console.log("Aplikasi sedang dimuat...");

const safetyNet = setTimeout(() => {
    document.body.style.visibility = "visible";
    document.body.style.opacity = "1";
}, 1000);

try {
    initializeAuth();
    initRouter();
    navigateTo("home-page");

    clearTimeout(safetyNet);
    document.body.style.visibility = "visible";
    document.body.style.opacity = "1";
} catch (error) {
    console.error("Initialization error:", error);
    document.body.style.visibility = "visible";
}

};

document.addEventListener("DOMContentLoaded", initApp);
