"use client";

import { animatePageIn } from "@/animations";
import { useEffect } from "react";

function Transition() {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div
      id="loading"
      className="flex h-svh w-svw fixed top-0 left-0 z-50"
      suppressHydrationWarning
    >
      <div className="bg-loading bg-fixed w-full bg-cover"></div>
      <div className="bg-loading bg-fixed w-full h-full bg-cover"></div>
      <div className="bg-loading bg-fixed w-full h-full bg-cover"></div>
      <div className="bg-loading bg-fixed w-full h-full bg-cover"></div>
      <div className="bg-loading bg-fixed bg-cover w-full h-full"></div>
    </div>
  );
}

export default Transition;
