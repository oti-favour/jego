import React from "react";

function FAQLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-faq min-h-svh bg-[#FAFAFA] bg-cover bg-center bg-no-repeat">
      {children}
    </div>
  );
}

export default FAQLayout;
