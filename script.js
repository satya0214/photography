var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
  });


var navbar = document.getElementsByClassName("navbar");

var runOnScroll = function (evt) {
    const scroll = document.documentElement.scrollTop
    if (scroll > 0) {
      navbar[0].classList.add("sticky");
    } else {
      navbar[0].classList.remove("sticky")
    }
  };
  var elements = document.querySelectorAll("body");
  elements = Array.prototype.slice.call(elements);
  elements.forEach(function (element) {
    window.addEventListener("scroll", runOnScroll, { passive: true });
  });