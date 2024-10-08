import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const ibmPlex = IBM_Plex_Sans_Thai({
  weight: "400",
  subsets: ["thai"],
});

export const metadata: Metadata = {
  title: "Akira Chenyavanij",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlex.className}>{children}</body>
      <Toaster />
    </html>
  );
}
