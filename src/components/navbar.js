pl/**
 * Navbar Component
 * Mengelola interaksi tombol menu dan status sticky
 */

export const initNavbar = () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarTrigger = document.getElementById('sidebar-trigger');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');
    const closeSidebarBtn = document.getElementById('close-sidebar');

    // Fungsi buka/tutup sidebar
    const toggleSidebar = (isOpen) => {
        if (sidebar) sidebar.classList.toggle('active', isOpen);
        if (sidebarBackdrop) sidebarBackdrop.classList.toggle('active', isOpen);
    };

    // Event Listener untuk Buka
    if (sidebarTrigger) {
        sidebarTrigger.addEventListener('click', () => toggleSidebar(true));
    }

    // Event Listener untuk Tutup (Tombol X dan Backdrop)
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', () => toggleSidebar(false));
    }
    
    if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener('click', () => toggleSidebar(false));
    }
};

/**
 * Opsional: Tambahkan efek scroll pada navbar
 * (Memberikan shadow atau mengubah background saat discroll ke bawah)
 */
export const handleNavbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar?.style.background = 'rgba(0,0,0,0.8)';
            navbar?.style.backdropFilter = 'blur(10px)';
        } else {
            navbar?.style.background = 'rgba(0,0,0,0.3)';
            navbar?.style.backdropFilter = 'none';
        }
    });
};
