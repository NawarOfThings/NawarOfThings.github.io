const menu = document.querySelector('#menu');
const nav = document.querySelector('.links');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');

    // Optional: Prevent scrolling when menu is open
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

fetch('/footer.html')
  .then(res => res.text())
  .then(html => document.getElementById('footer').innerHTML = html);