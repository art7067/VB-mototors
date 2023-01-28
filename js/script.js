const servicesItems = document.querySelectorAll(".services-item");
let index = 1;
servicesItems.forEach((item) => {
  item.insertAdjacentHTML(
    "afterbegin",
    `<span class="services-item-number">${index++}</span>`
  );
});

function burger() {
  // variables
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menu-link--js");
  const body = document.body;
  const menuOverlay = document.querySelector(".menu-overlay");

  // events
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("no-scroll");
    menuOverlay.classList.toggle("active");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.remove("active");
      menu.classList.remove("active");
      body.classList.remove("no-scroll");
      menuOverlay.classList.remove("active");
    });
  });
menuOverlay.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("no-scroll");
    menuOverlay.classList.remove("active");
  });
}

burger();
