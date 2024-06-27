export type Heading = React.FC<
  {
    text: string;
    className?: string;
  } & React.HTMLAttributes<HTMLHeadingElement>
>;

export interface NavItemProps {
  href: string;
  text?: string;
  icon?: React.ReactNode;
  rounded?: boolean;
  roundedClass?: string;
}
