import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function animatePageIn() {
  const ref = document.getElementById("loading");

  if (!ref) return;
  const tl = gsap.timeline();

  tl.from("#content", { animationDelay: 0.5, autoAlpha: 0 }).to(ref.children, {
    animationDelay: 1,
    duration: 2,
    yPercent: -100,
    backgroundAttachment: "fixed",
    delay: 0.5,
    stagger: {
      from: "random",
      amount: 0.5,
    },
    ease: "power4.inOut",
    onComplete: () => {
      ref.style.display = "none";
    },
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
