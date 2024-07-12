import { ReportsCategories } from "@/lib/consts";
import { Reports } from "@/types/generated-types";
import ReportItem from "./ReportItem";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

async function ReportCategoriesSection({ reports }: { reports: Reports[] }) {
  const categories = ReportsCategories;

  return (
    <div>
      <Tabs defaultValue="All" className="mt-12 space-y-6">
        <ScrollArea className="w-[95svw]">
          <TabsList className="">
            <TabsTrigger
              className="rounded-full px-4 data-[state=active]:bg-black data-[state=active]:text-white lg:px-6"
              value="All"
            >
              All
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger
                className="rounded-full data-[state=active]:bg-black data-[state=active]:text-white lg:px-6"
                value={category.value}
                key={category.value}
                disabled={
                  reports.filter(
                    (report) => report.reportCategory === category.value,
                  ).length === 0
                }
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollArea>
        <TabsContent
          value="All"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {reports.map((report) => (
            <ReportItem key={report._id} report={report} />
          ))}
        </TabsContent>
        {categories.map((category) => {
          const reportItems = reports.filter(
            (report) => report.reportCategory === category.value,
          );
          return (
            <TabsContent value={category.value} key={category.value}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {reportItems.map((report) => (
                  <ReportItem key={report._id} report={report} />
                ))}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}

export default ReportCategoriesSection;
