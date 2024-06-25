import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";

const sans = PT_Sans({ weight: "400", subsets: ["latin"] });

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
      <body className={sans.className}>{children}</body>
    </html>
  );
}
