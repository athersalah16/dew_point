import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Footer/Footer";
import NavBarProvider from "./context/NavBarProvider";
import Header from "./Header/Header";
import ContactUs from "@/app/common/components/ContactUs";
import { Toaster } from "sonner";

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
          <Toaster position="top-center" theme="dark" richColors />{" "}
          <div className="w-full   min-h-screen">
            <Header />
            {children}
            <ContactUs />
            <Footer />
          </div>
        </NavBarProvider>
      </body>
    </html>
  );
}
