(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const menuClose = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__menu_active');
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header__menu_active');
    })
}());