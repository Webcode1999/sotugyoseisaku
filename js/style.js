const targets = document.querySelectorAll(".Topimageconteiner");

targets.forEach((target) => {
  gsap.fromTo(
    target.querySelector("img"),
    {
      y: 0,
    },
    {
      y: 250,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        ease: "bounce",
      },
    }
  );
});

gsap.to(".Moroccanfoods_headtext", {
  scrollTrigger: {
    trigger: ".Moroccanfoods_headtext",
    start: "top center",
    end: "+=500",
    scrub: true,
    pin: true,
    ease: "bounce",
  },
  opacity: 1,
});
