const about = document.querySelectorAll('.about');
const countries = document.querySelectorAll('.countries');
const travelers = document.querySelectorAll('.travelers');

const openModale = document.querySelector('.profile__text__button');
const closeModale = document.querySelector('.profile__modale__bottom-close');
const modale = document.querySelector('.profile__modale');

const interestedButton = document.querySelector('.interested__title');
const footer = document.querySelector('.footer');

const headerMedia = document.querySelector('.meadia__header');
const headerModale = document.querySelector('.header__modale');

const headerMediaClose = document.querySelector('.header__modale__top-img2');

headerMedia.addEventListener('click', function () {
  headerModale.classList.remove('none');
});

headerMediaClose.addEventListener('click', function () {
  headerModale.classList.add('none');
});

openModale.addEventListener('click', function () {
  modale.classList.remove('none');
});
closeModale.addEventListener('click', function () {
  modale.classList.add('none');
});

interestedButton.addEventListener('click', function () {
  footer.classList.toggle('none');
  window.scrollTo({
    top: 3752,
    behavior: 'smooth',
  });
});

about.forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 750,
      behavior: 'smooth',
    });
  });
});

countries.forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 1540,
      behavior: 'smooth',
    });
  });
});

travelers.forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 2290,
      behavior: 'smooth',
    });
  });
});

// 750

window.addEventListener('scroll', function () {
  const currentPosition = window.scrollY;

  const targetElement = document.querySelector('.space__header');
  const spaceFix = document.querySelector('.space__fix');

  if (currentPosition >= 750) {
    targetElement.classList.add('fixed');
    spaceFix.classList.remove('none');
  } else {
    targetElement.classList.remove('fixed');
    spaceFix.classList.add('none');
  }
});

// function logScrollPosition() {
//   const scrollPosition = window.scrollY;
//   console.log(scrollPosition);
// }

// window.addEventListener('scroll', logScrollPosition);
