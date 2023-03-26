let hamburgerMenuWrapperDiv = document.querySelector('.hamburger-lines');
let hamburgerMenuCloseButton = document.querySelector('.hamburger-menu-close');
 

const openHamburgerMenu = () => {
  let hamburgerMenuWrapper = document.querySelector('.hamburger-menu-wrapper');
  hamburgerMenuWrapper.classList.add('hamburger-menu-open');
 
};

const closeHamburgerMenu = () => {
  let hamburgerMenuWrapper = document.querySelector('.hamburger-menu-wrapper');
  hamburgerMenuWrapper.classList.remove('hamburger-menu-open');
   
};

hamburgerMenuWrapperDiv.addEventListener('click', openHamburgerMenu);
hamburgerMenuCloseButton.addEventListener('click', closeHamburgerMenu);
