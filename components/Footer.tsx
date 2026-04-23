import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {siteConfig.appName}. Alle Rechte vorbehalten.</p>

        <nav className="flex flex-wrap gap-4">
          <Link href="/impressum" className="transition hover:text-black">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition hover:text-black">
            Datenschutz
          </Link>
          <Link href="/partner" className="transition hover:text-black">
            Partner werden
          </Link>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="transition hover:text-black"
          >
            Kontakt
          </a>
        </nav>
      </div>
    </footer>
  );
}