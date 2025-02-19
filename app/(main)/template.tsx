import Transition from "@/components/Transition";
import getData from "@/hooks/getData";

async function Template({ children }: { children: React.ReactNode }) {
  const data = await getData();
  return <Transition data={data}>{children}</Transition>;
}

export default Template;
