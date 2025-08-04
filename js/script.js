// --- DTX REMODEL - GLOBAL JAVASCRIPT --- //

document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle --- //
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // --- Dynamic Year for Footer --- //
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Active Navigation Link Styling --- //
    // This highlights the link for the current page you are on.
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });

});