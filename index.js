
ScrollReveal().reveal('.description__image', {
  delay: 500,
  duration: 2000,
  reset: true,
  distance: '50px',
   origin: 'left' 
});
ScrollReveal().reveal('.description2__details2-animation1', {
  delay: 500,
  duration: 1500,
  reset: true,
  distance: '50px',
   origin: 'left' 
});
ScrollReveal().reveal('.description2__img1', {
  delay: 300,  
  duration: 1500,
  reset: true,
  distance: '50px',
   origin: 'bottom' 
});
ScrollReveal().reveal('.description2__details2-animation2', {
  delay: 700,
  duration: 1500,
  reset: true,
  distance: '50px',
   origin: 'right' 
});
ScrollReveal().reveal('.description2__img2', {
  delay: 700,
  duration: 1500,
  reset: true,
  distance: '50px',
   origin: 'bottom' 
});
ScrollReveal().reveal('.cta__img', {
  delay: 1000,
  duration: 4000,
  reset: true,
  distance: '50px',
   origin: 'right' 
});
document.querySelector('.nav-toggle').addEventListener('click', function(){
  document.querySelector('.nav-slide').classList.toggle('nav-hidden');
  document.querySelector('.button-change1').classList.toggle('nav-toggle__line1');
  document.querySelector('.button-change').classList.toggle('nav-toggle__line2');
  document.querySelector('.button-change1').classList.toggle('nav-toggle__line1-change');
  document.querySelector('.button-change').classList.toggle('nav-toggle__line2-change');
  document.querySelector('.nav__container').classList.toggle('nav__white');
  document.querySelector('.nav').classList.toggle('nav__white');
  // document.querySelector('.main').classList.toggle('nav-hidden');


  // document.querySelector('.nav__container').style.backgroundColor = "white";

  const element = document.querySelector("#slidemenu");

    if(element.classList.contains("nav-hidden")) {
      document.querySelector('.body').style.overflow = 'visible';
} else {
  document.querySelector('.body').style.overflow = 'hidden';
  document.querySelector('.body').style.webkitOverflow = 'hidden';

}


})
let prevScrollpos = window.pageYOffset;
 window.onscroll = function (){
    let currentScrollPos = window.pageYOffset;

   if (prevScrollpos > currentScrollPos  ) {
     console.log(currentScrollPos)
    if (currentScrollPos <= 15 || prevScrollpos <= 15 ) {
      document.querySelector('.nav').style.top = "0";
      document.querySelector('.nav__container').classList.remove("nav__white");
      document.querySelector('.nav__container').style.height = "12rem";

      // prevScrollpos = currentScrollPos;
    } else if (prevScrollpos > currentScrollPos && prevScrollpos > 0) {
      document.querySelector('.nav').style.top = "0";
      document.querySelector('.nav__container').classList.add("nav__white");
      document.querySelector('.nav__container').style.height = "9rem";
      // document.querySelector('.nav__container').style.paddingBottom= 0;
      prevScrollpos = currentScrollPos;
    }
   
  } else if (prevScrollpos < currentScrollPos )  {
     if (currentScrollPos <= 90) {
      document.querySelector('.nav').style.top = "0";
      document.querySelector('.nav__container').classList.add("nav__white");
      document.querySelector('.nav__container').style.height = "9rem";
      prevScrollpos = currentScrollPos;
     }else if (prevScrollpos < currentScrollPos && currentScrollPos > 100)  {
   
      document.querySelector('.nav').style.top = "-100px";
      document.querySelector('.nav__container').classList.remove("nav__white");
      document.querySelector('.nav__container').style.height = "12rem";

      prevScrollpos = currentScrollPos;
      
      
    }
    
    
    
  } 
   
    


  
  


}
