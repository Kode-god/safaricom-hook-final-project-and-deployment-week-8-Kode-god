// Opens the lightbox with clicked image
function openLightbox(imageSrc) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "block";
  lightboxImg.src = imageSrc;
}

// Closes the lightbox
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}