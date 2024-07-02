import { CTAPlain } from "@/components/CTA";
import PageName from "@/components/PageName";
import { Caption, DynamicHeading, Paragraph } from "@/components/Typography";
import { sanityImageUrl } from "@/lib/utils";
import { About, Overview } from "@/types/generated-types";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import Image from "next/image";

function AboutUsSection({ about }: { about: About }) {
  const { overview, image, Members } = about;

  return (
    <div className="-z-10 h-full min-h-svh w-full">
      <div className="space-y-8 px-4 lg:container">
        <PageName text={overview.pageName} className="text-[#64748B]" />
        <div className="space-y-8 pb-12">
          <AboutUsOverview overview={overview} image={image} />
        </div>
      </div>
      <div className="pointer-events-none flex overflow-x-hidden lg:-mt-32 2xl:-mt-40">
        <div className="animate-marquee inline-block h-fit w-full whitespace-nowrap">
          <div className="font-dela -z-50 h-fit text-[167px] text-[#E8E8E8] lg:text-[267px]">
            <div className="-rotate-[4.975deg]">JeGO . JeGO</div>
          </div>
        </div>
      </div>
      <div className="space-y-8 px-4 lg:container">
        <Caption
          className="font-gustavo font-bold lg:text-5xl"
          text={"the corporate team"}
        />
      </div>
    </div>
  );
}

function AboutUsOverview({
  overview,
  image,
}: {
  overview: Overview;
  image: SanityAsset;
}) {
  const lastChar = overview.title.slice(-1);
  const rest = overview.title.slice(0, -1);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-0">
      <div className="flex flex-col items-center space-y-8 lg:hidden">
        <DynamicHeading level="h1" className="text-black">
          {overview.title}
        </DynamicHeading>
        <Paragraph className="whitespace-pre-line leading-loose text-[#64748B]">
          {overview.description}
        </Paragraph>
        <CTAPlain
          href={overview.cta || ""}
          text={overview.ctaText || "Reach out to us"}
          className="bg-brightTurquoise px-6 py-3"
        />
      </div>
      <div></div>
      {image && (
        <div className="relative z-50">
          <div className="relative mx-auto max-w-xs md:max-w-[90%] lg:mx-0 lg:max-w-[90%] 2xl:max-w-full">
            <Image
              src={sanityImageUrl(image)}
              alt={image.asset._ref}
              width={1920}
              height={1080}
              layout="responsive"
              className="w-fit lg:w-auto"
            />
            <div className="absolute left-0 top-0 -z-50 h-full w-full rotate-[8.2deg] bg-[#FFF5EB]"></div>
          </div>
          <div className="absolute right-[97.5%] top-1/2 hidden w-full -translate-y-1/2 space-y-12 lg:block">
            <div className="flex justify-end text-end">
              <DynamicHeading
                level="p"
                className="relative w-full whitespace-nowrap normal-case"
              >
                {rest}
                <span className="absolute left-full text-white">
                  {lastChar}
                </span>
              </DynamicHeading>
            </div>
            <div className="flex flex-col items-center space-y-8">
              <div className="w-full space-y-8">
                <Paragraph className="min-w-[28rem] whitespace-pre-line leading-loose text-[#64748B]">
                  {overview.description}
                </Paragraph>
                <CTAPlain
                  href={overview.cta || ""}
                  text={overview.ctaText || "Reach out to us"}
                  className="bg-brightTurquoise px-6 py-3"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutUsSection;
