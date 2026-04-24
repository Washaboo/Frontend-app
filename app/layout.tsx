import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://washaboo.at"), // später echte Domain

  title: {
    default: "Auto waschen per App – WASHABOO",
    template: "%s – WASHABOO",
  },

  description:
    "Auto waschen per Smartphone. QR-Code scannen, Tarif wählen und direkt starten – ohne Münzen.",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Auto waschen per App – WASHABOO",
    description:
      "Waschgang starten per Smartphone – einfach, digital und ohne Münzen.",
    url: "/",
    siteName: "WASHABOO",
    images: ["/og-image.png"],
    locale: "de_AT",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Auto waschen per App – WASHABOO",
    description:
      "Waschgang starten per Smartphone – ohne Münzen und ohne Aufwand.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-white text-slate-900">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  );
}