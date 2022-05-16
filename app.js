const nav = document.querySelector("nav");

window.addEventListener("scroll",scroll)

function scroll(){
   console.log(scrollY);
   if(scrollY > 149){
      nav.classList.add("akin");
   }else{
      nav.classList.remove("akin");
   }
}