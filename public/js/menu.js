// //toggle dropdown menu open/close
// let toClose = false;

// function toggle(e) {
//   e.stopPropagation();
//   let btn = this;
//   let menu = btn.nextSibling;

//   while (menu && menu.nodeType != 1) {
//     menu = menu.nextSibling;
//   }
//   if (!menu) return;
//   if (menu.style.display !== "block") {
//     menu.style.display = "block";
//     if (toClose) toClose.style.display = "none";
//     toClose = menu;
//   } else {
//     menu.style.display = "none";
//     toClose = false;
//   }
// }
// function closeAll() {
//   toClose.style.display = "none";
// }

// window.addEventListener("DOMContentLoaded", function() {
//   document.querySelectorAll(".menu-item-btn").forEach(function(btn) {
//     btn.addEventListener("click", toggle, true);
//   });
// });

// window.onclick = function(event) {
//   if (toClose) {
//     closeAll.call(event.target);
//   }
// };

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
