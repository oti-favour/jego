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

export const HeadingTwo: Heading = ({ text, className, ...props }) => {
  return (
    <h2
      className={cn(
        "font-gustavo text-4xl font-bold uppercase leading-[1] md:text-[82px]",
        className,
      )}
      {...props}
    >
      {text}
    </h2>
  );
};

export const HeadingThree: Heading = ({
  text,
  className,
  children,
  ...props
}) => {
  return (
    <h3
      className={cn(
        "font-gustavo text-4xl font-bold uppercase leading-[1] md:text-[82px]",
        className,
      )}
      {...props}
    >
      {!children ? text : children}
    </h3>
  );
};

export const HeadingFour: Heading = ({
  text,
  className,
  children,
  ...props
}) => {
  return (
    <h4
      className={cn(
        "font-gustavo text-4xl font-bold uppercase leading-[1] md:text-[82px]",
        className,
      )}
      {...props}
    >
      {!children ? text : children}
    </h4>
  );
};

export const Caption: ParagraphType = ({ text, className, ...props }) => {
  return (
    <p className={cn("text-sm uppercase lg:text-base", className)}>{text}</p>
  );
};

export const Paragraph: ParagraphType = ({ text, className, ...props }) => {
  return (
    <p className={cn("max-w-80 text-sm md:max-w-sm lg:text-base", className)}>
      {text}
    </p>
  );
};
