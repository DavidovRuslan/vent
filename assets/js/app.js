function scrollNav(nav_name,nav_name_active){
  // nav_name - имя блока меню
  // nav_name_active
  let prevScrollPos = window.pageYOffset;
  let navName = document.querySelector('.'+nav_name)

   window.onscroll = function(){
    let currentScrollPos = window.pageYOffset;

     if(prevScrollPos > currentScrollPos){
        navName.classList.add(nav_name_active)
     }
     if(currentScrollPos < 50 || prevScrollPos < currentScrollPos){
      navName.classList.remove(nav_name_active)
     }
     prevScrollPos = currentScrollPos;
   }
}

scrollNav('top__menu','top__menu-active');
function preloader(name){
  window.addEventListener('load',function(){
    let element = document.querySelector('.'+name);
    element.classList.add('preloader__hide')
  })
}
preloader('preloader')


function burger(){
  let burgerBtn = document.querySelector('.mobile__menu-btn')
  let burgerNav = document.querySelector('.mobile__menu')
  burgerBtn.addEventListener('click',function(){
    burgerBtn.classList.toggle('mobile___menu-btn-active')
    burgerNav.classList.toggle('mobile__menu-active')
  })
}
burger()



var swiper = new Swiper('.header', {
  speed: 600,
  parallax: true,
  pagination: {
    el: '.slider__nav',
    clickable: true,
  },
  
});
