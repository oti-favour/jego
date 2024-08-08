import ReportCategoriesSection from "@/components/ReportCategories";
import { DynamicHeading, Paragraph } from "@/components/Typography";
import { getReports } from "@/hooks/getData";
import { Investors } from "@/types/generated-types";

async function ReportsSection({ reports }: { reports: Investors["reports"] }) {
  const reportContents = await getReports();
  if (!reportContents) {
    return null;
  }

  return (
    <div className="h-full min-h-svh space-y-8 px-4">
      <div className="py-12 lg:container lg:space-y-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:gap-0">
          <DynamicHeading
            level="h3"
            className="text-2xl leading-tight md:text-6xl"
          >
            {reports.title}
          </DynamicHeading>
          <Paragraph className="text-[#878787]">
            {reports.description}
          </Paragraph>
        </div>
        <div>
          <ReportCategoriesSection reports={reportContents} />
        </div>
      </div>
    </div>
  );
}

export default ReportsSection;
