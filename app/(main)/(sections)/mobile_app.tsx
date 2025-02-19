import AboutUsWaitlistForm from "@/components/AboutUsWaitlistForm";
import PageName from "@/components/PageName";
import { DynamicHeading, Paragraph } from "@/components/Typography";
import MobileAppLayout from "@/components/home/MobileAppLayout";
import { sanityImageUrl } from "@/lib/utils";
import { MobileApp, Overview } from "@/types/generated-types";
import Image from "next/image";

function MobileAppSection({ mobileApp }: { mobileApp: MobileApp }) {
  const { overview, comingSoon, heroImage } = mobileApp;
  return (
    <MobileAppLayout>
      <div className="space-y-8 px-4 pb-12 pt-16 lg:container md:pt-2">
        <PageName
          text={overview.pageName}
          className="hidden text-[#475569] md:block"
          position="right"
        />
        <div className="pt-16 md:pt-12">
          <MobileAppOverview overview={overview} comingSoon={comingSoon} />
        </div>

        {heroImage && (
          <div className="relative flex w-full justify-center">
            <Image
              src={sanityImageUrl(heroImage)}
              alt={heroImage.asset._ref}
              width={1920}
              height={1080}
              className="h-full w-full lg:max-w-screen-lg"
            />
            <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-white from-[17%] via-transparent to-transparent"></div>
          </div>
        )}
      </div>
    </MobileAppLayout>
  );
}

function MobileAppOverview({
  overview,
  comingSoon,
}: {
  overview: Overview;
  comingSoon: boolean;
}) {
  return (
    <div className="flex flex-col items-center space-y-8 text-black">
      <div className="relative">
        {comingSoon && (
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -rotate-[3.5deg]">
            <span className="transform rounded-xl bg-darkOrange px-6 py-2.5 text-xs uppercase md:px-8 md:py-4 md:text-base">
              Coming Soon
            </span>
          </div>
        )}
        <DynamicHeading
          className="mt-4 text-center normal-case md:mt-2 lg:max-w-4xl"
          level="p"
        >
          <span>{overview.title}</span>
        </DynamicHeading>
      </div>
      <Paragraph
        text={overview.description}
        className="min-w-full text-balance text-center text-[#475569]"
      />
      <AboutUsWaitlistForm />
    </div>
  );
}

export default MobileAppSection;
