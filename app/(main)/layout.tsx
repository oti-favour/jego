import Navbar from "@/components/Navbar";
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
          className="py-6"
          scrollClassName="rounded-full bg-black/20 px-4 py-2 backdrop-blur md:py-4"
        />
        {children}
      </body>
    </html>
  );
}
