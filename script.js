const menuBtn = document.querySelector('.header__nav-btn');
const menu = document.querySelector('.header__nav ul');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

const anchors = document.querySelectorAll('.header__nav a, .hero__main a');

anchors.forEach(anc => {
    anc.addEventListener('click', function(event) {
        event.preventDefault();

        const id = anc.getAttribute('href');
        const elem = document.querySelector(id);
        if (!elem) return;

        window.scroll({
            top: elem.offsetTop,
            behavior: 'smooth'
        });
    });
});

const swiper2 = new Swiper('.reviews__slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.review__swiper .fa-arrow-right',
        prevEl: '.review__swiper .fa-arrow-left',
    },
});