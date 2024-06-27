import { cn } from "@/lib/utils";
import { Heading, ParagraphType } from "@/types/types";

const HeadingOne: Heading = ({ text, className, ...props }) => {
  return (
    <h1
      className={cn(
        "font-gustavo text-4xl font-bold uppercase leading-[1] md:text-[82px]",
        className,
      )}
      {...props}
    >
      {text}
    </h1>
  );
};

export default HeadingOne;

export const HeadingThree: Heading = ({ text, className, ...props }) => {
  return (
    <h3
      className={cn("max-w-xs text-sm md:max-w-sm md:text-lg", className)}
      {...props}
    >
      {text}
    </h3>
  );
};

export const HeadingFour: Heading = ({ text, className, ...props }) => {
  return (
    <h4 className={cn("font-gustavo text-lg font-bold uppercase", className)}>
      {text}
    </h4>
  );
};

export const Paragraph: ParagraphType = ({ text, className, ...props }) => {
  return (
    <p className={cn("font-gustavo text-lg font-bold uppercase", className)}>
      {text}
    </p>
  );
};
