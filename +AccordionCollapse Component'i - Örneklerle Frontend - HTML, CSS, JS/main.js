const accordionHeader = document.querySelectorAll('.header');

accordionHeader.forEach((element) =>
  element.addEventListener('click', (event) => {
    /* accordionHeader.forEach((el) => el.parentElement.classList.remove('open')); */

    event.currentTarget.parentElement.classList.toggle('open');
  })
);
