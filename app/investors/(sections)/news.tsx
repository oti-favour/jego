import NewsItem from "@/components/NewsItem";
import { DynamicHeading } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { getNewsDataFromRef } from "@/hooks/getData";
import { News, SanityReference } from "@/types/generated-types";
import { Separator } from "@radix-ui/react-separator";

async function NewsSection({ news }: { news: SanityReference<News>[] }) {
  const newsIds = news.map((n) => n._ref);

  const newsItems = await getNewsDataFromRef(newsIds);

  const firstNewsItem = newsItems[0];

  const restNewsItems = newsItems.slice(1);
  return (
    <div className="min-h-svh bg-[#F7F7F7] py-12 lg:py-24">
      <div className="space-y-6 px-4 lg:container lg:space-y-16">
        <DynamicHeading className="md:text-6xl" level="h2">
          Latest News / Updates
        </DynamicHeading>
        <div className="grid space-y-10">
          <NewsItem newsItem={firstNewsItem} large />
          <Separator className="my-10 h-px bg-[#D6D6D6] lg:my-16" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {restNewsItems.map((newsItem, index) => {
              if (!newsItem) return null;
              return (
                <NewsItem
                  key={`${index}-${newsItem.title}`}
                  newsItem={newsItem}
                />
              );
            })}
          </div>
          <div className="pb-12 text-center">
            <Button className="rounded-full bg-brightTurquoise px-6 font-light text-black hover:bg-brightTurquoise/50">
              Show more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
