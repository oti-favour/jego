import { CTAPlain } from "@/components/CTA";
import HeadingOne, { HeadingFour, HeadingThree } from "@/components/Typography";
import IntroLayout from "@/components/home/IntroLayout";
import { sanityImageUrl } from "@/lib/utils";
import { Intro } from "@/types/generated-types";
import Image from "next/image";
import Link from "next/link";

function IntroSection({ intro }: { intro: Intro }) {
  const { overview } = intro;

  return (
    <IntroLayout>
      <div className="flex h-full min-h-svh items-center text-white lg:container">
        <div className="w-full space-y-16">
          <div className="flex flex-col gap-6">
            <HeadingOne text={overview.title} className="max-w-5xl" />
            <HeadingThree
              text={overview.description}
              className="block lg:hidden"
            />
            <CTAPlain
              href=""
              text={overview.ctaText || ""}
              className="bg-brightTurquoise px-6 py-4"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="w-full">
                <HeadingFour text={"Our Partners"} className="" />
                <OurPartners partners={intro.partners} />
              </div>
            </div>
            <HeadingThree
              text={overview.description}
              className="-mt-4 hidden self-end lg:block"
            />
          </div>
        </div>
      </div>
    </IntroLayout>
  );
}

function OurPartners({ partners }: { partners: Intro["partners"] }) {
  return (
    <div className="flex items-center gap-6">
      {partners.map((partner, index) => (
        <Partner key={index} partner={partner} />
      ))}
    </div>
  );
}

const Partner = ({ partner }: { partner: Intro["partners"][0] }) => {
  return (
    <Link href={partner.url}>
      <Image
        src={sanityImageUrl(partner.logo)}
        alt={partner.name}
        width={500}
        height={500}
        className="h-auto w-32 object-contain"
      />
    </Link>
  );
};

export default IntroSection;
