
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./provider";
import { Noise } from "@/components/noise";
import { Footer } from "@/components/footer";
import { NowPlaying } from "@/components/nowPlaying";
import { Dock } from "@/components/dock";
import { Analytics } from "@vercel/analytics/next";

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

const description =
  "Frontend Engineer at Dodo Payments. I build for the web, maintain BillingSDK, and ship open source.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sahil.wtf"),
  title: {
    default: "Sahil Tiwaskar",
    template: "%s · Sahil Tiwaskar",
  },
  description,
  keywords: [
    "Sahil Tiwaskar",
    "Frontend Engineer",
    "Dodo Payments",
    "BillingSDK",
    "React",
    "Next.js",
    "TypeScript",
    "open source",
  ],
  authors: [{ name: "Sahil Tiwaskar", url: "https://sahil.wtf" }],
  creator: "Sahil Tiwaskar",
  openGraph: {
    type: "website",
    url: "https://sahil.wtf",
    siteName: "Sahil Tiwaskar",
    title: "Sahil Tiwaskar",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Tiwaskar",
    description,
    creator: "@sahiltwtz",
  },
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
            {/* xl+: now-playing floats in the right gutter; below xl it's a mini player */}
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
          <Dock />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
