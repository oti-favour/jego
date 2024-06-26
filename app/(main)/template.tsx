import Transition from "@/components/Transition";

function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <Transition />
    </div>
  );
}

export default Template;
