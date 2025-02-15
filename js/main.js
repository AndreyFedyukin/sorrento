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

  const toggleBurger = () => {
    headerBurger.classList.toggle("open");
  };

  document.querySelector(".burger").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleBurger();
  });

  document.querySelector(".menu").addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("menu-link")) {
      headerBurger.classList.remove("open");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      headerBurger.classList.remove("open");
    }
  });
});

//! подключение библиотеки swiper галереи ***********************************************
let swiper = new Swiper(".gallery-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
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

//! подключение библиотеки swiper блюд ***********************************************
let dishes = new Swiper(".dishes-swiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
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
