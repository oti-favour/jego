import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "JéGO",
  description: "Welcome to JéGO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-product"} id="root">
        <Navbar
          className="bg-[#DEDEDE]/50 text-black"
          desktopClassName="text-black"
          mobileClassName="text-black"
        />
        {children}
      </body>
    </html>
  );
}
