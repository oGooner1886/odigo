(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 250) {
            header.classList.add('active')
        }else{
            header.classList.remove('active');
        }
    };
}());