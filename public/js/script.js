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
      const button = document.createElement("button");
      img.src = item.icon;
      cardTitle.innerHTML = item.title;
      button.innerHTML = "Read more";

      card.appendChild(cardTitle);
      card.appendChild(img);
      card.appendChild(button);
      whoIsUs.appendChild(card);
    });
  })
  .catch(err => console.log(err));

const reviewsDiv = document.querySelector(".reviews");
fetch("/data")
  .then(res => res.json())
  .then(data => {
    data = JSON.parse(data);
    data.forEach(item => {
      const h1 = document.createElement("h1");
      const p = document.createElement("p");
      h1.innerHTML = item.name;
      p.innerHTML = item.guestReview;
      reviewsDiv.appendChild(h1);
      reviewsDiv.appendChild(p);
    });
  })
  .catch(err => console.log(err));
