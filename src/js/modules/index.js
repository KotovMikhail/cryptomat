$('.team__list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  centerMode: false,
  focusOnSelect: true,
  arrows: true
});

const header = document.querySelector('.header__fixed');

$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    let height = header.getBoundingClientRect().height
    event.preventDefault();
    let id = $(this).attr('href'),
      pTop = ($(id).css("padding-top")),
      top = ($(id).offset().top) - (parseInt(height));
      console.log($(id).offset().top, parseInt(pTop))
    $('body, html').animate({
      scrollTop: top
    }, 1500);
  });
});


document.addEventListener('scroll', function () {
  if (pageYOffset > 1) {
    header.style.transition = 'all ease 0.3s'
    header.style.boxShadow = '0 0 0.3rem #ffffff';
    header.style.backgroundColor = '#01194f';
    header.style.zIndex = '5';
  } else {
    header.style.boxShadow = 'none';
    header.style.backgroundColor = 'transparent';
    header.style.zIndex = '1';
  }
});
