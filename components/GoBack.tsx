import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const GoBack: React.FC<GoBackProps> = ({ href, text, className, ...props }) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex w-fit items-center space-x-1 rounded-full bg-white/10 px-4 py-2 font-product",
        className,
      )}
      {...props}
    >
      <ChevronLeft size={24} />
      <span>{text || "go back"}</span>
    </Link>
  );
};

interface GoBackProps extends React.HTMLProps<HTMLAnchorElement> {
  href: string;
  text?: string;
}

export default GoBack;
