const mql = window.matchMedia(`(max-width: 999px)`);

let swiper1 = new Swiper('.swiper-container-s1', {
  slidesPerView: 2,
  paginationClickable: true,
  pagination: '.swiper-pagination-s1',
  loop: true,
  breakpointsInverse: true,
  spaceBetween: 80,
  speed: 3000,
  autoplay: {
    delay: 15000,
    disableOnInteraction: false
  },
  breakpoints: {
    1023: {
      spaceBetween: 50
    },
    999: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    374: {
      slidesPerView: 1,
      spaceBetween: 50
    }
  }

});

const widthInit = (width) => {
  if (width.matches) {
    let swiper2 = new Swiper(`.swiper-container-s2`, {
      slidesPerView: 2,
      loop: true,
      breakpointsInverse: true,
      spaceBetween: 10,
      breakpoints: {
        999: {
          slidesPerView: 2,
          loop: true,
          breakpointsInverse: true,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      }
    });

    let swiper3 = new Swiper(`.swiper-container-s3`, {
      slidesPerView: 2,
      loop: true,
      breakpointsInverse: true,
      spaceBetween: 10,
      breakpoints: {
        999: {
          slidesPerView: 2,
          loop: true,
          breakpointsInverse: true,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      }
    });

    let swiper4 = new Swiper(`.swiper-container-s4`, {
      slidesPerView: 4,
      loop: false,
      breakpointsInverse: true,
      spaceBetween: 10,
      breakpoints: {
        999: {
          slidesPerView: 4,
          spaceBetween: 35,

        },
        767: {
          slidesPerView: 4.64,
          spaceBetween: 30
        },
        375: {
          slidesPerView: 3.64,
          spaceBetween: 30
        }
      }
    });
  }
};

widthInit(mql);
mql.addListener(widthInit);

// (function ($) {
//   // Init ScrollMagic
//   var ctrl = new ScrollMagic.Controller({
//     globalSceneOptions: {
//       triggerHook: 'onLeave'
//     }
//   });

//   $("#img").each(function () {

//     new ScrollMagic.Scene({
//         triggerElement: this
//       })
//       .setPin(this)
//       .addTo(ctrl);

//   });

// })(jQuery);
