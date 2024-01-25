

          
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

    document.querySelector('button.image').onclick = () => {
            basicLightbox.create(image.src).show()
          }
console.log(item.original);

    listItem.addEventListener("click", function (event) {
      event.preventDefault();
          
      showModal(event.target.dataset.original, item.description);
    });
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

  window.showModal = function (src, caption) {
    modalImg.src = src;
    captionText.innerHTML = caption;
    modal.style.display = "block";
  };
// }

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("fullImage");
  const captionText = document.getElementById("caption");
  
// document.querySelector('button.image').onclick = () => {
//             basicLightbox.create(`
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`).show()
//           }
  
