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
