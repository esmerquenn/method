const nav = document.querySelector("nav")
const main = document.querySelector("main")
const blur_div = document.querySelector(".blur_div")
const images = document.querySelectorAll('.main_img, .main_img_vertical');
function toggle(){
   nav.classList.toggle("active") 
   main.classList.toggle("blur")
   blur_div.classList.toggle("cover")
   images.forEach(img=>img.classList.toggle('grayscale'))
}

document.addEventListener('scroll', function() {
   // Eğer pencere genişliği 768px'den küçükse işlevselliği çalıştır
   if (window.innerWidth < 768) {
     debounceScrollFunction();
   }
 });
 
 const debounceScrollFunction = debounce(function() {
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
       img.style.filter = 'grayscale(0)';
     } else {
       img.style.filter = 'grayscale(2)';
     }
   });
 
   if (closest) {
     const elementRect = closest.getBoundingClientRect();
     const absoluteElementTop = elementRect.top + window.pageYOffset;
     const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
     window.scrollTo({
       top: middle,
       behavior: 'smooth'
     });
   }
 }, 100);
 
 function debounce(func, wait, immediate) {
   var timeout;
   return function() {
     var context = this, args = arguments;
     var later = function() {
       timeout = null;
       if (!immediate) func.apply(context, args);
     };
     var callNow = immediate && !timeout;
     clearTimeout(timeout);
     timeout = setTimeout(later, wait);
     if (callNow) func.apply(context, args);
   };
 }
//  document.addEventListener('scroll', function() {
//    const images = document.querySelectorAll('.main_img, .main_img_vertical');
//    let closest = null;
//    let closestDist = Infinity;
 
//    images.forEach(img => {
//      const imgRect = img.getBoundingClientRect();
//      const imgCenter = imgRect.top + (imgRect.height / 2);
//      const screenCenter = window.innerHeight / 2;
//      const dist = Math.abs(screenCenter - imgCenter);
 
//      if (dist < closestDist) {
//        closest = img;
//        closestDist = dist;
//      }
//    });
 
//    images.forEach(img => {
//      if (img === closest) {
//        img.style.filter = 'grayscale(0)';
//      } else {
//        img.style.filter = 'grayscale(2)';
//      }
//    });
//  });
 