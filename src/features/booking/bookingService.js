// src/features/booking/bookingService.js
import { db } from "../../services/database.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const saveBooking = async (bookingData) => {
    return await addDoc(collection(db, "bookings"), bookingData);
};

export const fetchBookings = async () => {
    // logika ambil data
};
