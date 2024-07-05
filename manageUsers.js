function toggleNavbar() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('shrink');
    if (navbar.classList.contains('shrink')) {
        closeAllSubmenus();
    }
}

function toggleSubmenu(id, element) {
    var submenu = document.getElementById(id);
    var arrow = element.querySelector('.arrow');
    if (submenu.style.display === 'flex') {
        submenu.style.display = 'none';
        arrow.classList.remove('expand');
    } else {
        closeAllSubmenus();
        submenu.style.display = 'flex';
        arrow.classList.add('expand');
    }
}

function closeAllSubmenus() {
    var submenus = document.querySelectorAll('.submenu');
    var arrows = document.querySelectorAll('.arrow');
    submenus.forEach(submenu => submenu.style.display = 'none');
    arrows.forEach(arrow => arrow.classList.remove('expand'));
}