import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function createGalleryItem({ original, preview, description }) {
  return `
    <li class="gallery__item" id="item">
      <a class="gallery__link" href="${original}" data-preview="${preview}">
        <img class="gallery__image" src="${preview}" alt="${description}">
      </a>
    </li>
  `;
}

function createGallery(galleryItems) {
  return galleryItems.map(createGalleryItem).join('');
}

const galleryCardsSet = createGallery(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryCardsSet);

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
  style: {
    transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out',
  },
});

lightbox.on('open', () => {
  const galleryItemElement = document.querySelector('.gallery-item');
  galleryItemElement.style.transform = 'scale(1.2)';
});

lightbox.on('close', () => {
  const galleryItemElement = document.querySelector('.gallery-item');
  galleryItemElement.style.transform = 'rotate(0)';
});
