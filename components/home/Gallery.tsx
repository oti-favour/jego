import React from "react";

function GalleryLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-gallery min-h-svh bg-cover bg-center bg-no-repeat">
      {children}
    </div>
  );
}

export default GalleryLayout;
