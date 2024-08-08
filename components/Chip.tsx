import { cn } from "@/lib/utils";

const Chip: React.FC<ChipProps> = ({ text, className }) => {
  const colors: { [key: string]: string } = {
    "Latest News": "bg-[#FBE9F7] text-[#AB1C8B]",
    News: "bg-blue-100 text-blue-800",
    Updates: "bg-green-100 text-green-800",
    Events: "bg-yellow-100 text-yellow-800",
  };

  const color = colors[text] || "bg-gray-100 text-gray-800";

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
        color,
        className,
      )}
    >
      {text}
    </div>
  );
};

interface ChipProps {
  text: string;
  className?: string;
}

export default Chip;
