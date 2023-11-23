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

const headerMob = document.querySelector('.meadia__header-mob');

headerMob.addEventListener('click', () => {
  headerModale.classList.toggle('none');
});

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
    headerModale.classList.add('none');
    window.scrollTo({
      top: 750,
      behavior: 'smooth',
    });
  });
});

countries.forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    headerModale.classList.add('none');
    window.scrollTo({
      top: 1540,
      behavior: 'smooth',
    });
  });
});

travelers.forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    headerModale.classList.add('none');
    window.scrollTo({
      top: 2290,
      behavior: 'smooth',
    });
  });
});

window.addEventListener('scroll', function () {
  const currentPosition = window.scrollY;

  const targetElement = document.querySelector('.space__header');
  const spaceFix = document.querySelector('.space__fix');
  const headerImg1 = document.querySelector('.header__left-img1');
  if (currentPosition >= 750) {
    targetElement.classList.add('fixed');
    spaceFix.classList.remove('none');
  } else {
    targetElement.classList.remove('fixed');
    spaceFix.classList.add('none');
    headerImg1.classList.remove('none');
  }
});

// function logScrollPosition() {
//   const scrollPosition = window.scrollY;
//   console.log(scrollPosition);
// }

// window.addEventListener('scroll', logScrollPosition);

window.addEventListener('scroll', function () {
  const currentPosition = window.scrollY;
  const header = document.querySelector('.header');
  const header__scroll = document.querySelector('.header_scroll__space');
  const svg1 = document.querySelector('.meadia__header__svg1 ');
  const svg2 = document.querySelector('.meadia__header__svg2 ');
  const headerImg1 = document.querySelector('.header__left-img1');
  const headerImg3 = document.querySelector('.header__left-img3');
  if (document.body.clientWidth <= 1140 && document.body.clientWidth >= 768) {
    if (currentPosition >= 1) {
      header.classList.add('header__scroll');
      header__scroll.classList.remove('none');
      svg1.classList.add('none');
      svg2.classList.remove('none');
      headerImg1.classList.add('none');
      headerImg3.classList.remove('none');
    } else {
      header.classList.remove('header__scroll');
      header__scroll.classList.add('none');
      svg1.classList.remove('none');
      svg2.classList.add('none');
      headerImg1.classList.remove('none');
      headerImg3.classList.add('none');
    }
  } else {
    header.classList.remove('header__scroll');
    headerImg3.classList.add('none');
    header.classList.remove('header__scroll');
  }

  const headerMobile = document.querySelector('.header__mobile-scroll');
  if (document.body.clientWidth <= 767) {
    const svg1 = document.querySelector('.meadia__header__svg1 ');
    const svg2 = document.querySelector('.meadia__header__svg2 ');
    const header__scroll = document.querySelector('.header_scroll__space');
    if (currentPosition >= 1) {
      headerMobile.classList.remove('none');
      svg1.classList.remove('none');
      svg2.classList.add('none');
    } else {
      headerMobile.classList.add('none');
      header__scroll.classList.add('none');
    }
  } else {
    headerMobile.classList.add('none');
  }

  // console.log(document.body.clientWidth);
});
