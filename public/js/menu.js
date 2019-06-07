const dropdown = [...document.querySelectorAll(".menu-item-btn")].map(item => {
  item.addEventListener("click", e => {
    const currentMenuItem = e.target.parentNode;
    const menuItem = document.querySelector(".menu-item.active");

    if (currentMenuItem.classList.contains("active")) {
      currentMenuItem.classList.remove("active");
    } else {
      currentMenuItem.classList.add("active");
    }

    if (menuItem) {
      menuItem.classList.remove("active");
    }
  });
});

const burger = document.querySelector(".burger-menu");
const parent = document.querySelector(".menu");

burger.addEventListener("click", function() {
  if (parent.classList.contains("open")) {
    parent.classList.remove("open");
  } else {
    parent.classList.add("open");
  }
  // nav.className = !nav.classList.contains("active") ? "active" : "";
});
