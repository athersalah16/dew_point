import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dew Point Trading| Our Global Reach",
  description: "Explore Dew Point Trading's regional reach and global sourcing network.",
};

export default function layout({ children }: { children: ReactNode }) {
  return children;
}