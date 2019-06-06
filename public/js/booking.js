const floatLabels = document.querySelectorAll(".floatLabel");
floatLabels.forEach(floatLabel => {
  floatLabel.addEventListener("focus", () => {
    floatLabel.nextElementSibling.className = "active";
  });
  floatLabel.addEventListener("blur", function() {
    if (this.value === "") {
      floatLabel.nextElementSibling.className = "";
    }
  });
});
