import React from "react";

function HomeLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-home_car bg-center bg-cover bg-no-repeat h-svh">
      <div className="bg-home_ray bg-150 md:bg-80 bg-no-repeat h-full px-4">
        {children}
      </div>
    </div>
  );
}

export default HomeLayout;
