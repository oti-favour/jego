import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function animatePageIn() {
  const ref = document.getElementById("loading");

  if (!ref) return console.log("no loading");
  const tl = gsap.timeline();

  //   animate the 5 divs in the loading screen with different delays by looping through them
  tl.to(ref.children, {
    duration: 1,
    yPercent: -100,
    backgroundAttachment: "fixed",
    stagger: {
      from: "random",
      amount: 0.5,
    },
    ease: "power4.inOut",
  });
  //   .to(ref, {
  //     duration: 0.7,
  //     yPercent: -100,
  //     ease: "power4.inOut",
  //     onComplete: () => {
  //       ref.style.display = "none";
  //     },
  //   });
}

export function animatePageOut(href: string, router: AppRouterInstance) {
  const ref = document.getElementById("loading");

  if (!ref) return;

  const tl = gsap.timeline();

  tl.to(ref, {
    xPercent: 0,
    duration: 0.9,
  }).call(() => router.push(href));
}
