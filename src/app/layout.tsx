import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import PlausibleProvider from "next-plausible";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plausible Integrations",
  description: "Intergrating plausible with next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="plausible-integration.vercel.app" />
      </head>
      <body
        className={
          inter.className +
          " w-full h-full min-h-screen flex flex-col padding-x py-6"
        }
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
