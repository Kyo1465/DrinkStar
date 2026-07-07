const menuBtn = document.querySelector('.header__nav-btn');
const menu = document.querySelector('.header__nav-list');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        const isActive = menu.classList.toggle('active');
        menuBtn.setAttribute('aria-expanded', isActive);
    });

    menuBtn.setAttribute('aria-expanded', menu.classList.contains('active'));
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

        if (menu && menu.classList.contains('active')) {
            menu.classList.remove('active');
            if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

const scrollTopBtn = document.querySelector('.scroll-top-btn');

if (scrollTopBtn) {
    const toggleScrollTopBtn = () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    };

    window.addEventListener('scroll', toggleScrollTopBtn);
    toggleScrollTopBtn();

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

const swiper2 = new Swiper('.reviews__slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.review__swiper .fa-arrow-right',
        prevEl: '.review__swiper .fa-arrow-left',
    },
});