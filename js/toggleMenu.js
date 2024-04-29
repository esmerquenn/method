const nav = document.querySelector("nav")
const main = document.querySelector("main")
const blur_div = document.querySelector(".blur_div")

function toggle(){
   nav.classList.toggle("active") 
   main.classList.toggle("blur")
   blur_div.classList.toggle("cover")
}
