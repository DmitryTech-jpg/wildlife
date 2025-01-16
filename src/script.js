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

const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModal = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

openModalButton.addEventListener("click", function() {
    modal.style.display = "block";
});

window.onclick = closeModal;

document.getElementById("confirmButton").onclick = function() {
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const comment = document.getElementById("comment").value;

    alert(`You successfully sent a donation of ${amount} from ${name} with comment: "${comment}"!`);

    document.getElementById("modal").style.display = "none";
}

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.getElementById('email').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailAddress = document.getElementById('email__alert').value;
    alert(`You successfully send message to ${emailAddress}!`);
}); // забыл переключиться на ветку чтобы закрыть задачу