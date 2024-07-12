import BlockContent from "@/components/BlockContent";
import FooterSection from "@/components/Footer";
import GoBack from "@/components/GoBack";
import Navbar from "@/components/Navbar";
import { AuthorItem, NewsHeader } from "@/components/NewsItem";
import { DynamicHeading } from "@/components/Typography";
import { getInvestorsData, getReportFromSlug } from "@/hooks/getData";
import { notFound } from "next/navigation";

async function NewsDetails({ params: { slug } }: { params: { slug: string } }) {
  const report = await getReportFromSlug(slug);
  const { footer } = await getInvestorsData();

  if (!report || !footer) {
    return notFound();
  }
  return (
    <div className="space-y-12">
      <div className="container mt-2 space-y-8 lg:mt-8">
        <Navbar desktopClassName="text-black" />
        <div className="mx-auto w-fit space-y-8">
          <GoBack href="/investors" />
          <div className="space-y-2">
            <NewsHeader
              readCount={report.readCount}
              createdAt={report.createdAt}
              newsType={report.reportCategory}
              readMinutes={report.readMinutes}
            />
            <DynamicHeading
              level="h1"
              className="!font-product text-2xl font-bold md:text-4xl lg:max-w-screen-md"
            >
              {report.title}
            </DynamicHeading>
          </div>
          <AuthorItem {...report.author} />
          <div className="whitespace-pre-line lg:max-w-screen-md">
            <BlockContent value={report.content} />
          </div>
        </div>
      </div>
      <FooterSection footer={footer} />
    </div>
  );
}

export default NewsDetails;
