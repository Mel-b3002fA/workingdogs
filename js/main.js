gsap.registerPlugin(ScrollTrigger);

gsap.from(".triangle", {
    scrollTrigger: {
      trigger: ".section-2",
      start: "top 80%",   
      once: true,        
      markers: true       
    },
    opacity: 0,
    y: 50,
    duration: 1.5
  });

gsap.to(".box",{
    rotation:360,
    duration:2,
})
  