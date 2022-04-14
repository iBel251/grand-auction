const menuBtn = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.top-header ul');
const itemDetails = [
  {
    name: 'Gold Chalice',
    img: 'images/goldcup.jpg',
    detail1: 'Gold chalice from Ethiopia looted by British soldiers at Magdala.',
    detail2: 'Old gold chalice taken from Ethiopia at the battle of Magdala in 1868.',
  },
  {
    name: 'Emperial Watch',
    img: 'images/watch.jpg',
    detail1: 'Historical pocket watch made for Ethiopian Emperror.',
    detail2: 'Ancient pocket watch said to be the property of Emperror Haile Selassie of Ethiopia.',
  },
  {
    name: 'Beatles Record',
    img: 'images/beatles.jpg',
    detail1: 'Beatles Sgt. Pepper\'s \'Lonely Hearts Club\' Vinyl Record',
    detail2: 'Listen to the introductions about the various items on display.',
  },
  {
    name: 'RCA Victor Radios',
    img: 'images/radios.jpg',
    detail1: 'Founded in 1919 as a subsidiary of General Electric, the Radio Corporation of America (RCA) was a pioneer in the radio industry.',
    detail2: 'Wooden radios that dominated the marketplace in the \'30s and \'40s. Colorful tube radios make of Bakelite and, later, other nonresin plastics.',
  },
  {
    name: 'First Edition Books',
    img: 'images/books.jpg',
    detail1: 'Old and rare first edition books on display.',
    detail2: 'Rare first edition of Tolstoy\'s War and Peace, one of the greatest novels ever written, in the original Russian. Handsomely bound, with the original printed paper front wrappers of parts 2-5 bound in.',
  },
  {
    name: 'Royal Typewriters',
    img: 'images/typewriter.jpg',
    detail1: 'The Brooklyn-based Royal Typewriter company introduced their portable version in 1926.',
    detail2: 'Designed to minimize the clackety-clack of the keys, it was the top of the line at the time, says antiques expert Helaine Fendelman.',
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
const morebtn = document.querySelector('.more');
const lessbtn = document.querySelector('.less');
let opened = false;

function moreCards() {
  if (!opened) {
    for (let i = 2; i < 6; i += 1) {
      cards[i].style.display = 'flex';
    }
    opened = true;
    morebtn.classList.toggle('hide-item');
    lessbtn.classList.toggle('hide-item');
  } else {
    for (let i = 2; i < 6; i += 1) {
      cards[i].style.display = 'none';
    }
    opened = false;
    morebtn.classList.toggle('hide-item');
    lessbtn.classList.toggle('hide-item');
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
