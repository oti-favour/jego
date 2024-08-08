function PowerPodLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-power_pod_mobile min-h-full bg-cover bg-center bg-no-repeat lg:bg-power_pod">
      <div className="h-full min-h-svh w-full bg-gradient-to-l from-black/50 via-black/50 to-black/50 lg:bg-gradient-to-r lg:from-black">
        {children}
      </div>
    </div>
  );
}

export default PowerPodLayout;
