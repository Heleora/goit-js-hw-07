import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItemsMarkup = galleryItems.map(({ original, preview, description }) => {
    return `
    <a class="gallery__item" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"/>
    </a>`
  }).join("");

     const galleryRef = document.querySelector(".gallery");
//   const headRef = document.querySelector("head");
//   const thisScript = document.querySelector(`script[src="js/02-lightbox.js"]`);
  
//   headRef.insertAdjacentHTML("beforeend", `<link rel="stylesheet" 
//   href="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.4/simple-lightbox.min.css" 
//   integrity="sha512-ka1/Z+PCN6JAoOVT50Ujjhq74r3hE0r433lM5X3VlLmxXRRkAJIPSXiZlccGx6Syd56QW+rPoYaLHm5iIPthLg==" 
//   crossorigin="anonymous" referrerpolicy="no-referrer" />`);

//   thisScript.insertAdjacentHTML("beforebegin", `<script src="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.4/simple-lightbox.min.js" 
//   integrity="sha512-IKDNPsyNuvwDr8D2nIcJVgNFuj3XXdV0jJ5S6E+nYwl5RiLxrd51TnDJDN1lQJrVdF4K849Lizr12ZCZV81MoA==" 
//   crossorigin="anonymous" 
//   referrerpolicy="no-referrer">
// </script>`)

//   const scriptForAddSimpleLightBox = document.createElement("script");
//   scriptForAddSimpleLightBox.src ="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.4/simple-lightbox.min.js";
//   scriptForAddSimpleLightBox.integrity="sha512-IKDNPsyNuvwDr8D2nIcJVgNFuj3XXdV0jJ5S6E+nYwl5RiLxrd51TnDJDN1lQJrVdF4K849Lizr12ZCZV81MoA==";
//   scriptForAddSimpleLightBox.crossorigin="anonymous";
//   scriptForAddSimpleLightBox.referrerpolicy="no-referrer";

//   thisScript.before(scriptForAddSimpleLightBox);
  
  galleryRef.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

  var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

 