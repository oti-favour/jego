import Transition from "@/components/Transition";
import HomeDataProvider from "@/hooks/useHomeData";

function Template({ children }: { children: React.ReactNode }) {
  return (
    <HomeDataProvider>
      {children}
      <Transition />
    </HomeDataProvider>
  );
}

export default Template;
