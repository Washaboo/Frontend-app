import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://frontend-nadja-aarugwnge-washaboo.vercel.app"),
  title: {
    default: "WASHABOO – Waschgang starten per App",
    template: "%s | WASHABOO",
  },
  description:
    "WASHABOO bringt Nutzer per QR-Code oder Link direkt zur Waschanlage. Waschgang per App starten, Standorte finden und Waschen ohne Stress erleben.",
  applicationName: "WASHABOO",
  keywords: [
    "WASHABOO",
    "Waschanlage App",
    "Waschgang per App",
    "Auto waschen App",
    "Waschen ohne Münzen",
    "QR-Code Waschanlage",
    "digitale Waschanlage",
    "Waschen ohne Stress",
  ],
  openGraph: {
    title: "WASHABOO – Waschgang starten per App",
    description:
      "Per QR-Code oder Link direkt zur Waschanlage. WASHABOO macht den Einstieg einfach, schnell und klar.",
    url: "https://frontend-nadja-aarugwnge-washaboo.vercel.app",
    siteName: "WASHABOO",
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WASHABOO – Waschgang starten per App",
    description:
      "Per QR-Code oder Link direkt zur Waschanlage. Einfach starten mit WASHABOO.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-[#F5F7FA] text-slate-900">
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}