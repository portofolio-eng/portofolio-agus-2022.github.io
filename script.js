const humberger =document.querySelector('.humberger input');
const nav =document.querySelector('nav ul');

humberger.addEventListener('click', function() {
    nav.classList.toggle('slide');
});