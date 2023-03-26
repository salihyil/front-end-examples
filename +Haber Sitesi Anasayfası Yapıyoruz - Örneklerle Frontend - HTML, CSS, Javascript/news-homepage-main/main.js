let hamburgerMenuOpenButton = document.querySelector('.hamburger-menu-open');
let hamburgerMenuCloseButton = document.querySelector('.hamburger-menu-close');

const openHamburgerMenu = () => {
  const mobilemenu = document.querySelector('.hamburger-menu-wrapper');
  mobilemenu.classList.add('open');
};

const closeHamburgerMenu = () => {
  const mobilemenu = document.querySelector('.hamburger-menu-wrapper');
  mobilemenu.classList.remove('open');
};

hamburgerMenuOpenButton.addEventListener('click', openHamburgerMenu);
hamburgerMenuCloseButton.addEventListener('click', closeHamburgerMenu);
