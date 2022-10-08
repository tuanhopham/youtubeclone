const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar')
const sidebarMin = document.querySelector('.sidebar-min')
const ScrollMenu = document.querySelector('.scroll-menu')
const content = document.querySelector('.content')
const shortsList = document.querySelector('.short-list')
const downBtn = document.querySelector('.down')
const searchMoblie = document.querySelector('.search-mini-icon')

menu.onclick = function(){
   if(window.outerWidth <1367 && window.outerWidth >830 ){
      sidebar.classList.toggle('show')
      content.classList.add('ninety-five')
   }
   else if(window.outerWidth <829){
      sidebar.classList.toggle('show')
      content.classList.add('one-hundred-percent')
   }
   else{
   sidebar.classList.toggle('show')
   content.classList.toggle('ninety-five')
   }
}
ScrollMenu.onwheel = function(e){ 
   // ScrollMenu.style.transform= `translateX(-${scrollY}px)`
   // if(ScrollMenu.style.transform <=`translateX(-666px)`){
   //    ScrollMenu.style.transform =`translateX(-666px)`
   // }
}
downBtn.onclick = function(){
   shortsList.style.gridTemplateRows = 'repeat(2, 1fr)';
   downBtn.style.display = 'none';
}
//responsive Javastcrip

function responsive(){
   
   if(window.outerWidth >830 &&window.outerWidth <1367 ){
      sidebar.classList.remove('show')  
      content.classList.add('ninety-five')
      sidebarMin.classList.add('show')  
   }
   else if(window.outerWidth <829){
      sidebar.classList.remove('show') 
      sidebarMin.classList.remove('show')  
      content.classList.remove('ninety-five')
      content.classList.add('one-hundred-percent')
      content.onclick = function(){
         if(navMiddle.style.display = 'flex'){
            navLeft.style.display = 'flex'
            navRight.style.display = 'flex'
            navMiddle.style.display = 'none'
            
         }
      }
   }
   else{
      sidebar.classList.add('show')  
      content.classList.remove('ninety-five')
      content.classList.remove('one-hundred-percent')
      
   }
  
}
const navMiddle = document.querySelector('.nav-middle')
const navLeft = document.querySelector('.nav-left')
const navRight = document.querySelector('.nav-right')
searchMoblie.onclick = function(){

   
   
   navLeft.style.display = 'none'
   navRight.style.display = 'none'
   navMiddle.style.display = 'flex'
   
   
   
}


responsive()

