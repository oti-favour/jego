function JegoPodLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-jego_pod min-h-full bg-center bg-no-repeat md:bg-cover">
      <div className="h-full min-h-svh w-full bg-gradient-to-b from-black/35 via-black/60 to-black/85">
        {children}
      </div>
    </div>
  );
}

export default JegoPodLayout;
