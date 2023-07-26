//Menu Icon
const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navBar.classList.toggle('active');
});
//Scroll section
const menuLinks = document.querySelectorAll('.nav-link');

menuLinks.forEach((link) =>
    link.addEventListener('click', (e) => {
        const key = e.target.dataset.key;
        const section = document.querySelector(`.${key}`).getBoundingClientRect().top + window.pageXOffset -90;
        menuIcon.classList.remove('active');
        navBar.classList.remove('active');
        
        window.scrollTo({ top: section, behavior: 'smooth'});
    })
);
//Scroll revela
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});
ScrollReveal().reveal('.contact h1', { origin: 'top' });
ScrollReveal().reveal('.about-content h1', { origin: 'top' });
ScrollReveal().reveal('.home-content h1', { origin: 'top' });
ScrollReveal().reveal('.home-content h3', { origin: 'bottom' });
ScrollReveal().reveal('.photo h1', { origin: 'top' });
//Typed js
const typed = new Typed('.multiple-text', {
    strings: ['Muay Thai', 'K-1', 'Kickboxing', 'MMA'],
    typeSpeed: 100,
    backDelay: 1000,
    loop: true,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    showCursor: false,

});
