(function () {
  "use strict";

  window.addEventListener("DOMContentLoaded", function () {
    if (this.document.querySelectorAll(".swiper").length) {
      var swiper = new Swiper(".swiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
      });
    }
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

(function () {
  "use strict";

  window.addEventListener("DOMContentLoaded", function () {
    const countBtn = document.querySelectorAll(".section__item .btn");
    const btnMinus = document.querySelectorAll(".section__item .minus");
    const btnPlus = document.querySelectorAll(".section__item .plus");
    const count = document.querySelectorAll(".section__item__count p");

    countBtn.forEach((btn) => {
      btn.addEventListener("click", function () {
        const parent = btn.closest(".section__item");
        parent.classList.add("active");
      });
    });

    btnMinus.forEach((btn) => {
      btn.addEventListener("click", function () {
        const parent = btn.closest(".section__item");
        const count = parent.querySelector(".section__item__count > p");
        if (parseInt(count.textContent) > 1) {
          count.textContent = parseInt(count.textContent) - 1;
        } else {
          parent.classList.remove("active");
        }
      });
    });

    btnPlus.forEach((btn) => {
      btn.addEventListener("click", function () {
        const parent = btn.closest(".section__item");
        const count = parent.querySelector(".section__item__count > p");
        count.textContent = parseInt(count.textContent) + 1;
      });
    });
  });
})();

(function () {
  "use strict";

  window.addEventListener("DOMContentLoaded", function () {
    const headerBurger = document.querySelector(".header__burger");
    const header = document.querySelector("#header");

    headerBurger.addEventListener("click", function () {
      header.classList.toggle("active");
    });
  });
})();

(function () {
  "use strict";

  window.addEventListener("DOMContentLoaded", function () {
    const historyOpen = document.querySelectorAll(
      ".history__wrapper__item__details.open"
    );
    const historyClose = document.querySelectorAll(
      ".history__wrapper__item__details.hide"
    );

    if (historyOpen) {
      historyOpen.forEach((btn) => {
        btn.addEventListener("click", function () {
          btn.classList.add("d-none");
          btn.nextElementSibling.classList.add("isOpen");
        });
      });

      historyClose.forEach((btn) => {
        btn.addEventListener("click", function () {
          historyOpen.forEach((el) => {
            el.classList.remove("d-none");
          });
          btn.parentElement.classList.remove("isOpen");
        });
      });
    }
  });
})();
