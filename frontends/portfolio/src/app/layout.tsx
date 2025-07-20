"use client";

import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-gray-900 antialiased pt-16">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4">{children}</main>
      </body>
    </html>
  );
}
