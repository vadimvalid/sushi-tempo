(function () {
  "use strict";

  window.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
    });
  });
})();
