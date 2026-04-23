document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.querySelector(".people-menu .hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const closeMenu = document.getElementById("closeMenu");

  // OPEN
  hamburger.addEventListener("click", () => {
    sideMenu.classList.add("active");
    document.body.classList.add("menu-open");
  });

  // CLOSE
  closeMenu.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });

  // OUTSIDE CLICK CLOSE
  document.addEventListener("click", (e) => {
    if (
      sideMenu.classList.contains("active") &&
      !sideMenu.contains(e.target) &&
      !e.target.closest(".hamburger")
    ) {
      sideMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });

});

// Drop down js 

// SIDE DROPDOWN
document.querySelectorAll(".side-dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.stopPropagation(); // important

    const parent = toggle.parentElement;

    // OPTIONAL: sirf ek dropdown open rahe
    document.querySelectorAll(".side-dropdown").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("active");
      }
    });

    parent.classList.toggle("active");
  });
});