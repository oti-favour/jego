"use client";
import { useEffect } from "react";

import { animatePageIn } from "@/animations";

function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      {children}
      <div
        id="loading"
        className="flex h-svh w-svw fixed top-0 left-0"
        suppressHydrationWarning
      >
        <div className="bg-loading bg-fixed w-full bg-cover"></div>
        <div className="bg-loading bg-fixed w-full h-full bg-cover"></div>
        <div className="bg-loading bg-fixed w-full h-full bg-cover"></div>
        <div className="bg-loading bg-fixed w-full h-full bg-cover"></div>
        <div className="bg-loading bg-fixed bg-cover w-full h-full"></div>
      </div>
    </div>
  );
}

export default Template;
