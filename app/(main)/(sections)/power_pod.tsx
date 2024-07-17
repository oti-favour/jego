import CTA from "@/components/CTA";
import FeaturesStepper from "@/components/FeaturesStepper";
import PageName from "@/components/PageName";
import { DynamicHeading, Paragraph } from "@/components/Typography";
import WatchVideo from "@/components/WatchVideo";
import PowerPodLayout from "@/components/home/PowerPodLayout";
import { PowerPod } from "@/types/generated-types";

function PowerPodSection({ powerPod }: { powerPod: PowerPod }) {
  const { overview, video, pageFeatures } = powerPod;

  const firstWord = overview.title.split(" ")[0];
  const restOfTitle = overview.title.split(" ").slice(1).join(" ");
  return (
    <PowerPodLayout>
      <div className="px-4 lg:container" id="power-pods">
        <div className="grid h-full min-h-svh w-full px-4 lg:container">
          <PageName text={overview.pageName} />
          <div className="flex h-full flex-1 grow flex-col justify-center">
            <div className="space-y-8 py-12 text-white">
              <div className="flex flex-col-reverse gap-64 md:flex-col lg:gap-0">
                <div className="max-w-4xl space-y-8">
                  <DynamicHeading
                    level="h4"
                    text={firstWord}
                    className="space-x-4 text-white"
                  >
                    <span className="relative text-brightTurquoise">
                      <span className="absolute -bottom-3 -left-8 h-full w-full bg-lightning bg-cover bg-left-bottom bg-no-repeat bg-blend-difference md:-bottom-4 md:-left-24 md:bg-auto"></span>
                      {firstWord}
                    </span>
                    <span>{restOfTitle}</span>
                  </DynamicHeading>
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
                <div className="flex justify-end py-8 md:justify-center md:py-4 md:pl-[40%] lg:-mt-16 lg:py-0 2xl:py-0">
                  <WatchVideo videoUrl={video.videoUrl} title={video.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full px-4 pb-32 lg:px-8">
          <div className="max-w-[90svw] lg:max-w-[40svw]">
            <FeaturesStepper features={pageFeatures} />
          </div>
        </div>
      </div>
    </PowerPodLayout>
  );
}

export default PowerPodSection;
