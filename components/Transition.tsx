"use client";
import { animatePageIn } from "@/animations";
import { Home } from "@/types/generated-types";
import { useGSAP } from "@gsap/react";

function Transition({
  children,
  data,
}: {
  children: React.ReactNode;
  data: Home | null;
}) {
  useGSAP(() => {
    if (data) {
      animatePageIn();
    }
  }, [data]);

  return (
    <>
      <div
        id="loading"
        className="fixed left-0 top-0 z-50 flex h-svh w-svw"
        suppressHydrationWarning
      >
        <div className="w-full bg-loading bg-cover bg-fixed"></div>
        <div className="h-full w-full bg-loading bg-cover bg-fixed"></div>
        <div className="h-full w-full bg-loading bg-cover bg-fixed"></div>
        <div className="h-full w-full bg-loading bg-cover bg-fixed"></div>
        <div className="h-full w-full bg-loading bg-cover bg-fixed"></div>
      </div>

      <div id="content" className="invisible">
        {children}
      </div>
    </>
  );
}

export default Transition;
