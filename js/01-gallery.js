import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function createGalleryItem({ original, preview, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
}

function selectGalleryEl(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  const instance = basicLightbox.create(
    `<img class="gallery__image-big" src="${event.target.dataset.source}">`,
    {
      onShow: () => {
        instance.element().classList.add('fade-in');
      },
      onClose: () => {
        instance.element().classList.add('fade-out');
      },
    },
  );

  instance.show();
}

const galleryCardsSet = galleryItems.map(createGalleryItem).join('');

galleryList.insertAdjacentHTML('beforeend', galleryCardsSet);
galleryList.addEventListener('click', selectGalleryEl);
