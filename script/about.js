const menuBtn = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.top-header ul');

let menuClicked = false;

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('fa-xmark');
  menuBtn.classList.toggle('fa-bars');
  document.body.classList.toggle('no-scroll');
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

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menuBar.style.transform = 'translateY(0)';
  } else {
    menuBar.style.transform = 'translateY(-110vh)';
  }
});
