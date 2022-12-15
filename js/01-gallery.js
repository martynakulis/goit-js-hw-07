import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

let instance = basicLightbox.create(`
    <img src="" alt="">
`);

galleryItems.forEach(item => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');
  gallery.append(galleryItem);

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.setAttribute('href', item.original);
  galleryItem.append(galleryLink);

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.alt = item.description;
  image.setAttribute('data-source', item.original);
  galleryLink.append(image);
});

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  instance = basicLightbox.create(`
    <img src="${event.target.getAttribute('data-source')}" alt="${event.target.getAttribute(
    'alt'
  )}">
`);
  instance.show();
});

gallery.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    instance.close();
  }
});
