const nav = document.querySelector("nav");
const main = document.querySelector("main");
const blur_div = document.querySelector(".blur_div");
const images = document.querySelectorAll(".main_img, .main_img_vertical");
const lang = document.querySelector(".lang")
function toggle() {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    lang.classList.add("langing")
    nav.style.position = "fixed";
    main.style.marginLeft = "auto";
    main.classList.add("blur");
    blur_div.classList.add("cover");
    images.forEach((img) => img.classList.add("grayscale"));
  } else {
    lang.classList.remove("langing")

    main.classList.remove("blur");
    blur_div.classList.remove("cover");
    images.forEach((img) => img.classList.remove("grayscale"));

    setTimeout(() => {
      nav.style.position = "sticky";
      main.style.marginLeft = "initial";
    }, 1000);
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetPage = link.getAttribute("href");
      links.forEach((link) => link.classList.remove("a_active"));
      link.classList.add("a_active");
      window.location.href = targetPage;
    });
  });
  const currentPage = window.location.pathname.split("/").pop();
  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("a_active");
    }
  });
});




function closeNavOnScroll() {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    main.classList.remove("blur");
    blur_div.classList.remove("cover");
    images.forEach((img) => img.classList.remove("grayscale"));
    setTimeout(() => {
      nav.style.position = "sticky";
      main.style.marginLeft = "initial";
    }, 1000);
  }
}

window.addEventListener("scroll", closeNavOnScroll);
