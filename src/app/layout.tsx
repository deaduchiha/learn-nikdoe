import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Geist } from "next/font/google";

import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nikode",
  description: "Your personal frontend journey — powered by Alireza Nikzad.",
};
const geist = Geist({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
