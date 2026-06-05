// src/app/main.js
import { renderBookingList } from "../features/booking/bookingList.js";
import { setupBookingForm } from "../features/booking/bookingForm.js";

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi daftar booking
    renderBookingList('booking-container-id'); 
    
    // 2. Inisialisasi form booking
    setupBookingForm();
});
