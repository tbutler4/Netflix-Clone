const nav = document.getElementById("nav");
window.onscroll = function(){
  if(window.pageYOffset > 10){
    nav.style.background = "black"
  }
  else{
    nav.style.background = "transparent"
  }
}