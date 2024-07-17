import BlockContent from "@/components/BlockContent";
import FooterSection from "@/components/Footer";
import GoBack from "@/components/GoBack";
import Navbar from "@/components/Navbar";
import { AuthorItem, NewsHeader } from "@/components/NewsItem";
import { DynamicHeading } from "@/components/Typography";
import { getInvestorsData, getOneNewsDataFromRef } from "@/hooks/getData";
import { notFound } from "next/navigation";

async function NewsDetails({ params: { slug } }: { params: { slug: string } }) {
  const news = await getOneNewsDataFromRef(slug);
  const { footer } = await getInvestorsData();

  if (!news || !footer) {
    return notFound();
  }
  return (
    <div className="space-y-12">
      <div className="container mt-2 space-y-8 lg:mt-8">
        <Navbar desktopClassName="text-black" />
        <div className="mx-auto w-fit space-y-8">
          <GoBack href="/investors" />
          <div className="space-y-2">
            <NewsHeader {...news} />
            {/* <div>
              <Image
                src={sanityImageUrl(news.image)}
                alt={news.title}
                width={1920}
                height={1080}
                className="aspect-video h-full w-full object-cover"
              />
            </div> */}
            <DynamicHeading
              level="h1"
              className="!font-product text-2xl font-bold capitalize md:text-4xl lg:max-w-screen-md"
            >
              {news.title}
            </DynamicHeading>
          </div>
          <AuthorItem {...news.author} />
          <div className="font-light leading-[30px] text-[#878787] lg:max-w-screen-md">
            <BlockContent value={news.content} />
          </div>
        </div>
      </div>
      <FooterSection footer={footer} />
    </div>
  );
}

export default NewsDetails;
