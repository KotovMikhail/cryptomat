(function () {
  document.addEventListener(`click`, (evt) => {
    let btn;

    if (evt.target.classList.contains(`faq__question`)) {
      btn = evt.target;
    } else if (evt.target.parentElement.classList.contains(`faq__question`)) {
      btn = evt.target.parentElement;
    }

    if (btn) {
      let block = btn.parentElement;
      if (block.classList.contains(`faq__block--opened`)) {
        setTimeout(() => {
          block.classList.remove(`faq__block--opened`);
        }, 100);
      } else {
        block.classList.add(`faq__block--opened`);
      }
    }
  }, true);
})();
