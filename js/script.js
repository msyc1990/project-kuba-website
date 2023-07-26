//Menu Icon
const menuIcon = document.querySelector('.menu-icon');
const menuLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', ()=> {
    menuIcon.classList.toggle('active');
    menuLinks.classList.toggle('active');
});
//Change Nav Bar
const navabrEl = document.querySelector('.nav-bar');
const containerEl = document.querySelector('section')

window.addEventListener('scroll', ()=>{
    if (window.scrollY > containerEl.offsetTop - navabrEl.offsetHeight - 50 ){
        navabrEl.classList.add('active');
    } else {
        navabrEl.classList.remove('active');
    }
});
