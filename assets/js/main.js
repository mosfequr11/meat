const navToggle = document.querySelector(".nav-toggle");
const sideBar = document.querySelector(".sidebar");

// Add "show-sidebar" class from Sidebar
navToggle.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});

const closeBtn = document.querySelector(".close-btn");
// Remove "show-sidebar" class from Sidebar
closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("show-sidebar");
});
