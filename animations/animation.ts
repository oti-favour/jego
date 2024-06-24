import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function animatePageIn() {
  const ref = document.getElementById("loading");

  if (!ref) return console.log("no loading");
  const tl = gsap.timeline();

  tl.to(ref.children, {
    duration: 2,
    yPercent: -100,
    backgroundAttachment: "fixed",
    delay: 0.5,
    stagger: {
      from: "random",
      amount: 0.5,
    },
    ease: "power4.inOut",
  });
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
