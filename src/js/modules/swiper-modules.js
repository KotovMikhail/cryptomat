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



const mql = window.matchMedia(`(max-width: 999px)`);

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

(function ($) {
  // Init ScrollMagic
  let ctrl = new ScrollMagic.Controller();

  let scene = new ScrollMagic.Scene({
      triggerElement: '.about__descr',
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "120%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50
    })
    .setClassToggle('.about__descr', 'about__descr--show')
    .addTo(ctrl);

  let scene2 = new ScrollMagic.Scene({
      triggerElement: '.paper__descr',
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50
    })
    .setClassToggle('.paper__descr', 'paper__descr--show')
    .addTo(ctrl);

  let scene3 = new ScrollMagic.Scene({
      triggerElement: '.roadmap__descr',
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50
    })
    .setClassToggle('.roadmap__descr', 'roadmap__descr--show')
    .addTo(ctrl);

  $('.title').each(function () {
    let scene4 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0
      })
      .setClassToggle(this, 'show')
      .addTo(ctrl);
  });




})(jQuery);

const flightPath = {
  curviness: 0,
  autoRotate: false,
  values: [{
      x: 50,
      y: -10
    },
    {
      x: 0,
      y: -20
    },
    {
      x: 0,
      y: -50
    },
    {
      x: 0,
      y: -window.innerHeight
    }
  ]
}


const mobileWidth = window.matchMedia(`(max-width: 767px)`);

const widthAnimateInit = (width) => {

  if (!width.matches) {
    const tween = new TimelineLite();

    tween.to('.present__coin--first', 0.3, {
        yPercent: -100,
        xPercent: -50,
        autoAlpha: 0,
        ease: Power4.easeInOut
      })
      .to('.present__coin--second', 0.3, {
        yPercent: -100,
        xPercent: -20,
        autoAlpha: 0,
        ease: Power4.easeInOut
      })
      .to('.present__coin--third', 0.3, {
        yPercent: -100,
        xPercent: 50,
        autoAlpha: 0,
        ease: Power4.easeInOut

      });

    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
        triggerElement: '.header',
        duration: 800,
        triggerHook: 0
      })
      .setTween(tween)
      .setPin('.header')
      .addTo(controller);


    // IEO animate

    const tween2 = new TimelineLite();

    tween2.to('.ieo__img-coin--first', 0.3, {
        yPercent: -50,
        xPercent: -20,
        autoAlpha: 1,
        ease: Power4.easeInOut
      })
      .to('.ieo__img-coin--second', 0.3, {
        yPercent: -50,
        xPercent: 20,
        autoAlpha: 1,
        ease: Power4.easeInOut
      });

    const controller2 = new ScrollMagic.Controller();

    const scene2 = new ScrollMagic.Scene({
        triggerElement: '.ieo',
        duration: 800,
        triggerHook: 0.1
      })
      .setTween(tween2)
      .setPin('.ieo')
      .addTo(controller2);


    // FAQ animate

    const flightPath = {
      curviness: 1.25,
      autoRotate: true,
      values: [{
          x: 100,
          y: -50
        },
        {
          x: 150,
          y: -200
        },
        {
          x: 0,
          y: -80
        },
        {
          x: 0,
          y: 0
        },

        {
          x: window.innerWidth,
          y: 0
        }

      ]
    };

    const flightPath2 = {
      curviness: 1.25,
      autoRotate: true,
      values: [
        {
          x: 100,
          y: -50
        },
        {
          x: 150,
          y: -200
        },
        {
          x: 0,
          y: -80
        },
        {
          x: 100,
          y: -50
        },
        {
          x: 150,
          y: -200
        },
        {
          x: 0,
          y: -80
        },
        {
          x: 0,
          y: 0
        },

        {
          x: window.innerWidth,
          y: 0
        }

      ]
    };

    const tween3 = new TimelineLite();

    tween3.add(
        TweenLite.to('.faq__img--plane-big', 1, {
          bezier: flightPath,
          ease: Power1.easeInOut,
          autoAlpha: 1
        }))
      .add(
        TweenLite.to('.faq__img--plane-small', 1.5, {
          bezier: flightPath2,
          ease: Power1.easeInOut,
          autoAlpha: 1
        }))

    const controller3 = new ScrollMagic.Controller();

    const scene3 = new ScrollMagic.Scene({
        triggerElement: '.faq',
        duration: 2000,
        triggerHook: 0.1
      })
      .setTween(tween3)
      .setPin('.faq')
      .addTo(controller3);


  }

};

widthAnimateInit(mobileWidth)
mobileWidth.addListener(widthAnimateInit);
