let fbButton = document.getElementById("fb-share-button");
let url = window.location.href;

fbButton.addEventListener("click", function() {
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" + url,
    "facebook-share-dialog",
    "width=800,height=600"
  );
  return false;
});

let fbButtonFooter = document.getElementById("fb-share-button-footer");

fbButtonFooter.addEventListener("click", function() {
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" + url,
    "facebook-share-dialog",
    "width=800,height=600"
  );
  return false;
});
