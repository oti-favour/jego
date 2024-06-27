"use client";

import { animatePageIn } from "@/animations";
import { HomePageContext } from "@/hooks/useHomeData";
import { useContext, useEffect } from "react";

function Transition({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useContext(HomePageContext);

  useEffect(() => {
    if (isLoading && !data) return;
    animatePageIn();
  }, [data, isLoading]);

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
