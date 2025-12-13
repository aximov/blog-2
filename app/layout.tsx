import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-zen-kaku",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Aximov",
    template: "%s | Aximov",
  },
  description: "aximov.net",
  openGraph: {
    title: "Aximov",
    description: "aximov.net",
    url: baseUrl,
    siteName: "Aximov",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-primary text-secondary tracking-tight", // Use semantic bg/text
        GeistSans.variable,
        GeistMono.variable,
        zenKaku.variable
      )}
    >
      <body className="antialiased min-h-screen flex flex-col">
        <main className="flex-auto flex flex-col">
          <Navbar />
          <div className="layout-grid flex-1 pt-12 pb-24">
            {children}
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
