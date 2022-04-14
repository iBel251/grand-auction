const menuBtn = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.top-header ul');
const itemDetails = [
  {
    name: 'name1',
    img: 'images/house.jpg',
    detail1: 'Listen to the introductions about the various items on display.',
    detail2: 'Listen to the introductions about the various items on display.',
  },
  {
    name: 'name2',
    img: 'images/house.jpg',
    detail1: 'Listen to the introductions about the various items on display.',
    detail2: 'Listen to the introductions about the various items on display.',
  },
  {
    name: 'name3',
    img: 'images/house.jpg',
    detail1: 'Listen to the introductions about the various items on display.',
    detail2: 'Listen to the introductions about the various items on display.',
  },
  {
    name: 'name4',
    img: 'images/house.jpg',
    detail1: 'Listen to the introductions about the various items on display.',
    detail2: 'Listen to the introductions about the various items on display.',
  },
  {
    name: 'name5',
    img: 'images/house.jpg',
    detail1: 'Listen to the introductions about the various items on display.',
    detail2: 'Listen to the introductions about the various items on display.',
  },
  {
    name: 'name6',
    img: 'images/house.jpg',
    detail1: 'Listen to the introductions about the various items on display.',
    detail2: 'Listen to the introductions about the various items on display.',
  },
];

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

function renderCards(i) {
  const div = document.createElement('div');

  div.className = 'item-card';

  div.innerHTML = `<i><img src="${itemDetails[i].img}" alt=""></i>
<div class="item-detail">
    <h3>${itemDetails[i].name}</h3>
    <p class="item-discription1">${itemDetails[i].detail1}</p>
    <p class="item-discription2">${itemDetails[i].detail2}</p>
</div>`;
  const cardContainer = document.querySelector('.item-cards-container');
  cardContainer.appendChild(div);
}

for (let i = 0; i < 6; i += 1) {
  renderCards(i);
}
const cards = document.querySelectorAll('.item-card');

function moreCards() {
  for (let i = 2; i < 6; i += 1) {
    if (cards[i].style.display === 'none') {
      cards[i].style.display = 'flex';
    } else {
      cards[i].style.display = 'none';
    }
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    for (let i = 2; i < 6; i += 1) {
      cards[i].style.display = 'flex';
    }
    menuBar.style.transform = 'translateY(0)';
  } else {
    for (let i = 2; i < 6; i += 1) {
      cards[i].style.display = 'none';
    }
    menuBar.style.transform = 'translateY(-110vh)';
  }
});

if (1 === 10) {
  moreCards();
}
