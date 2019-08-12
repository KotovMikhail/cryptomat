(() => {
  window.initPages = () => {
    let mainPage = document.querySelector(`.main`);
    let short = document.querySelector(`.page-short`);
    let about = document.querySelector(`.about-short`);

    if (mainPage) {
      document.body.classList.add(`is-main`);
    }

    if (short) {
      document.body.classList.add(`has-short`);
    }

    if (about) {
      document.body.classList.add(`is-about`);
    }
  }
})();
