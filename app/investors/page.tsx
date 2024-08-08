import FooterSection from "@/components/Footer";
import { getInvestorsData } from "@/hooks/getData";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { notFound } from "next/navigation";
import InvestorsHeroSection from "./(sections)/hero";
import NewsSection from "./(sections)/news";
import ReportsSection from "./(sections)/reports";

async function Page() {
  const { data, footer } = await getInvestorsData();

  if (!data || !footer) {
    return notFound();
  }
  return (
    <>
      <div className="space-y-6 md:space-y-10 lg:space-y-12">
        <InvestorsHeroSection home={data.home} />
        <NewsSection news={data.news} />
        <ReportsSection reports={data.reports} />
      </div>
      <FooterSection footer={footer} />
      <SpeedInsights />
    </>
  );
}

export default Page;
