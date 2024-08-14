import { FadeInUp } from "@/components/Animation";
import FeaturesStepper from "@/components/FeaturesStepper";
import HeroLayout from "@/components/home/HeroLayout";
import HeroOverview from "@/components/home/HomeOverview";

import { Hero } from "@/types/generated-types";

function HeroSection({ hero }: { hero: Hero }) {
  return (
    <HeroLayout>
      <div className="flex h-full min-h-svh flex-col pb-12 lg:container">
        <div className="flex h-full flex-1 flex-col justify-between">
          <div className="flex h-full min-h-svh flex-col justify-end py-8 md:py-12">
            {/* <Navbar /> */}
            <div className="flex h-full">
              <HeroOverview overview={hero.overview} />
            </div>
          </div>
          <div className="pb-20 pt-8 md:pt-12">
            <FadeInUp>
              <FeaturesStepper features={hero.pageFeatures} />
            </FadeInUp>
          </div>
        </div>
      </div>
    </HeroLayout>
  );
}

export default HeroSection;
