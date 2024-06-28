import CTA, { CTASecondary } from "@/components/CTA";
import FeaturesStepper from "@/components/FeaturesStepper";
import Navbar from "@/components/Navbar";
import HeadingOne, { Paragraph } from "@/components/Typography";
import HeroLayout from "@/components/home/HeroLayout";
import ScrollIcon from "@/public/assets/scroll-icon.svg";
import { Hero, Overview } from "@/types/generated-types";

function HeroSection({ hero }: { hero: Hero }) {
  return (
    <HeroLayout>
      <div className="flex h-full min-h-svh flex-col py-12 lg:container">
        <div className="flex h-full flex-1 flex-col justify-between">
          <div className="flex h-full min-h-svh flex-col justify-between">
            <Navbar />
            <div className="flex h-full flex-1 items-center">
              <HeroOverview overview={hero.overview} />
            </div>
          </div>
          <div className="">
            <FeaturesStepper features={hero.pageFeatures} />
          </div>
        </div>
      </div>
    </HeroLayout>
  );
}

function HeroOverview({ overview }: { overview: Overview }) {
  return (
    <div className="mt-16 space-y-16 text-white">
      <div className="flex flex-col items-end justify-end">
        <div className="max-w-fit">
          <Paragraph text={overview.description} />
          {/* <hr className="mt-6 border-[#7E7E7E96]" /> */}
        </div>
      </div>
      <div className="max-w-5xl space-y-8">
        <HeadingOne text={overview.title} />
        <div className="flex justify-between">
          <div className="grid max-w-fit flex-1 grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-1">
            <CTA href="" text={overview.ctaText || ""} />
            <CTASecondary text="Learn More" />
          </div>
          <ScrollIcon className="animate-bounce self-end" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
