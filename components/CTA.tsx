import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const CTA: React.FC<CTAProps & React.HTMLProps<HTMLAnchorElement>> = (
  props,
) => {
  return (
    <Link href={props.href} className="">
      {props.children ? (
        props.children
      ) : (
        <div className="flex max-w-fit items-center gap-4 rounded-full bg-white px-2 py-2 text-black">
          <span className={cn("ml-4", "font-bold")}>{props.text}</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-darkOrange">
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

const CTAPlain: React.FC<CTAProps & React.HTMLProps<HTMLAnchorElement>> = (
  props,
) => {
  return (
    <Link
      href={props.href}
      className={cn(
        "flex max-w-fit items-center gap-4 rounded-full bg-white px-2 py-2 text-black",
        props.className,
      )}
    >
      {props.children ? props.children : <>{props.text}</>}
    </Link>
  );
};

interface CTAProps {
  href: string;
  text: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

function CTASecondary({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <Button
      className="h-full max-w-fit rounded-full bg-white/10 px-12 backdrop-blur-sm"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default CTA;
export { CTAPlain, CTASecondary };
