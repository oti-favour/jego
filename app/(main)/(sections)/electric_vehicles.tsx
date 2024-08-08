import CTA from "@/components/CTA";
import ElectricProductItem from "@/components/ElectricProduct";
import PageName from "@/components/PageName";
import { DynamicHeading, Paragraph } from "@/components/Typography";
import { ElectricVehicle, Overview } from "@/types/generated-types";

function ElectricVehiclesSection({
  electricVehicle,
}: {
  electricVehicle: ElectricVehicle;
}) {
  const { overview, products } = electricVehicle;

  return (
    <div
      className="flex h-full min-h-svh flex-col space-y-12 px-4 pb-4 pt-12 lg:container md:pb-12"
      id="electric-vehicles"
    >
      <PageName text={overview.pageName} className="text-black" />
      <div className="flex flex-col gap-8">
        <OverviewHeading overview={overview} />
        <CTA
          className="self-start bg-[#E2E8F0]"
          href={overview.cta || ""}
          text={overview.ctaText || ""}
        />
        {!products.length ? null : (
          <ElectricProductItem productsRef={products} />
        )}
      </div>
    </div>
  );
}

function OverviewHeading({ overview }: { overview: Overview }) {
  const lastTwoTitleWords = overview.title.split(" ").slice(-2);

  const beforeLastTwoWords = overview.title.split(" ").slice(0, -2).join(" ");
  return (
    <div className="lg:flex">
      <DynamicHeading
        level="h3"
        className="text-4xl leading-[113%] lg:text-[58px]"
      >
        {beforeLastTwoWords}{" "}
        <span className="text-[#11111166]">{lastTwoTitleWords[0]} </span>
        {lastTwoTitleWords[1]}
      </DynamicHeading>

      <Paragraph
        text={overview.description}
        className="mt-3 leading-[160%] text-[#64748B]"
      />
    </div>
  );
}

export default ElectricVehiclesSection;
