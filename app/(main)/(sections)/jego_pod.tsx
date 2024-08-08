import CTA, { CTAPlain } from "@/components/CTA";
import FeaturesStepper from "@/components/FeaturesStepper";
import PageName from "@/components/PageName";
import { DynamicHeading, Paragraph } from "@/components/Typography";
import WatchVideo from "@/components/WatchVideo";
import JegoPodLayout from "@/components/home/JegoPodLayout";
import { JegoPod } from "@/types/generated-types";

function JegoPodSection({ jegoPod }: { jegoPod: JegoPod }) {
  const { overview, video, pageFeatures } = jegoPod;

  return (
    <JegoPodLayout>
      <div
        className="grid h-full min-h-svh px-4 pb-12 lg:container"
        id="jego-pods"
      >
        <PageName
          text={overview.pageName}
          position="right"
          lineClassName="bg-white"
          className="mb-24"
        />
        <div className="flex h-full items-center text-white">
          <div className="flex h-full min-h-full w-full flex-col justify-between gap-6 md:gap-12 lg:gap-16">
            <div className="flex w-full justify-end md:mt-8 lg:mt-16">
              <WatchVideo videoUrl={video.videoUrl} title={video.title} />
            </div>

            <div className="mt-16 space-y-8">
              <div className="space-y-5">
                <span className="font-gustavo text-lg font-bold uppercase md:text-[42px]">
                  introducing
                </span>
                <DynamicHeading
                  level="h4"
                  className="normal-case text-white"
                  text={""}
                >
                  {overview.title}
                </DynamicHeading>
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                <CTA href={overview.cta || ""} text={overview.ctaText || ""} />
                <CTAPlain
                  href={"/jegopod"}
                  text={overview.secondaryCtaText || ""}
                  className="bg-white/20 px-6 py-4 text-white md:py-0"
                />
              </div>
            </div>

            <div className="mb-6 mt-12 grid grid-cols-1 grid-rows-2 md:mb-12 md:mt-0 lg:grid-cols-2 lg:grid-rows-1">
              <div className="flex lg:justify-center">
                <Paragraph text={overview.description} />
              </div>
              <div className="lg:flex lg:justify-end">
                <div className="lg:w-10/12">
                  <FeaturesStepper features={pageFeatures.slice(0, 2)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </JegoPodLayout>
  );
}

export default JegoPodSection;
