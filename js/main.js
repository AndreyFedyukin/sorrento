//! Блюр для меню
window.addEventListener('scroll', () => {
  const effect = document.querySelector('.menu-blur');
  if (window.scrollY > 100) {
    effect.classList.add('menu-effect');
  } else {
    effect.classList.remove('menu-effect');
  }
});

//! Бургер ***************************
document.addEventListener("DOMContentLoaded", () => {
  const headerBurger = document.querySelector(".header");
  const bodyBurger = document.body;

  const toggleBurger = () => {
    if (headerBurger.classList.contains("open")) {
      closeBurger();
    } else {
      openBurger();
    }
  };

  const openBurger = () => {
    headerBurger.classList.add("open");
    const pagePositionBurger = window.scrollY;
    bodyBurger.classList.add("disable-scroll");
    bodyBurger.dataset.position = pagePositionBurger;
    bodyBurger.style.top = `-${pagePositionBurger}px`;
  };

  const closeBurger = () => {
    headerBurger.classList.remove("open");
    bodyBurger.classList.remove("disable-scroll");
    window.scrollTo(0, parseInt(bodyBurger.dataset.position));
    bodyBurger.style.top = "";
    bodyBurger.dataset.position = "";
  };

  document.querySelector(".burger").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleBurger();
  });

  document.querySelector(".menu").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeBurger();
    }
  });
});

//! подключение библиотеки swiper ***********************************************
let swiper = new Swiper(".gallery-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".gallery__btn-next",
    prevEl: ".gallery__btn-prev"
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    834: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 65,
    },
  },
});

//! подключение библиотеки swiper-2 ***********************************************
let dishes = new Swiper(".dishes-swiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".dishes__btn-next",
    prevEl: ".dishes__btn-prev"
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    834: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
});
