import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "JéGO",
  description: "Welcome to JéGO",
  openGraph: {
    title: "JéGO",
    // keep description above 50 characters
    description:
      "Welcome to JéGO Investment Page, Get the latest financial reports and updates on JéGO's innovative modular energy systems and electric vehicles.",
    type: "website",
    url: "https://jegopods.com",
    images: [
      {
        url: "https://jegopods.com/assets/logo.svg",
        width: 1200,
        height: 630,
        alt: "JéGO",
      },
    ],
  },
  applicationName: "JéGO",
  twitter: {
    card: "summary_large_image",
    site: "@jegopods",
    title: "JéGO",
    description:
      "Welcome to JéGO Investment Page, Get the latest financial reports and updates on JéGO's innovative modular energy systems and electric vehicles.",
    images: [
      {
        url: "https://jegopods.com/assets/logo.svg",
        width: 1200,
        height: 630,
        alt: "JéGO",
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
      <body className={"font-product"}>{children}</body>
    </html>
  );
}
