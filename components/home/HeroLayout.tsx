import React from "react";

function HeroLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-hero_car min-h-svh bg-cover bg-center bg-no-repeat">
      <div className="bg-hero_ray h-full bg-150 bg-no-repeat px-4 md:bg-80">
        {children}
      </div>
    </div>
  );
}

export default HeroLayout;
