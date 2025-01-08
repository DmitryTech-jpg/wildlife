(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.scrollY > 779) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
}());

var modal__window = document.getElementById('modal');
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal__window.style.display = "block";
}
span.onclick = function() {
    modal__window.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal__window) {
        modal__window.style.display = "none";
    };
}
