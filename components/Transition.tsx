"use client";

import { animatePageIn } from "@/animations";
import { HomePageContext } from "@/hooks/useHomeData";
import { useContext, useEffect, useState } from "react";

function Transition({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useContext(HomePageContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isLoading && data) {
      animatePageIn();

      setTimeout(() => {
        setShow(true);
      }, 800);
    }
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
      <div className={`${show ? "block" : "hidden"}`}>{children}</div>
    </>
  );
}

export default Transition;
