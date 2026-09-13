import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dew Point Trading| Products ",
  description: "Explore Dew Point Trading's products",
};


function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

export default ProductsLayout;
