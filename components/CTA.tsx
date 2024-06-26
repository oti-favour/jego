import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const CTA: React.FC<CTAProps & React.HTMLProps<HTMLAnchorElement>> = (
  props
) => {
  return (
    <Link href={props.href} className="">
      {props.children ? (
        props.children
      ) : (
        <div className="flex items-center bg-white max-w-fit text-black py-2 px-2 rounded-full gap-4">
          <span className={cn("ml-4", "font-bold")}>{props.text}</span>
          <span className="w-10 h-10 flex justify-center items-center rounded-full bg-darkOrange">
            {props.icon ? (
              props.icon
            ) : (
              <span className="material-icons-outlined text-sm">
                arrow_forward_ios
              </span>
            )}
          </span>
        </div>
      )}
    </Link>
  );
};

interface CTAProps {
  href: string;
  text: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export default CTA;
