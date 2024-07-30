// app/RootLayoutClient.js
"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import MainNavbar from "@/components/MainNavbar";
import { Providers } from "./redux/providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayoutClient({ children }) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body>
        <Providers>
          {!pathName.startsWith("/profile") && <MainNavbar />}
          {children}
        </Providers>
      </body>
    </html>
  );
}
