const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')
const sidebarMin = document.querySelector('.sidebar-min')
const ScrollMenu = document.querySelector('.scroll-menu')
const content = document.querySelector('.content')
menu.onclick = function(){
   sidebar.classList.toggle('show')
   sidebarMin.classList.toggle('show')
   content.classList.toggle('ninety-five')
}
ScrollMenu.onwheel = function(e){
   
   // ScrollMenu.style.transform= `translateX(-${scrollY}px)`
   // if(ScrollMenu.style.transform <=`translateX(-666px)`){
   //    ScrollMenu.style.transform =`translateX(-666px)`
   // }
   
}