import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="text-base font-semibold tracking-tight text-slate-900">
              {siteConfig.appName}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Digitaler Zugang zur Waschanlage — einfach, modern und direkt
              nutzbar.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              © 2026 {siteConfig.appName}. Alle Rechte vorbehalten.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600 md:justify-end">
            <Link href="/partner" className="transition hover:text-slate-900">
              Partner werden
            </Link>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="transition hover:text-slate-900"
            >
              Kontakt
            </a>
            <Link href="/impressum" className="transition hover:text-slate-900">
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="transition hover:text-slate-900"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}