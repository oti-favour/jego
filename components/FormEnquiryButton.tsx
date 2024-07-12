"use client";

import { useState } from "react";
import { Button } from "./ui/button";

function FormEnquiryButton() {
  const [showInfo, setShowInfo] = useState(false);

  function toggle() {
    setShowInfo(!showInfo);
  }
  return (
    <>
      <Button
        onClick={toggle}
        className={`flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-black hover:bg-white/75 md:h-14 md:w-14 md:text-2xl ${showInfo ? "hidden" : "block"}`}
      >
        <span>?</span>
      </Button>

      <div
        className={`relative max-w-xs md:max-w-lg ${showInfo ? "block" : "hidden"}`}
      >
        <div className="rounded-2xl bg-[#292929] p-4 shadow-lg">
          <span className="">If you are an investor, please </span>
          <a className="text-darkOrange underline" href="mailto:google.com">
            contact
          </a>
          <span> us to obtain the password for this page</span>
        </div>
        <Button
          className="absolute left-[95%] top-[-20%] flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl text-black hover:bg-white/75 md:left-[95%] md:top-[-30%] md:h-10 md:w-10"
          onClick={toggle}
        >
          <span>x</span>
        </Button>
      </div>
    </>
  );
}

export default FormEnquiryButton;
