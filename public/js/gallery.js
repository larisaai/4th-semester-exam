let galleryImages = document.querySelectorAll("#gallery img");
let galleryImages2 = document.querySelectorAll("#gallery2 img");

for (i = 0; i < galleryImages.length; i++) {
  galleryImages[i].addEventListener("click", function() {
    const image = document.querySelector(".active .gallery-img");
    const currentImg = event.target.parentNode;
    console.log(currentImg.classList.contains("active"));
    if (currentImg.classList.contains("active")) {
      currentImg.classList.remove("active");
    } else {
      event.target.parentNode.classList.add("active");
    }
    if (image) {
      image.classList.remove("active");
    }
  });
}
for (i = 0; i < galleryImages2.length; i++) {
  galleryImages2[i].addEventListener("click", function() {
    const image2 = document.querySelector(".active .gallery-img");
    const currentImg2 = event.target.parentNode;
    console.log(currentImg.classList.contains("active"));
    if (currentImg2.classList.contains("active")) {
      currentImg2.classList.remove("active");
    } else {
      event.target.parentNode.classList.add("active");
    }
    if (image2) {
      image2.classList.remove("active");
    }
  });
}
