import { galleryItems } from './gallery-items.js';
// Change code below this line
import * as basicLightbox from 'basiclightbox';  

const galleryItemsHTML = galleryItems.map((item) => {
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

const galleryRef = document.querySelector(".gallery");
const galleryImageRef = document.querySelector(".galerry__image");

galleryRef.insertAdjacentHTML("afterbegin", galleryItemsHTML);

galleryRef.addEventListener("click", onImageClick);

function onImageClick(e) {
    e.preventDefault();
    
    if (e.target.nodeName !== "IMG") {
        console.log("Click not on image");
        return;
    }
        
    console.log("Click on image");
        e.target.setAttribute("src", e.target.getAttribute("data-source"));

        const instance = basicLightbox.create(e.target);
        instance.show()
        }


