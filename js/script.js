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

  window.addEventListener("scroll", function (event) {
    const upBtn = document.querySelector(".up");
    const cartBtn = document.querySelector(".cart-fixed ");

    if (window.scrollY > 200) {
      upBtn.classList.add("sticky");
      cartBtn.classList.add("sticky");
    } else {
      upBtn.classList.remove("sticky");
      cartBtn.classList.remove("sticky");
    }
  });
})();
