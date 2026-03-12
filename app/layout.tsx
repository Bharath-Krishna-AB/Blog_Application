import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Blog Application: Insights & Ideas",
    template: "%s | Blog Application",
  },
  description:
    "A beautiful blog application to discover articles, tutorials, and expert knowledge.",
  keywords: ["blog", "articles", "tutorials", "development", "design"],
  openGraph: {
    type: "website",
    siteName: "Blog Application",
    title: "Blog Application: Insights & Ideas",
    description:
      "A beautiful blog application to discover articles, tutorials, and expert knowledge.",
    url: metadataBase.origin,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Application: Insights & Ideas",
    description:
      "A beautiful blog application to discover articles, tutorials, and expert knowledge.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
