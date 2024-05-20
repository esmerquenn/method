// document.addEventListener('scroll', function() {
//     if (window.innerWidth < 768) {
//       const images = document.querySelectorAll('.main_img, .main_img_vertical');
//       let closest = null;
//       let closestDist = Infinity;
  
//       images.forEach(img => {
//         const imgRect = img.getBoundingClientRect();
//         const imgCenter = imgRect.top + (imgRect.height / 2);
//         const screenCenter = window.innerHeight / 2;
//         const dist = Math.abs(screenCenter - imgCenter);
  
//         if (dist < closestDist) {
//           closest = img;
//           closestDist = dist;
//         }
//       });
  
//       images.forEach(img => {
//         if (img === closest) {
//           img.style.filter = 'grayscale(0)';
//         } else {
//           img.style.filter = 'grayscale(100%)';
//         }
//       });
//     }
//   });

//   document.addEventListener("DOMContentLoaded", function () {
//     const navbar = document.getElementById("navbar");
//     const carousel = document.getElementById("carousel");
//     const navbarHeight = navbar.offsetHeight;
  
//     window.addEventListener("scroll", function () {
//       const scrollPosition = window.scrollY;
//       const carouselPosition = carousel.offsetTop - navbarHeight;
  
//       if (scrollPosition >= carouselPosition) {
//         navbar.classList.remove("fixed");
//       } else {
//         navbar.classList.add("fixed");
//       }
//     });
//   });
  
// document.addEventListener("DOMContentLoaded", function () {
//   const navbar = document.querySelector("nav");
//   const carousel = document.getElementById("carousel");
//   const navbarHeight = navbar.offsetHeight;

//   window.addEventListener("scroll", function () {
//     const scrollPosition = window.scrollY;
//     const carouselPosition = carousel.offsetTop - navbarHeight;

//     // Manage the navbar fixed position
//     if (scrollPosition >= carouselPosition) {
//       navbar.classList.remove("fixed");
//     } else {
//       navbar.classList.add("fixed");
//     }

//     // Apply grayscale to images for mobile devices
//     if (window.innerWidth < 768) {
//       const images = document.querySelectorAll(".main_img, .main_img_vertical");
//       let closest = null;
//       let closestDist = Infinity;

//       images.forEach(img => {
//         const imgRect = img.getBoundingClientRect();
//         const imgCenter = imgRect.top + (imgRect.height / 2);
//         const screenCenter = window.innerHeight / 2;
//         const dist = Math.abs(screenCenter - imgCenter);

//         if (dist < closestDist) {
//           closest = img;
//           closestDist = dist;
//         }
//       });

//       images.forEach(img => {
//         if (img === closest) {
//           img.style.filter = "grayscale(0)";
//         } else {
//           img.style.filter = "grayscale(100%)";
//         }
//       });
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  const carousel = document.querySelector("#carousel");
  const navbarHeight = navbar.offsetHeight;

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const carouselPosition = carousel.offsetTop - navbarHeight;

    if (scrollPosition >= carouselPosition) {
      console.log(carouselPosition);
      navbar.style.position = "absolute";
      navbar.style.top = `${carouselPosition}px`;
    } else {
      navbar.style.position = "fixed";
      navbar.style.top = "0";
    }

    if (window.innerWidth < 768) {
      const images = document.querySelectorAll(".main_img, .main_img_vertical");
      let closest = null;
      let closestDist = Infinity;

      images.forEach(img => {
        const imgRect = img.getBoundingClientRect();
        const imgCenter = imgRect.top + (imgRect.height / 2);
        const screenCenter = window.innerHeight / 2;
        const dist = Math.abs(screenCenter - imgCenter);

        if (dist < closestDist) {
          closest = img;
          closestDist = dist;
        }
      });

      images.forEach(img => {
        if (img === closest) {
          img.style.filter = "grayscale(0)";
        } else {
          img.style.filter = "grayscale(100%)";
        }
      });
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

