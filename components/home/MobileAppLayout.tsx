function MobileAppLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-mobile_app_bg lg:bg-40 h-svh min-h-full bg-left-top bg-no-repeat px-4 md:bg-80">
      {children}
    </div>
  );
}

export default MobileAppLayout;
