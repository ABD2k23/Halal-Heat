// 

const lenis = new Lenis({
  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// 

function Loader() {
  gsap.to('.numbering', {
    scale: 1,
    ease: "sine.in",
  })

  setTimeout(() => {

    gsap.to('.numbering p',{
      y: "-100%",
      ease: "sine.in",
    })

  }, 1000);

  setTimeout(() => {

    gsap.to('.numbering p',{
      y: "-200%",
      ease: "sine.in",
    })

  }, 2000);

  setTimeout(() => {

    gsap.to('.loader h2',{
      opacity: 0,
      ease: "sine.in",
    })
    gsap.to('.numbering p',{
      y: "-300%",
      ease: "sine.in",
    })
  }, 3000);

  setTimeout(() => {
    gsap.to('.box-right', {
      y: '-200%',
      ease: "sine.in",
    })
    gsap.to('.box-left', {
      y: '200%',
      ease: "sine.in",
    })

  }, 3500);

  setTimeout(() => {
    const loader = document.querySelector('.loader');
    loader.style.display = "none";
  }, 4500);
}

function HeroLoad() {
  setTimeout(() => {
    
    gsap.to('nav', {
      opacity: 1,
      ease: "sine.in",
    })
    gsap.to('.hero-content',{
      x: 0,
      opacity: 1,
      ease: "sine.in",
    })
    gsap.to('.arrow',{
      opacity: 1,
      ease: "sine.in",
      delay: 1,
    })
    gsap.to('.hero-img img' , {
      scale: 1,
      rotate: '2deg',
      ease: "sine.in",
      delay: .1,
    })
  }, 3800);

}

window.addEventListener('load', () => {
  Loader();
  HeroLoad();
})

// 
        // Contact Page
// 

const contact_page = document.querySelector('.contact-page');
const contact_me = document.querySelectorAll('.contact-me');
const b2h = document.querySelector('.contact-page button');

contact_me.forEach(e => {
  e.addEventListener('click', () => {
    contact_page.style.display = 'flex' ;
  })
});

b2h.addEventListener('click',() => {
  contact_page.style.display = 'none' ;
})



// 
          // MENU
// 

const menu = document.querySelectorAll('.work');

menu.forEach(e => {
  
  const menuTL = gsap.timeline({
    scrollTrigger:{
      trigger: e,
      start: '20% bottom',
      end: '20% 80%',
      scrub: 1,
    }
  })
  
  menuTL.from(e, {
    opacity: 0,
    ease: "sine.in",
  })

});

