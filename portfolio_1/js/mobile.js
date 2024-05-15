export function activeMobileMenu() {
  const btnMobile = document.querySelector("#btn-mobile");
  const linkMenu = document.querySelectorAll("#menu li a");

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.querySelector("#nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
      event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
  }

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);

  linkMenu.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
}
