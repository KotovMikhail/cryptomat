(() => {

  window.btnBurger = document.querySelector('.header__burger');
  window.btnClose = document.querySelector('.header__close');
  window.headerFixed = document.querySelector('.header__fixed');
  window.body = document.querySelector('.body');

  window.menuOpen = () => {
    window.btnBurger.addEventListener(`click`, window.menuClose);
    document.addEventListener(`keydown`, window.onEscPress);
    window.btnBurger.removeEventListener(`click`, window.menuOpen);
    window.body.classList.add('menu-opened');
    window.headerWrap.style.transition = 'none';


    // overlay.classList.add(Class.OVERLAY_SHOW);
    // overlay.addEventListener(`click`, menuClose;
  }

  window.menuClose = () => {
    window.headerFixed.classList.remove('header__fixed--open');
    window.btnBurger.removeEventListener(`click`, window.menuClose);
    window.btnBurger.addEventListener(`click`, window.menuOpen);
    window.body.classList.remove('menu-opened');
  }

  window.onEscPress = (evt) => {
    // if (
    //   this.menu.classList.contains(Class.MENU_OPEN) &&
    //   e.keyCode === ESC_KEYCODE
    // ) {
    //   this.menuClose();
    // }
  }


  window.btnBurger.addEventListener('click', window.menuOpen);
  // btnClose.addEventListener('click', menuClose);

})();
