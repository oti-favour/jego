import { cn, sanityImageUrl } from "@/lib/utils";
import { Author, News } from "@/types/generated-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Chip from "./Chip";
import { DynamicHeading, Paragraph } from "./Typography";
import { Separator } from "./ui/separator";

dayjs.extend(relativeTime);

const NewsItem: React.FC<NewsItemProps> = ({ newsItem, className, large }) => {
  return (
    <div
      className={cn(
        "grid gap-4 md:gap-6",
        large && "place-items-center lg:grid-cols-2",
        className,
      )}
    >
      <div className={cn(!large ? "max-h-64" : "w-full md:w-3/5 lg:w-full")}>
        <Image
          src={sanityImageUrl(newsItem.image)}
          alt={newsItem.title}
          width={1920}
          height={1080}
          className={cn("h-full w-full object-cover", large && "")}
        />
      </div>
      <div className={cn("space-y-2", large && "space-y-4 lg:px-4")}>
        <NewsHeader {...newsItem} />
        <DynamicHeading
          level="p"
          className={cn(
            "font-product text-lg font-bold capitalize leading-normal md:text-4xl md:leading-relaxed",
            !large && "leading-none md:text-lg md:leading-tight",
          )}
        >
          {newsItem.title}
        </DynamicHeading>
        <Paragraph className="text-[#878787]">
          {newsItem.summary}
          <Link
            href={`/investors/news/${newsItem.slug.current}`}
            className={cn(
              "flex items-center space-x-1 text-[#FF8200]",
              !large && "text-[#07926F]",
            )}
          >
            <span>{large ? "Continue reading" : "Read more"}</span>
            <ChevronRight size={24} />
          </Link>
        </Paragraph>
        {large && <AuthorItem {...newsItem.author} />}
      </div>
    </div>
  );
};

interface NewsItemProps extends React.HTMLAttributes<HTMLDivElement> {
  newsItem: News;
  className?: string;
  large?: boolean;
}

export default NewsItem;

export const NewsHeader: React.FC<NewsHeaderProps> = ({
  createdAt,
  newsType,
  readMinutes,
}) => (
  <div className="grid max-w-fit grid-flow-col place-items-center space-x-2 text-sm text-gray-500">
    <Chip text={newsType || "News"} />
    <span>•</span>
    <span>{dayjs(createdAt).fromNow()}</span>
    <Separator orientation="vertical" className="bg-[#959595]" />
    <span>{readMinutes} min read</span>
  </div>
);

interface NewsHeaderProps extends Partial<News> {}

export const AuthorItem: React.FC<Author> = ({ image, name, role }) => {
  return (
    <div className="flex grid-flow-col flex-col">
      <span className="font-bold">Author</span>
      <div className="flex items-center gap-4">
        <div className="">
          <Image
            src={sanityImageUrl(image)}
            alt={name}
            width={32}
            height={32}
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>
        <div className="flex h-fit flex-col">
          <span className="font-bold">{name}</span>
          <span className="text-[#878787]">{role}</span>
        </div>
      </div>
    </div>
  );
};

interface AuthorItemProps {
  src: string;
  alt?: string;
  name: string;
  role: string;
}
