const sidebar = document.querySelector("aside");
function openNavbar() {
  sidebar.classList.add("translate-x-0");
  sidebar.classList.remove("translate-x-full");
}
function closeNavbar() {
  sidebar.classList.remove("translate-x-0");
  sidebar.classList.add("translate-x-full");
}
