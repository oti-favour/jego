import React from "react";

function HeroLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-hero_car bg-cover bg-center bg-no-repeat md:bg-left-top">
      <div className="h-full w-full bg-black/80">
        <div className="h-full bg-hero_ray bg-150 bg-no-repeat px-4 md:bg-80">
          {children}
        </div>
      </div>
    </div>
  );
}

export default HeroLayout;
