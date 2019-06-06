const Images = document.querySelector(".gallery-img");
Images.addEventListener("click", function(event) {
  const image = document.querySelector(".gallery-img.active");
  const currentCard = event.target.parentNode;
  console.log(currentCard.classList.contains("active"));
  if (currentCard.classList.contains("active")) {
    currentCard.classList.remove("active");
  } else {
    event.target.parentNode.classList.add("active");
  }

  if (card) {
    card.classList.remove("active");
  }
});
