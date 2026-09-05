import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dew Point Trading| Industries",
  description: "Explore the industries supported by Dew Point Trading.",
};

export default function layout({ children }: { children: ReactNode }) {
  return children;
}