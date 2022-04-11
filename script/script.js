const menuBtn = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.top-header ul');
let menuClicked = false;

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('fa-xmark');
  menuBtn.classList.toggle('fa-bars');
  if (window.innerWidth < 768) {
    if (!menuClicked) {
      menuBar.style.transform = 'translateY(0)';
      menuClicked = true;
    } else {
      menuBar.style.transform = 'translateY(-110vh)';
      menuClicked = false;
    }
  }
});