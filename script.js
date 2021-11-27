const toggleBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("menu");

const navToggle = () => {
  toggleBtn.classList.toggle("open");
  mobileMenu.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
};

toggleBtn.addEventListener("click", navToggle);
