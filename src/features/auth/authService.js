import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../config/firebase.js"; // Pastikan path benar

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("User berhasil login:", user.displayName);
        return user;
    } catch (error) {
        console.error("Error login:", error);
        throw error;
    }
};
