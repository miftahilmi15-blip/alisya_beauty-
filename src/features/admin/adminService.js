/**
 * Admin Service
 * Bertanggung jawab mengambil/mengelola data dari Firebase Firestore
 */

import { getFirestore, collection, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { auth } from "../../config/firebase.js";

const db = getFirestore();

// Fungsi untuk mengecek apakah user saat ini benar-benar admin
const isAdmin = () => {
    const user = auth.currentUser;
    return user && user.email === "admin@alisyabeauty.com";
};

// 1. Mengambil semua data booking (Contoh)
export const getAllBookings = async () => {
    if (!isAdmin()) throw new Error("Akses ditolak: Anda bukan admin.");
    
    const querySnapshot = await getDocs(collection(db, "bookings"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// 2. Menghapus data booking
export const deleteBooking = async (bookingId) => {
    if (!isAdmin()) throw new Error("Akses ditolak: Anda bukan admin.");
    
    await deleteDoc(doc(db, "bookings", bookingId));
    return true;
};
