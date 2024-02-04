

          
import { galleryItems } from "./gallery-items.js";
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  renderGalleryItems(galleryItems, gallery);
  // setupModal();
});

function renderGalleryItems(items, galleryElement) {
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("gallery__item");

    const image = document.createElement("img");
    image.src = item.preview;
    image.alt = item.description;
    image.dataset.original = item.original; // Store the original image URL
    image.classList.add("gallery__image");

    listItem.appendChild(image);
    galleryElement.appendChild(listItem);

console.log(item.original);

    listItem.addEventListener("click", function (event) {
      event.preventDefault();
      const instance = basicLightbox.create (`
		<img src=${item.original} alt=${item.description}>
	`).show();
      window.onkeydown = function (event) {
    event.preventDefault();
      if (event.keyCode == 27) {
        // const modal = document.getElementById("imageModal");
        //   modal.style.display = "none";
        console.log("escape")
        instance.close()
        console.log(basicLightbox.visible());

      };
}
         }); 
    
      // hide this code and use basic lightbox instead
      // showModal(event.target.dataset.original, item.description);
    
    
  });
} 


// function setupModal() {
//   const modal = document.getElementById("imageModal");
//   const modalImg = document.getElementById("fullImage");
//   const captionText = document.getElementById("caption");
//   const closeBtn = document.querySelector(".close");

//   closeBtn.onclick = function () {
//     modal.style.display = "none";
//   };

//   window.onclick = function (event) {
//     if (event.target === modal) {
//       modal.style.display = "none";
//     }
//   };

  // window.showModal = function (src, caption) {
  //   modalImg.src = src;
  //   captionText.innerHTML = caption;
  //   modal.style.display = "block";
  // };
// }

  

  
