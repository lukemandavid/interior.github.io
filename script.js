const button = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
button.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
