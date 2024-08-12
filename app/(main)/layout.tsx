import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Jégo",
  description:
    "Welcome to Jégo, experience a cleaner, more sustainable future with JéGO's innovative modular energy systems and electric vehicles, designed to bring eco-friendly living within reach.",
  openGraph: {
    title: "Jégo",
    description:
      "Welcome to Jégo, experience a cleaner, more sustainable future with JéGO's innovative modular energy systems and electric vehicles, designed to bring eco-friendly living within reach.",
    type: "website",
    url: "https://jegopods.com",
    images: [
      {
        url: "https://jegopods.com/assets/logo.svg",
        width: 1200,
        height: 630,
        alt: "Jégo",
      },
    ],
  },
  applicationName: "Jégo",
  twitter: {
    card: "summary_large_image",
    site: "@jegopods",
    title: "Jégo",
    description:
      "Welcome to Jégo, experience a cleaner, more sustainable future with JéGO's innovative modular energy systems and electric vehicles, designed to bring eco-friendly living within reach.",
    images: [
      {
        url: "https://jegopods.com/assets/logo.svg",
        width: 1200,
        height: 630,
        alt: "Jégo",
      },
    ],
  },
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
