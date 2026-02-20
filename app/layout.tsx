import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Helping Hands DFW | Supporting Our Homeless Neighbors",
  description:
    "Helping Hands DFW is a community-driven initiative supporting the homeless population in the Dallas–Fort Worth area. Donate, volunteer, or find resources.",
  metadataBase: new URL("https://helpinghandsdfw.org"),
  openGraph: {
    title: "Helping Hands DFW | Supporting Our Homeless Neighbors",
    description:
      "Community-driven support for the homeless population in Dallas–Fort Worth.",
    url: "https://helpinghandsdfw.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} min-h-screen flex flex-col antialiased`}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
