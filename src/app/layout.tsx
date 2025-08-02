import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Vazirmatn } from "next/font/google";

import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nikode",
  description: "Your personal frontend journey — powered by Alireza Nikzad.",
};
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" className={vazirmatn.className} suppressHydrationWarning>
      <body dir="rtl" className="flex flex-col min-h-screen">
        <RootProvider dir="rtl">{children}</RootProvider>
      </body>
    </html>
  );
}
