

          
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
      
      //basic lightbox code to check by Gian
      basicLightbox.create(event.target.dataset.original, item.description).show();

      // showModal(event.target.dataset.original, item.description);
    });
  });
}
//sample image button by basic lightbox
document.querySelector('button.image').onclick = () => {
            basicLightbox.create(`
		<img width="1400" height="900" src="https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg" alt="Lighthouse Coast Sea">
	`).show()
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

  window.showModal = function (src, caption) {
    modalImg.src = src;
    captionText.innerHTML = caption;
    modal.style.display = "block";
  };
// }

  

  
