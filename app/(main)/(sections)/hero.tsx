import CTA from "@/components/CTA";
import FeaturesStepper from "@/components/FeaturesStepper";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import ScrollIcon from "@/public/assets/scroll-icon.svg";
import { Hero, Overview } from "@/types/generated-types";

async function HeroSection({ hero }: { hero: Hero }) {
  return (
    <div className="flex h-full min-h-svh flex-col py-12 lg:container">
      <Navbar />

      <div className="flex h-full flex-1 flex-col justify-center space-y-24">
        <HeroOverview overview={hero.overview} />
        <FeaturesStepper features={hero.pageFeatures} />
      </div>
    </div>
  );
}

function HeroOverview({ overview }: { overview: Overview }) {
  return (
    <div className="mt-16 space-y-16 text-white">
      <div className="flex justify-end">
        <h3 className="max-w-xs text-sm md:max-w-sm md:text-lg">
          {overview.description}
        </h3>
      </div>
      <div className="max-w-5xl space-y-8">
        <h1
          className={`font-gustavo text-4xl font-bold uppercase leading-[64px] md:text-8xl`}
        >
          {overview.title}
        </h1>

        <div className="flex justify-between">
          <div className="grid max-w-fit flex-1 grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-1">
            <CTA href="" text={overview.ctaText || ""} />
            <Button className="h-full max-w-fit rounded-full bg-white/10 px-12 backdrop-blur-sm">
              Learn More
            </Button>
          </div>
          <ScrollIcon className="animate-bounce self-end" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
