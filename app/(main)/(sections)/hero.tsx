import CTA, { CTASecondary } from "@/components/CTA";
import FeaturesStepper from "@/components/FeaturesStepper";
import Navbar from "@/components/Navbar";
import HeadingOne, { HeadingThree } from "@/components/Typography";
import HeroLayout from "@/components/home/HeroLayout";
import ScrollIcon from "@/public/assets/scroll-icon.svg";
import { Hero, Overview } from "@/types/generated-types";

async function HeroSection({ hero }: { hero: Hero }) {
  return (
    <HeroLayout>
      <div className="flex h-full min-h-svh flex-col pt-12 lg:container">
        <Navbar />
        <div className="flex h-full flex-1 flex-col justify-center space-y-24">
          <HeroOverview overview={hero.overview} />
          <FeaturesStepper features={hero.pageFeatures} />
        </div>
      </div>
    </HeroLayout>
  );
}

function HeroOverview({ overview }: { overview: Overview }) {
  return (
    <div className="mt-16 space-y-16 text-white">
      <div className="flex justify-end">
        <HeadingThree text={overview.description} />
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
