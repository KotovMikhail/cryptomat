$('.team__list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  centerMode: false,
  focusOnSelect: true,
  arrows: true
});


$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {

    event.preventDefault();
    let id = $(this).attr('href'),
      pTop = ($(id).css("padding-top")),
      top = ($(id).offset().top) - parseInt(pTop);
    $('body, html').animate({
      scrollTop: top
    }, 1500);
  });
});


document.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (pageYOffset > 0) {
    header.style.transition = 'all ease 0.5s'
    header.style.boxShadow = '0 0 0.3rem #ffffff';
  } else {
    header.style.boxShadow = 'none';
  }
});
