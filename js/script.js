(function () {
  "use strict";

  window.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 1200) {
      const swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  });
})();
