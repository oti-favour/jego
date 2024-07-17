import { cn } from "@/lib/utils";
import { Heading, ParagraphType } from "@/types/types";

const HeadingOne: Heading = ({ text, className, ...props }) => {
  return (
    <h1
      className={cn(
        "font-gustavoBold text-4xl font-bold uppercase leading-[1] md:text-[82px]",
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
        "font-gustavoBold text-4xl font-bold uppercase leading-[70px] md:text-[82px] lg:leading-[1]",
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
        "font-gustavoBold text-4xl font-bold uppercase leading-[1] md:text-[82px]",
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
        "font-gustavoBold text-4xl font-bold uppercase leading-[1] md:text-[82px]",
        className,
      )}
      {...props}
    >
      {!children ? text : children}
    </h4>
  );
};

export const HeadingFive: Heading = ({
  text,
  className,
  children,
  ...props
}) => {
  return (
    <h5
      className={cn(
        "font-gustavoBold text-4xl font-bold uppercase leading-[1] md:text-[82px]",
        className,
      )}
      {...props}
    >
      {!children ? text : children}
    </h5>
  );
};

export const Caption: ParagraphType = ({
  text,
  className,
  children,
  ...props
}) => {
  return (
    <p {...props} className={cn("text-sm uppercase lg:text-base", className)}>
      {!children ? text : children}
    </p>
  );
};

export const Paragraph: ParagraphType = ({
  text,
  className,
  children,
  ...props
}) => {
  return (
    <p
      {...props}
      className={cn("max-w-80 text-sm md:max-w-sm lg:text-base", className)}
    >
      {!children ? text : children}
    </p>
  );
};

type DynamicHeadingProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  text?: string;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

const DynamicHeading: React.FC<DynamicHeadingProps> = ({
  level,
  text,
  className,
  children,
  ...props
}) => {
  const Tag = level;

  return (
    <Tag
      className={cn(
        "font-gustavoBold text-4xl font-bold uppercase leading-[113%] md:text-[82px]",
        className,
      )}
      {...props}
    >
      {!children ? text : children}
    </Tag>
  );
};

export { DynamicHeading };
