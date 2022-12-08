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

gsap.to(".jsanimation", {
  scrollTrigger: {
    trigger: ".jsanimation",
    start: "top center",
    end: "bottom center",
  },
  delay: 0.2,
  opacity: 1,
});

gsap.to(".jsanimationsecond", {
  scrollTrigger: {
    trigger: ".jsanimationsecond",
    start: "top center",
    end: "bottom center",
  },
  delay: 0.3,
  opacity: 1,
});

const target = document.querySelector(".Moroccanfoods_centrarimage");
gsap.fromTo(
  target,
  {
    y: 0,
  },
  {
    y: -60,
    scrollTrigger: {
      trigger: target, // ScrollTriggerの開始位置を計算するために使用される要素
      start: "top bottom", // 1つ目の値がtriggerで指定した要素の開始位置　2つ目の値が画面の開始位置
      end: "bottom top", // 1つ目の値がtriggerで指定した要素の終了位置　2つ目の値が画面の終了位置
      scrub: 1, // 要素を1秒遅れで追従させる
      // markers: true, // 開始位置、終了位置を調整確認する際に使用します
    },
  }
);
