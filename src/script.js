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

window.addEventListener("resize", AutoScale);

AutoScale();

function AutoScale() {
    let width = window.innerWidth;
    if(width > 1280) {
        ChangeScale("high"); // big normal small little
    }
    else if(width <= 1280 && width > 720) {
        ChangeScale("big");
    }
    else if(width < 720) {
        ChangeScale("small");
    }
}

