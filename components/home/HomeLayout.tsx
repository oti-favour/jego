import React from "react";

function HomeLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-home_car bg-cover bg-center bg-no-repeat">
      <div className="h-full bg-home_ray bg-150 bg-no-repeat px-4 md:bg-80">
        {children}
      </div>
    </div>
  );
}

export default HomeLayout;
