"use client";
import { ScrollToElement } from "@/lib/utils";
import ScrollIcon from "@/public/assets/scroll-icon.svg";
import { Overview } from "@/types/generated-types";
import CTA, { CTASecondary } from "../CTA";
import HeadingOne, { Paragraph } from "../Typography";

function HeroOverview({ overview }: { overview: Overview }) {
  return (
    <div className="mt-16 space-y-16 text-white">
      <div className="flex flex-col items-end justify-end">
        <div className="max-w-fit">
          <Paragraph text={overview.description} />
          {/* <hr className="mt-6 border-[#7E7E7E96]" /> */}
        </div>
      </div>
      <div className="max-w-5xl space-y-8">
        <HeadingOne text={overview.title} />
        <div className="flex justify-between">
          <div className="grid max-w-fit flex-1 grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-1">
            <CTA
              onClick={() => {
                return (
                  !overview.cta && ScrollToElement({ hash: "#power-pods" })
                );
              }}
              href={overview.cta || "#power-pods"}
              text={overview.ctaText || "Explore Power Pods"}
            />
            <CTASecondary text="Learn More" />
          </div>
          <ScrollIcon className="animate-bounce self-end" />
        </div>
      </div>
    </div>
  );
}

export default HeroOverview;
