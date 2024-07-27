import Transition from "@/components/Transition";
import { getInvestorsData } from "@/hooks/getData";

async function Template({ children }: { children: React.ReactNode }) {
  const data = await getInvestorsData();
  return <Transition data={data}>{children}</Transition>;
}

export default Template;
