import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);

export const logoutUser = async () => {
    try {
        await signOut(auth);
        console.log("User telah logout");
        // Reload halaman atau arahkan ke state awal
        window.location.reload(); 
    } catch (error) {
        console.error("Gagal logout:", error);
    }
};
