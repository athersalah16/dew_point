import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dew Point Trading| Contact",
  description: "Contact Dew Point Trading for project support and quotations.",
};

export default function layout({ children }: { children: ReactNode }) {
  return children;
}