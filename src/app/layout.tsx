import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/Navbar";
import SessionWrapper from '@/app/ui/SessionWrapper';

export const metadata: Metadata = {
  title: "Steam Trade Portal",
  description: "Sell your game items fast and easy!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`bg-slate-50 antialiased`}>
            <SessionWrapper>
              <Navbar/>
              {children}
            </SessionWrapper>
      </body>
    </html>
  );
}
