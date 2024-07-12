import { sanityImageUrl } from "@/lib/utils";
import { Reports } from "@/types/generated-types";
import Image from "next/image";
import Link from "next/link";
import Chip from "./Chip";
import { DynamicHeading, Paragraph } from "./Typography";

function ReportItem({ report }: { report: Reports }) {
  return (
    <Link
      href={`/investors/reports/${report.slug.current}`}
      className="shadow-reportItem max-h-[45rem] overflow-clip rounded-2xl bg-white"
    >
      <Image
        src={sanityImageUrl(report.image)}
        alt={report.title}
        width={400}
        height={400}
        className="rounded-t-2x aspect-video h-auto w-auto object-cover"
      />
      <div className="space-y-2 p-4">
        <div>
          <Chip text={report.reportCategory} />
        </div>

        <DynamicHeading
          level="p"
          className="w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-base leading-tight md:text-lg"
        >
          {report.title}
        </DynamicHeading>

        <Paragraph className="truncate3 w-full overflow-hidden overflow-ellipsis text-[#878787]">
          {report.summary}
        </Paragraph>
      </div>
    </Link>
  );
}

export default ReportItem;
