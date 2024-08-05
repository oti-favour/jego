export type Heading = React.FC<
  {
    text?: string;
    className?: string;
  } & React.HTMLAttributes<HTMLHeadingElement>
>;

export type ParagraphType = React.FC<
  {
    text?: string;
    className?: string;
  } & React.HTMLAttributes<HTMLParagraphElement>
>;

export interface NavItemProps {
  href: string;
  text?: string;
  icon?: React.ReactNode;
  rounded?: boolean;
  roundedClass?: string;
}

export interface AnimationProps {
  children: React.ReactNode;
  className?: string;
}

export interface MapProviderProps {
  x: number;
  y: number;
  z: number;
  dpr: number;
}
