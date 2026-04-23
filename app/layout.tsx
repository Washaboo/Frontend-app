import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Waschgang starten per App – WASHABOO",
  description:
    "Starte deinen Waschgang direkt per Smartphone. Mit WASHABOO öffnest du die App per QR-Code oder Link – ohne Münzen und ohne Aufwand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-white text-gray-900">
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}