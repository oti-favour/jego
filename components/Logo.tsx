import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  const sizes = () => {
    switch (props.size) {
      case "sm":
        return 500;
      case "md":
        return 700;
      case "lg":
        return 900;
      default:
        return 500;
    }
  };

  const size = sizes();

  return (
    <Image
      src={
        props.src ?? props.variant === "secondary"
          ? "/assets/logo-black.svg"
          : "/assets/logo.svg"
      }
      alt="logo"
      width={size}
      height={size}
      className={cn("h-auto w-auto", props.className)}
      {...props}
    />
  );
};

interface LogoProps {
  className?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  src?: string;
}

export default Logo;
