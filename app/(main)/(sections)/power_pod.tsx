import CTA from "@/components/CTA";
import FeaturesStepper from "@/components/FeaturesStepper";
import PageName from "@/components/PageName";
import { HeadingThree, Paragraph } from "@/components/Typography";
import WatchVideo from "@/components/WatchVideo";
import PowerPodLayout from "@/components/home/PowerPodLayout";
import { PowerPod } from "@/types/generated-types";

function PowerPodSection({ powerPod }: { powerPod: PowerPod }) {
  const { overview, video, pageFeatures } = powerPod;

  const firstWord = overview.title.split(" ")[0];
  const restOfTitle = overview.title.split(" ").slice(1).join(" ");
  return (
    <PowerPodLayout>
      <div className="grid h-full min-h-svh w-full px-4 lg:container">
        <PageName text={overview.pageName} />
        <div className="flex h-full flex-1 grow flex-col justify-center">
          <div className="space-y-8 py-12 text-white">
            <div className="flex flex-col-reverse gap-8 md:flex-col">
              <div className="max-w-4xl space-y-8">
                <HeadingThree text={firstWord} className="space-x-4 text-white">
                  <span className="relative text-brightTurquoise">
                    <span className="absolute -bottom-3 -left-8 h-full w-full bg-lightning bg-cover bg-left-bottom bg-no-repeat bg-blend-difference md:-bottom-4 md:-left-24 md:bg-auto"></span>
                    {firstWord}
                  </span>
                  <span>{restOfTitle}</span>
                </HeadingThree>
                <Paragraph
                  text={overview.description}
                  className="text-[#CBD5E1]"
                />
                <div>
                  <CTA
                    text={overview.ctaText || ""}
                    href={overview.cta || ""}
                  />
                </div>
              </div>
              <div className="flex justify-end py-8 md:justify-center md:py-12 md:pl-[40%] 2xl:py-24">
                <WatchVideo videoUrl={video.videoUrl} title={video.title} />
              </div>
            </div>
            <div>
              <div className="lg:max-w-[40svw]">
                <FeaturesStepper features={pageFeatures} />
              </div>
              {/* TODO: Scrol Icon*/}
            </div>
          </div>
        </div>
      </div>
    </PowerPodLayout>
  );
}

export default PowerPodSection;
