import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";

const proximaNova = Oxygen({
  variable: "--font-oxygen",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Great American Donut",
  description: "Great American Donut",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${proximaNova.className} antialiased`}>{children}</body>
    </html>
  );
}
