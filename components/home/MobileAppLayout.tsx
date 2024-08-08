function MobileAppLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-mobile_app_bg lg:bg-40 h-full min-h-svh bg-left-top bg-no-repeat px-4 md:bg-80">
      {children}
    </div>
  );
}

export default MobileAppLayout;
