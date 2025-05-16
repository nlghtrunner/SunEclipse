import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import ScrollUpButton from "@/components/ScrollUpButton";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import ScrollUp from "@/components/ScrollUp";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "osudesu",
  twitter: {
    card: "summary",
  },
  description: "osudesu is a private server for osu!, a rhythm game.",
  openGraph: {
    siteName: "osudesu",
    title: "osudesu",
    description: "osudesu is a private server for osu!, a rhythm game.",

    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/images/metadata.png`,
        width: 800,
        height: 800,
        alt: "osudesu Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body className="bg-background text-current min-h-screen flex flex-col font-medium">
        <Providers>
          <Header />
          <div className="row-padding-max-w-2xl py-8">{children}</div>
          <main className="flex-grow bg-background -z-30" />
          <Toaster />
          <Footer />
          <ScrollUp />
        </Providers>
        <ScrollUpButton />
      </body>
    </html>
  );
}
