import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="text-sm font-bold tracking-tight text-slate-950">
              {siteConfig.appName}
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Digitaler Zugang zur Waschanlage — per QR-Code, Link und klaren
              Tarifen.
            </p>

            <p className="mt-4 text-xs text-slate-400">
              © 2026 {siteConfig.appName}. Alle Rechte vorbehalten.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-500 md:justify-end">
            <Link
              href="/partner"
              className="font-medium text-[#2563EB] transition hover:text-[#1E40AF]"
            >
              Partner werden
            </Link>

            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="transition hover:text-slate-950"
            >
              Kontakt
            </a>

            <Link href="/impressum" className="transition hover:text-slate-950">
              Impressum
            </Link>

            <Link
              href="/datenschutz"
              className="transition hover:text-slate-950"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}