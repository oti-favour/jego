import Transition from "@/components/Transition";
import { getLocations } from "@/hooks/getData";

async function Template({ children }: { children: React.ReactNode }) {
  const data = await getLocations();
  return <Transition data={data}>{children}</Transition>;
}

export default Template;
