import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dew Point Trading| Services",
  description: "Explore Dew Point Trading's supply and technical services.",
};

export default function layout({ children }: { children: ReactNode }) {
  return children;
}