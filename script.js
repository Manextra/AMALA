var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y +"px";
  blur.style.left = dets.x -250 +"px";
  blur.style.top = dets.y -250 +"px";
})
gsap.to(".nav",{
  color:"white",
  backgroundColor: "black",
  height:"75px",
  duration:0.5,
  scrollTrigger:{
    triger:".nav",
    scroller:"body",
    marker:"true",
    start:"top -10%",
    end:"top -11%",
    scrub:1
  }
})
gsap.to(".main",{
   backgroundColor:"black",
   scrollTrigger:{
    trigger:".main",
    scroller:"body",
    start:"top -20%",
    end:"top -70%",
    scrub:2
   }
})
const letters = document.querySelectorAll('#page1 h1 .letter');
letters.forEach((letter, idx) => {
 letter.style.animationDelay = `${idx * 0.1}s`;
});
// Ensure the DOM is ready before manipulating it
document.addEventListener("DOMContentLoaded", function () {
  // Set up GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Create a timeline for the image animation
  const imageTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".imganim",
      start: "top center",
      end: "bottom center",
      scrub: 1, // Smoothly animates the tilt during scroll
    },
  });

  // Add comprehensive animations to the timeline
  imageTimeline.to(".imganim img", {
    rotationX: 10,
    rotationY: 10,
    rotationZ: 5, // Add rotation along the Z-axis for a 3D effect
    scale: 1.1,
    y: "-3%", // Parallax effect
    transformOrigin: "center",
    ease: "power1.5.inOut",
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)", // Dynamic shadow
  });

  imageTimeline.to(
    ".imganim img",
    {
      y: "5%",
      ease: "power2.inOut",
    },
    0
  );

  // Add a subtle fade-in for the image
  gsap.from(".imganim img", {
    opacity: 0,
    duration: 3,
    delay: 0.5,
    ease: "power2.inOut",
  });

  // Add blur effect
  imageTimeline.to(".imganim img", {
    filter: "blur(2px)",
    ease: "power2.inOut",
  });

  // Add wobble effect
  imageTimeline.to(".imganim img", {
    rotation: -5,
    repeat: 5,
    yoyo: true,
    ease: "power2.inOut",
  });

});
