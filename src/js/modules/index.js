$('.team__list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  dotsClass: 'slick-dots',
  centerMode: false,
  focusOnSelect: false,
  draggable: true,
  arrows: false,
  responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

});

window.window.headerWrap = document.querySelector('.header__wrap');
const langItem = document.querySelector('.lang__item');
const subList = document.querySelector('.lang__sub-list');



$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {

    window.body.classList.remove('menu-opened');
    window.btnBurger.removeEventListener(`click`, window.menuClose);
    window.btnBurger.addEventListener(`click`, window.menuOpen);

    if (!this.classList.contains('nav__link--download')) {
      event.preventDefault();
      let id = $(this).attr('href');

      let pTop = ($(id).css("padding-top"));
      let pageTop = ($(id).offset().top) - (parseInt(pTop));

      $('body, html').animate({
        scrollTop: pageTop
      }, 500);
    }
  });
});

$(document).ready(function () {
  $("#menu-footer").on("click", "a", function (event) {


    if (!this.classList.contains('nav__link--download')) {
      event.preventDefault();
      let id = $(this).attr('href');

      let pTop = ($(id).css("padding-top"));
      let pageTop = ($(id).offset().top) - (parseInt(pTop));

      $('body, html').animate({
        scrollTop: pageTop
      }, 500);
    }
  });
});


document.addEventListener('scroll', function () {
  if (pageYOffset > 1) {
    window.headerWrap.style.transition = 'all ease 0.3s'
    window.headerWrap.style.boxShadow = '0 0 0.3rem #ffffff';
    window.headerWrap.style.backgroundColor = 'rgba(1, 25, 79, 0.95)';
    window.headerWrap.style.zIndex = '5';
  } else {
    window.headerWrap.style.boxShadow = 'none';
    window.headerWrap.style.backgroundColor = '';
    window.headerWrap.style.zIndex = '50';
  }
});

langItem.addEventListener('click', (evt) => {
  evt.preventDefault();
  subList.classList.toggle('lang__sub-list--open');
});
