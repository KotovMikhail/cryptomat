(() => {

const btnBurger = document.querySelector('.header__burger');
const btnClose = document.querySelector('.header__close');
const headerFixed = document.querySelector('.header__fixed');

const menuOpen = () => {
    btnClose.addEventListener(`click`, menuClose);
    document.addEventListener(`keydown`, onEscPress);
    btnBurger.removeEventListener(`click`, menuOpen);
    headerFixed.classList.add('header__fixed--open');

    // overlay.classList.add(Class.OVERLAY_SHOW);
    // overlay.addEventListener(`click`, menuClose;
}

const menuClose = () => {
  headerFixed.classList.remove('header__fixed--open');
  btnBurger.addEventListener(`click`, menuOpen);


}

const onEscPress =(evt) => {
  // if (
  //   this.menu.classList.contains(Class.MENU_OPEN) &&
  //   e.keyCode === ESC_KEYCODE
  // ) {
  //   this.menuClose();
  // }
}


btnBurger.addEventListener('click', menuOpen);
btnClose.addEventListener('click', menuClose);

})();
