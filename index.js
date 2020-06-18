
ScrollReveal().reveal('.description__image', {
  delay: 500,
  duration: 2000,
  reset: true,
  distance: '50px',
   origin: 'left' 
});
ScrollReveal().reveal('.description2__details2-animation1', {
  delay: 1000,
  duration: 2500,
  reset: true,
  distance: '50px',
   origin: 'left' 
});
ScrollReveal().reveal('.description2__img1', {
  delay: 1000,
  duration: 3500,
  reset: true,
  distance: '50px',
   origin: 'bottom' 
});
ScrollReveal().reveal('.description2__details2-animation2', {
  delay: 1000,
  duration: 2500,
  reset: true,
  distance: '50px',
   origin: 'right' 
});
ScrollReveal().reveal('.description2__img2', {
  delay: 1000,
  duration: 3500,
  reset: true,
  distance: '50px',
   origin: 'top' 
});
ScrollReveal().reveal('.cta__img', {
  delay: 1000,
  duration: 4000,
  reset: true,
  distance: '50px',
   origin: 'right' 
});
let prevScrollpos = window.pageYOffset;
 window.onscroll = function (){
    let currentScrollPos = window.pageYOffset;

   if (prevScrollpos > currentScrollPos  ) {
    if (currentScrollPos === 0 || prevScrollpos === 0 ) {
      document.querySelector('.nav').style.top = "0";
      document.querySelector('.nav__container').classList.remove("nav__white");
      // prevScrollpos = currentScrollPos;
    } else if (prevScrollpos > currentScrollPos && prevScrollpos > 0) {
      document.querySelector('.nav').style.top = "0";
      document.querySelector('.nav__container').classList.add("nav__white");
      prevScrollpos = currentScrollPos;
    }
   
  } else if (prevScrollpos < currentScrollPos )  {
     if (currentScrollPos <= 90) {
      document.querySelector('.nav').style.top = "0";
      document.querySelector('.nav__container').classList.add("nav__white");
      prevScrollpos = currentScrollPos;
     }else if (prevScrollpos < currentScrollPos && currentScrollPos > 100)  {
   
      document.querySelector('.nav').style.top = "-70px";
      document.querySelector('.nav__container').classList.remove("nav__white");
      prevScrollpos = currentScrollPos;
      
      
    }
    
    
    
  } 
   
    


  
  


}
