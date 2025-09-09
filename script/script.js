document.addEventListener("DOMContentLoaded", () => {
  // Load navbar
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
    });

  // Load footer
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });
});


