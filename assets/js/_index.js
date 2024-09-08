// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";
// banner
var swiper_header = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// banner mobile
var swiper_header = new Swiper(".mySwiper-sm", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Course -right
const swiper_course = new Swiper(".course-container", {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
  },
});

// Course left
const swiper_course_nav = new Swiper(".course-nav-container", {
  slidesPerView: 3,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 8,

      grid: {
        rows: 3,
        fill: "row",
      },
    },
  },
});

// popular Courses
const swiper_course_popular = new Swiper(".course-container-popular", {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
  },
});

// recommended Courses
const swiper_course_recommended = new Swiper(".course-container-recommended", {
  slidesPerView: 1,
  grid: {
    rows: 2,
    fill: "row",
  },
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      grid: {
        rows: 4,
        fill: "row",
      },
    },
  },
});

//

const swiper_recommended_teacher = new Swiper(
  ".recommended-teacher-container",
  {
    slidesPerView: 1,
    spaceBetween: 24,
    cssMode: true,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        grid: {
          rows: 1,
          fill: "row",
        },
      },
    },
  }
);

// intro courses
const swiper_course_intro = new Swiper(".course-container-intro", {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    768: {
      slidesPerView: 4,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
  },
});
