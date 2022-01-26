const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// accordion skills
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

const projectsModals = document.querySelectorAll(".projects-model");
const imgCards = document.querySelectorAll(".img-card");
const projectsCloseBtns = document.querySelectorAll(".projects-close-btn");

var projectsModal = function (modalClick) {
    projectsModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        projectsModal(i);
    });
});

projectsCloseBtns.forEach((projectsCloseBtn) => {
    projectsCloseBtn.addEventListener("click", () => {
        projectsModals.forEach((projectsModalView) => {
            projectsModalView.classList.remove("active");
        });
    });
});


// scroll active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// change background header
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// show scroll
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// dark theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

    // Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

    // We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

    // Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// typing animation script
var typed = new Typed(".typing",{
    strings: ["Designer", "UI/UX Designer", "Game Developer", "Web Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2",{
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
ScrollReveal().reveal('.home__title', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.home__subtitle', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home__description', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.home__social a', { delay: 400, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home__blob', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.home__scroll', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.button--flex', { delay: 600, origin: 'bottom' });

ScrollReveal().reveal('.section__shadow', { delay: 300, origin: 'top' });
ScrollReveal().reveal('.section__title, .section__subtitle', { delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.about__img', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.about__description', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.about__info', { delay: 600, origin: 'right' });

ScrollReveal().reveal('.skills__container', { delay: 600, origin: 'bottom' });

ScrollReveal().reveal('.img-card, .gallery__list', { delay: 600, origin: 'bottom' });

ScrollReveal().reveal('.extra__bg', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.extra__title, .extra__img', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.extra__description', { delay: 600, origin: 'right' });

ScrollReveal().reveal('.contact__information i', { delay: 400, origin: 'left', interval: 200 });
ScrollReveal().reveal('.contact__title', { delay: 400, origin: 'left', interval: 200 });
ScrollReveal().reveal('.contact__subtitle', { delay: 400, origin: 'right', interval: 200 });
ScrollReveal().reveal('.contact__form', { delay: 400, origin: 'right' });

ScrollReveal().reveal('.footer__title', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.footer__subtitle', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.footer__links', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.footer__socials', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.footer__copy', { delay: 700, origin: 'bottom' });
