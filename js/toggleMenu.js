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



 