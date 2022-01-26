var typed = new Typed(".typing-3",{
    strings: ["Designer", "UI/UX Designer", "Game Developer", "Web Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// scroll reveal
ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 3500,
    delay: 50
});

// target elements
ScrollReveal().reveal('.section__shadow', { delay: 300, origin: 'top' });
ScrollReveal().reveal('.section__title, .section__subtitle', { delay: 400, origin: 'bottom' });

ScrollReveal().reveal('.gallery__list', { delay: 600, origin: 'bottom' });

ScrollReveal().reveal('.footer__title', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.footer__subtitle', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.footer__links', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.footer__socials', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.footer__copy', { delay: 700, origin: 'bottom' });