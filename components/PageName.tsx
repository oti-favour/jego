import { cn } from "@/lib/utils";

const PageName: React.FC<PageNameProps> = ({ text, position, className }) => {
  return (
    <div
      className={cn(
        `flex w-full pt-6 text-white md:pt-12`,
        position === "right" && "justify-end",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-1",
          position === "right" && "flex-row-reverse",
        )}
      >
        <span>{text}</span>
        <hr className="h-px w-16 border-0 bg-[#64748B]" />
      </div>
    </div>
  );
};

type PageNameProps = {
  text: string;
  position?: "left" | "right";
} & React.HTMLAttributes<HTMLDivElement>;

export default PageName;
