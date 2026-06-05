// src/router/router.js

export const navigateTo = (pageId) => {
    // 1. Sembunyikan semua halaman
    const pages = document.querySelectorAll('.spa-page');
    pages.forEach(page => page.style.display = 'none');

    // 2. Tampilkan halaman yang dituju
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block';
        
        // 3. Update URL (opsional, agar tombol back browser bekerja)
        window.history.pushState({ page: pageId }, "", `#${pageId}`);
    } else {
        console.error(`Halaman ${pageId} tidak ditemukan!`);
    }
};

// 4. Inisialisasi router agar merespon klik menu
export const initRouter = () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            navigateTo(target);
        });
    });
};
