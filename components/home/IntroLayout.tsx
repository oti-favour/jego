function IntroLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="h-svh min-h-full bg-intro bg-cover bg-center bg-no-repeat px-4">
      {children}
    </div>
  );
}

export default IntroLayout;
