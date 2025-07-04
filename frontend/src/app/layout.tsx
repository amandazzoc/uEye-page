import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "uEye",
  description: "Landing page for uEye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/LOGO-UEYE.svg" type="image/svg+xml" />
      </head>
      <body className={`${mulish.variable}`}>{children}</body>
    </html>
  );
}
