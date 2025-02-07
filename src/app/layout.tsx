import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Footer from "~/components/Footer";
import SideStripe from "~/components/SideStripe";

export const metadata: Metadata = {
  title: "LR-Projects Portfolio",
  description: "Portfolio of Lukas aka LR-Projects",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-gradient-to-b from-[#2e026d] to-[#221d38] text-white">
        <SideStripe />
        {children}
        <Footer />
      </body>
    </html>
  );
}
