const whoIsUs = document.querySelector(".introduction-card-container");

fetch("/who")
  .then(res => res.json())
  .then(data => {
    data = JSON.parse(data);
    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "introduction-card";
      const img = document.createElement("img");
      const cardTitle = document.createElement("h3");
      const buttonDetails = document.createElement("button");
      buttonDetails.className = "read-more-btn";
      const readMoreArrow = document.createElement("div");
      readMoreArrow.classList = "read-more-arrow";
      const readMoreDetails = document.createElement("div");
      readMoreDetails.className = "read-more-details";

      buttonDetails.addEventListener("click", function(event) {
        const card = document.querySelector(".introduction-card.active");
        const currentCard = event.target.parentNode;

        if (currentCard.classList.contains("active")) {
          currentCard.classList.remove("active");
        } else {
          event.target.parentNode.classList.add("active");
        }

        if (card) {
          card.classList.remove("active");
        }
      });

      const details1 = document.createElement("div");
      const details2 = document.createElement("div");
      const imgInfo = document.createElement("img");
      img.src = item.icon;
      cardTitle.innerHTML = item.title;
      buttonDetails.innerHTML = "Read more";
      details1.innerHTML = item.firstElement;
      details2.innerHTML = item.secondElement;
      imgInfo.src = item.imgDetails;

      card.appendChild(cardTitle);
      card.appendChild(img);
      card.appendChild(buttonDetails);
      buttonDetails.appendChild(readMoreArrow);
      whoIsUs.appendChild(card);
      readMoreDetails.appendChild(details1);
      readMoreDetails.appendChild(details2);
      readMoreDetails.appendChild(imgInfo);
      card.appendChild(readMoreDetails);
    });
  })
  .catch(err => console.log(err));

const reviewsContainer = document.querySelector(".reviews");
fetch("/data")
  .then(res => res.json())
  .then(data => {
    data = JSON.parse(data);
    data.forEach(item => {
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      const reviewDiv = document.createElement("div");
      h3.innerHTML = item.name;
      p.innerHTML = item.guestReview;
      reviewDiv.appendChild(h3);
      reviewDiv.appendChild(p);
      reviewsContainer.appendChild(reviewDiv);
    });
  })
  .catch(err => console.log(err));
const cardContainer = document.querySelector(".card-container");

fetch("/services")
  .then(res => res.json())
  .then(data => {
    data = JSON.parse(data);
    data.forEach(item => {
      const servicesCard = document.createElement("div");
      servicesCard.className = "services-card";
      const h3 = document.createElement("h3");
      const serviceImg = document.createElement("img");
      const p = document.createElement("p");

      h3.innerHTML = item.title;
      serviceImg.src = item.icon;
      p.innerHTML = item.text;
      servicesCard.appendChild(serviceImg);
      servicesCard.appendChild(h3);
      servicesCard.appendChild(p);
      cardContainer.appendChild(servicesCard);
    });
  })
  .catch(err => console.log(err));
