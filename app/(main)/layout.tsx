import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Jégo",
  description: "Welcome to Jégo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-product"}>
        <Navbar
          className=""
          scrollClassName=" bg-black/20 px-4 py-2 backdrop-blur md:py-4"
        />
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
