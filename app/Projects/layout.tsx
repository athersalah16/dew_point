import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dew Point Trading| Projects",
  description: "Explore Dew Point Trading's project experience and clients.",
};

export default function layout({ children }: { children: ReactNode }) {
  return children;
}