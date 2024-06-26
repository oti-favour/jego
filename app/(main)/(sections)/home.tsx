import CTA from "@/components/CTA";
import FeaturesStepper from "@/components/FeaturesStepper";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import ScrollIcon from "@/public/assets/scroll-icon.svg";
import { Page } from "@/types/generated-types";
import { fetchDocumentBySlug } from "@/utils/actions/actions";
import { GetHomePage } from "@/utils/queries/queries";
import { cache } from "react";

const getData = cache(async () => {
  const data = await fetchDocumentBySlug<Page>({
    query: GetHomePage,
    slug: "home",
  });

  return data;
});

async function Home() {
  const data = await getData();

  if (!data) {
    return null;
  }

  return (
    <div className="h-full py-12 lg:container">
      <Navbar />

      <div className="flex h-full flex-1 flex-col justify-center space-y-24">
        <div className="mt-16 space-y-16 text-white">
          <div className="flex justify-end">
            <h3 className="max-w-xs text-sm md:max-w-sm md:text-lg">
              {data.subtitle}
            </h3>
          </div>
          <div className="max-w-5xl space-y-8">
            <h1
              className={`font-gustavo text-4xl font-bold uppercase leading-[64px] md:text-8xl`}
            >
              {data.title}
            </h1>

            <div className="flex justify-between">
              <div className="grid max-w-fit flex-1 grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-1">
                <CTA href="" text={data.ctaText || ""} />
                <Button className="h-full max-w-fit rounded-full bg-white/10 px-12 backdrop-blur-sm">
                  Learn More
                </Button>
              </div>
              <ScrollIcon className="animate-bounce self-end" />
            </div>
          </div>
        </div>

        <FeaturesStepper features={data.pageFeatures} />
      </div>
    </div>
  );
}

export default Home;
