window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
    navbar.classList.add("border-bottom");
  } else {
    navbar.classList.remove("border-bottom");
  }
});

function scrollIntoSection(id) {
  const section = document.getElementById(id);
  const navbarHeight = 100;
  const offset = section.offsetTop - navbarHeight;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });

  document.querySelectorAll("#navbar a").forEach((link) => {
    link.addEventListener("click", closeNavigationMenu);
  });
}
