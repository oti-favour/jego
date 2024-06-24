"use client";

import { animatePageIn } from "@/animations";
import { useEffect, useState } from "react";

function Transition({ children }: { children?: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    animatePageIn();
  }, []);

  return (
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
  );
}

export default Transition;
