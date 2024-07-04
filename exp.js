function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('shrink');
}

function toggleSubmenu(id) {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar.classList.contains('shrink')) {
        const submenu = document.getElementById(id);
        const parentMenuItem = submenu.previousElementSibling;
        submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
        parentMenuItem.classList.toggle('active');
    }
}
