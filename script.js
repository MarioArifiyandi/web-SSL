document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");
  const homeLink = document.getElementById("home");
  const aboutLink = document.getElementById("about");
  const contactLink = document.getElementById("contact");
  const servicesLink = document.getElementById("news");

  // Fungsi untuk mengambil dan menampilkan konten dari file eksternal
  function loadContent(file) {
    fetch(file)
      .then((response) => response.text())
      .then((data) => {
        content.innerHTML = data;
      })
      .catch((error) => console.error("Error fetching content:", error));
  }

  // Set default content
  loadContent("home.html");

  // Event listeners for navigation links
  homeLink.addEventListener("click", () => {
    loadContent("home.html");
  });

  aboutLink.addEventListener("click", () => {
    loadContent("about.html");
  });

  contactLink.addEventListener("click", () => {
    loadContent("contact.html");
  });

  servicesLink.addEventListener("click", () => {
    loadContent("news.html");
  });
});
