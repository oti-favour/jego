function PowerPodLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-full bg-power_pod bg-cover bg-center bg-no-repeat">
      <div className="h-full min-h-svh w-full bg-gradient-to-r from-black via-black/50 to-black/50 px-4">
        {children}
      </div>
    </div>
  );
}

export default PowerPodLayout;
