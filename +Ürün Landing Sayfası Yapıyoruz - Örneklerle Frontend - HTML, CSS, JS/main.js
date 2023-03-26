const faqItemElements = document.querySelectorAll('.faq-item');

faqItemElements.forEach((element) => {
  element.addEventListener('click', () => {
    /*  faqItemElements.forEach((el) => el.classList.remove('active')); */

    element.classList.toggle('active');
  });
});
