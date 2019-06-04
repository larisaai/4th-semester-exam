const floatLabels = document.querySelectorAll(".floatLabel");
floatLabels.forEach(floatLabel => {
  floatLabel.addEventListener("focus", () => {
    floatLabel.nextElementSibling.className = "active";
  });
  // floatLabel.addEventListener("blur", () => {
  //   floatLabel.nextElementSibling.className = "";
  // });
});
