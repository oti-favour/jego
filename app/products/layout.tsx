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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
