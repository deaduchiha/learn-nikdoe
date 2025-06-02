import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      // tree={{
      //   name: "docs",
      //   children: [
      //     { name: "index", type: "page", url: "/docs/" },
      //     { name: "test", type: "page", url: "/docs/test" },
      //   ],
      // }}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
