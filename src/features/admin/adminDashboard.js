/**
 * Admin Dashboard Component
 * Mengelola fitur khusus admin
 */

import { showToast } from "../../components/toast.js";

export const initAdminDashboard = (user) => {
    // 1. Definisikan akses (bisa ditingkatkan ke Firebase Realtime Database/Firestore)
    const ADMIN_EMAIL = "admin@alisyabeauty.com";
    const isAdmin = user && user.email === ADMIN_EMAIL;

    if (!isAdmin) return;

    // 2. Jika admin, tampilkan menu admin di sidebar
    const adminMenu = document.getElementById('admin-menu');
    if (adminMenu) {
        adminMenu.classList.remove('hidden');
        
        // 3. Event Listener untuk akses dashboard
        adminMenu.addEventListener('click', (e) => {
            e.preventDefault();
            loadAdminContent();
        });
    }
};

const loadAdminContent = () => {
    const adminPage = document.getElementById('admin-page'); // Pastikan ini ada di HTML
    
    if (adminPage) {
        // Tampilkan halaman admin
        document.querySelectorAll('.spa-page').forEach(p => p.classList.remove('active'));
        adminPage.classList.add('active');
    } else {
        showToast("Halaman Admin belum siap.");
    }
};
