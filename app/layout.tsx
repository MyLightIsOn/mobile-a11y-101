import type { Metadata } from "next";
import { Geist, Henny_Penny } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Henny_Penny({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mobile Mystery House",
  description:
    "Solve the puzzles to learn the basics of using a mobile screen reader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono} antialiased`}>
        {children}
      </body>
    </html>
  );
}
