import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dew Point Trading| Why Dew Point",
  description: "Discover the advantages of partnering with Dew Point Trading.",
};

export default function layout({ children }: { children: ReactNode }) {
  return children;
}