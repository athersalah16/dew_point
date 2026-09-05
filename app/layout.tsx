import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Footer/Footer";
import NavBarProvider from "./context/NavBarProvider";
import { Toaster } from "@/components/ui/toast";
import Header from "./Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dew Point Trading",
  description: "Your Key to Successful Trading",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBarProvider>
          <Toaster />
          <div className="w-full   min-h-screen">
            <Header />

            {children}
            
            <Footer />
          </div>
        </NavBarProvider>
      </body>
    </html>
  );
}
