import { Toaster } from "@/components/ui/sonner";
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
      <body className={"font-product"}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
