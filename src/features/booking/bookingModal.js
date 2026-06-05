// src/features/booking/bookingModal.js

export const openBookingModal = (bookingId) => {
    const modal = document.getElementById('booking-modal'); // Asumsi ada elemen modal di index.html
    const modalBody = modal.querySelector('.modal-body');
    
    // Logika untuk mengisi data ke dalam modal
    modalBody.innerHTML = `
        <h3>Detail Booking</h3>
        <p>ID: ${bookingId}</p>
        <!-- Data lain bisa ditambah di sini -->
    `;
    
    modal.style.display = 'block';
};

export const closeBookingModal = () => {
    const modal = document.getElementById('booking-modal');
    modal.style.display = 'none';
};
