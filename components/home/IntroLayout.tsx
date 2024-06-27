function IntroLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-intro min-h-svh bg-cover bg-center bg-no-repeat px-4">
      {children}
    </div>
  );
}

export default IntroLayout;
