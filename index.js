import imgArr from './gallery-items.js';


const makeImgMark = ({ preview, description, original }) => {
  return `
  <li class = "gallery__item">
  <a class = "gallery__link" href="#">
  <img class = "gallery__image" alt="${description}" src="${preview}" data-source="${original}">
  </a>
  </li>
  `;
}
    
const makeImages = imgArr.map(makeImgMark).join('');
    
const gallery = document.querySelector('.gallery.js-gallery');
gallery.insertAdjacentHTML('afterbegin', makeImages)

const modalEl = document.querySelector(".js-lightbox");
const modalImg = document.querySelector(".lightbox__image");
const closeModalBtn = document.querySelector("button[data-action='close-lightbox']");
const overlay = document.querySelector('.lightbox__overlay');

gallery.addEventListener('click', onClickImgOpen);
closeModalBtn.addEventListener('click', modalClose);
overlay.addEventListener('click', overlayClose);

function onClickImgOpen(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const imgEl = event.target;
    modalImg.src = imgEl.dataset.source;
    modalImg.alt = imgEl.alt;
    modalEl.classList.add('is-open');
}

function modalClose() {
    modalEl.classList.remove('is-open');
    modalImg.src = "";
    modalImg.alt = "";
}

function overlayClose(e) {
    if (e.target === e.currentTarget) {
        modalClose();
    }
    modalImg.src = "";
    modalImg.alt = "";
}

function onClickEscClose(e) {
    if (e.key === 'Escape') {
        modalClose();
    }
}
