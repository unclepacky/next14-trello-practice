import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      // url: "/logo_fb.jpg",
      // href: "/logo_fb.jpg",
      url: "/favicon.png",
      href: "/favicon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-red-400`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
