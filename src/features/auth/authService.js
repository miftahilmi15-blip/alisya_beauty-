import { auth } from "../../config/firebase.js"; 
import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const provider = new GoogleAuthProvider();

export const initializeAuth = () => {
    const loginBtn = document.getElementById('btnLogin');
    if (!loginBtn) {
        console.error("Tombol btnLogin tidak ditemukan di DOM!");
        return;
    }

    loginBtn.addEventListener('click', async () => {
        console.log("Mencoba login Google...");
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Berhasil login:", result.user.email);
            // Tombol berhasil, nanti overlay hilang otomatis oleh onAuthStateChanged
        } catch (error) {
            console.error("Error Login:", error.code, error.message);
            alert("Error: " + error.code); // Supaya tahu error-nya apa
        }
    });
};
