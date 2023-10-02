

function locomotiveAnimation(){
   gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
// function animate_1() {
//        let vid_container = document.querySelector("#video-container");
//     let playbtn = document.querySelector("#playbtn");

//     vid_container.addEventListener("mouseenter",(dets)=>{
//      gsap.to(playbtn,{
//         opacity:1,
//         scale:1,    
//      })
//     })

//     vid_container.addEventListener("mouseleave",(dets)=>{
//         gsap.to(playbtn,{
//             opacity:0,
//             scale:0,    
//          })
//       })

//       vid_container.addEventListener("mousemove",(dets)=>{
//         gsap.to(playbtn,{
//             left:dets.x-50,
//             top:dets.y-50,  
//             ease:Power2,
//          })
//       })
// }
// animate_1();

function animate_2() {
   let tl = gsap.timeline();
   tl.from("#page1 h1", {
      y: 200,
      opacity: 0,
      ease: Expo.easeInOut,
      duration: 2,
      stagger: .2,
   })

   
   gsap.from(".links,.icons",{
      y:-200,
      duration:1,
      ease:Power0 ,
      stagger: .4,
   scaleY:0
   })
   gsap.from(".nav-1",{
      opacity:0,
      duration:1,
      delay:.5,
      scale:0
   })
}
document.addEventListener("mousemove", (dets) => {
   gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,


   })
})
function child_1(){
   let child1 = document.querySelector("#child1");
   child1.addEventListener("mouseenter",function(){
      gsap.to("#cursor",{
         backgroundColor:"#D4D0D3"
      })
   })
   child1.addEventListener("mouseleave",function(){
      gsap.to("#cursor",{
         backgroundColor:"#f7f7f7"
      })
   })
;
}
function child_2(){
   let child2 = document.querySelector("#child2");
   child2.addEventListener("mouseenter",function(){
      gsap.to("#cursor",{
         backgroundColor:"#E6DFD7"
      })
   })
   child2.addEventListener("mouseleave",function(){
      gsap.to("#cursor",{
         backgroundColor:"#f7f7f7"
      })
   })
;
}
function child_3(){
   let child3 = document.querySelector("#child3");
   child3.addEventListener("mouseenter",function(){
      gsap.to("#cursor",{
         backgroundColor:"#E6DFD7"
      })
   })
   child3.addEventListener("mouseleave",function(){
      gsap.to("#cursor",{
         backgroundColor:"#f7f7f7"
      })
   })
;
}
function child_4(){
   let child4 = document.querySelector("#child4");
   child4.addEventListener("mouseenter",function(){
      gsap.to("#cursor",{
         backgroundColor:"#B4D5B6"
      })
   })
   child4.addEventListener("mouseleave",function(){
      gsap.to("#cursor",{
         backgroundColor:"#f7f7f7"
      })
   })
;
}
child_1();
child_2();
child_3();
child_4();
animate_2();
locomotiveAnimation();

document.querySelectorAll(".child").forEach(function (elem) {
   elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
         transform: 'translate(-50%,-50%) scale(1)',


      })

   })
   elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
         transform: 'translate(-50%,-50%) scale(0)'

      })

   })


})

gsap.to(".nav-1 svg",{
   transform: "translateY(-150%)",
   scrollTrigger: {
      scroller: "#main",
      trigger:"#page1",
      scrub:3,
      start:"top 0%",
      end:"top -15%",
   }

})



gsap.to(".links a", {
opacity:0,
scrollTrigger:{
   scroller:"#main",
   trigger:"#page1",
   scrub:3,
   start:"top top",
   end:"bottom bottom",
}
})

gsap.from(".child", {
   opacity:0,
   y:100,
   scrollTrigger:{
      scroller:"#main",
      trigger:"#page3",
      start:"top top",
      end: "bottom bottom",

   },
   stagger:.5
})

gsap.from(".support h2",{
   x:-100,
   duration:1,
   opacity:0,
   scrollTrigger:{
      scroller:"#main",
      trigger:"#page2",
      start:"top 80%",
      end:" bottom -20%",
   }
})
gsap.from(".support p",{
   x:100,
   duration:.8,
   ease:Power4,
   opacity:0,
   scrollTrigger:{
      scroller:"#main",
      trigger:"#page2",
      start:"top 80%",
      end:" bottom -20%",
     
   }
})

function mobileView(){
let query = window.matchMedia("max-width:600px")
if (query.matches) {
   
}
}
mobileView();
let form = document.querySelector("#form");
let form1= document.querySelector(".inside-text");
// form1.addEventListener("focus", onFocus, true);
form.addEventListener("click", onFocus, true);
form.addEventListener("focusout", OutFocus,true);


function onFocus(){

    gsap.to(".container",{
        paddingTop:"18rem",
        paddingBottom:"3em",
        paddingLeft:"0em",
        paddingRight:"0em",
        duration:1,
        ease:Power4,
    
    
    })
    gsap.to(".btn",{
        backgroundColor:"#222222",
        padding: "1.5em 5em",
        borderBottomLeftRadius:"3em",
        borderBottomRightRadius:"3em",
    
    })
    gsap.to(".inside",{
       display:"block",
      })
      
     
}
function OutFocus(){
    gsap.to(".container",{
        padding: "1em 1em 2em 1em",
    
    })
    gsap.to(".inside",{
        display:"none"
    })
    gsap.to(".btn",{
        backgroundColor:"",
        padding: "0 5em",
        borderBottomLeftRadius:"",
        borderBottomRightRadius:"",
    
    })
}