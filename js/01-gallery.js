import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox';  

const galleryItemsHTML = galleryItems.map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`
}).join("");

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("afterbegin", galleryItemsHTML);

galleryRef.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();
  
  const opts = {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscClose);
    },      
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscClose);
    },
  };

    if (e.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}"></img>`, opts);
    
    instance.show();

  function onEscClose(e) {
  if (e.code === "Escape") {
  instance.close();
}
}
}
