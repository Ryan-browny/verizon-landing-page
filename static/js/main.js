const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");

function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "Menu";
}

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "Close" : "Menu";
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    closeMenu();
    menuButton.focus();
  }
});

window.matchMedia("(min-width: 761px)").addEventListener("change", closeMenu);