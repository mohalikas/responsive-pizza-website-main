/*=============== SHOW MENU ===============*/

// ========== MENU SHOW/HIDE ==========
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show menu
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Hide menu
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// Remove menu on nav link click (mobile)
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD SHADOW HEADER ===============*/


/*=============== SWIPER POPULAR ===============*/


/*=============== SHOW SCROLL UP ===============*/ 

// ========== SCROLL UP BUTTON ==========
const scrollUp = document.getElementById('scroll-up');
window.addEventListener('scroll', () => {
  if(window.scrollY >= 350){
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// ========== ACTIVE LINK ON SCROLL ==========
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
    if(navLink){
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        navLink.classList.add('active-link');
      } else {
        navLink.classList.remove('active-link');
      }
    }
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

// ========== SCROLLREVEAL ANIMATION ==========
if (window.ScrollReveal) {
  ScrollReveal().reveal('.section__title, .home__title, .home__description, .home__button, .home__img, .about__img, .about__data, .popular__card, .recipe__img, .recipe__data, .products__card, .contact__img, .contact__content', {
    interval: 100,
    distance: '40px',
    duration: 800,
    origin: 'bottom',
    reset: false
  });
}

