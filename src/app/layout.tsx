
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./provider";
import { Noise } from "@/components/noise";
import { Footer } from "@/components/footer";
import { NowPlaying } from "@/components/nowPlaying";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sahil Tiwaskar",
  description: "Full-Stack & Blockchain Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <div className="relative flex min-h-screen flex-col">
            <Noise />
            <div className="hidden xl:block fixed top-5 right-5 z-30">
              <NowPlaying variant="full" />
            </div>
            <div className="xl:hidden">
              <NowPlaying variant="mini" />
            </div>
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
