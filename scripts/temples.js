document.addEventListener("DOMContentLoaded", function() {
    // Set the current year in the footer
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Set the last modified date
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

    // Hamburger menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    });
});
