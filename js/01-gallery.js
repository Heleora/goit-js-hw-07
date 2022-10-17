import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryItemsMarkup = galleryItems.map((item) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
  <img
  class="gallery__image"
  src="${item.preview}"
  data-source="${item.original}"
  alt="${item.description}"
  />
  </a>
  </div>`
}).join("");


const headRef = document.querySelector("head");
const thisScript = document.querySelector(`script[src="js/01-gallery.js"]`);
const galleryRef = document.querySelector(".gallery");

headRef.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css" />`);

const scriptForAddBasicLightBox = document.createElement("script");
scriptForAddBasicLightBox.src ="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";
thisScript.before(scriptForAddBasicLightBox);

galleryRef.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

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
