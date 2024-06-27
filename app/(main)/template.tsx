"use client";
import Transition from "@/components/Transition";
import React from "react";

function Template({ children }: { children: React.ReactNode }) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  return (
    <>
      {show && children}
      <Transition />
    </>
  );
}

export default Template;
