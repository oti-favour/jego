import CTA, { CTAPlain } from "@/components/CTA";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import { DynamicHeading, Paragraph } from "@/components/Typography";
import { sanityImageUrl } from "@/lib/utils";
import { Investors, Overview } from "@/types/generated-types";
import Image from "next/image";
import Link from "next/link";

function InvestorsHeroSection({ home }: { home: Investors["home"] }) {
  const { overview, image } = home;
  return (
    <div className="p-4 lg:container lg:h-svh">
      <div className="space-y-12 md:space-y-16 lg:space-y-0">
        <div className="mt-2 lg:mt-8 lg:hidden">
          <Navbar hideLogo desktopClassName="text-black" menuColor="black" />
        </div>
        <div className="max-w-lg lg:hidden">
          <DynamicHeading className="text-4xl md:text-5xl" level="h1">
            {overview.title}
          </DynamicHeading>
        </div>
        <div className="flex flex-col-reverse gap-12 lg:h-[96svh] lg:flex-row">
          <div className="relative flex justify-end rounded-xl">
            <div className="relative flex w-fit">
              <Image
                src={sanityImageUrl(image)}
                alt={overview.title}
                width={1920}
                height={1080}
                className="aspect-video h-auto w-auto rounded-xl object-cover lg:aspect-[9/16] lg:h-full"
              />
              <Link href={"/"}>
                <Logo
                  className="absolute left-[20%] top-0 z-10 hidden h-fit w-24 lg:mt-4 lg:block"
                  size="sm"
                />
              </Link>
              <div className="absolute left-0 top-0 h-full w-full rounded-xl bg-black/50"></div>
            </div>
          </div>
          <div className="flex grow basis-3/5 flex-col justify-between">
            <div className="mt-2 hidden w-full lg:mt-8 lg:block">
              <Navbar
                hideLogo
                desktopClassName="text-black"
                menuColor="black"
              />
            </div>
            <div className="hidden h-full flex-1 grow lg:block">
              <OverviewSection overview={overview} />
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <OverviewSection overview={overview} />
        </div>
      </div>
    </div>
  );
}

function OverviewSection({ overview }: { overview: Overview }) {
  return (
    <div className="h-full grow lg:flex lg:flex-1 lg:flex-col lg:justify-around">
      <div className="hidden max-w-screen-sm text-balance lg:block">
        <DynamicHeading className="lg:text-7xl" level="h1">
          {overview.title}
        </DynamicHeading>
      </div>
      <div className="space-y-8">
        <Paragraph className="text-[#64748B]">{overview.description}</Paragraph>
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-8">
          <CTA
            text={overview.ctaText || "Updates and News"}
            href={overview.cta || "#news"}
            className="bg-[#E2E8F0]"
          />
          <CTAPlain
            text={overview.secondaryCtaText || "Investor Relations"}
            href={overview.secondaryCta || "#finace"}
            className="text-[#475569] underline underline-offset-8"
          />
        </div>
      </div>
    </div>
  );
}

export default InvestorsHeroSection;
