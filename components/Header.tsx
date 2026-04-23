"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import styles from "./Header.module.css";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/user", label: "Für Nutzer" },
  { href: "/partner", label: "Partner werden" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className={styles.topRow}>
          <Link href="/" className="text-lg font-semibold tracking-tight">
            {siteConfig.appName}
          </Link>

          <div className={styles.desktopNav}>
            <nav className="flex items-center gap-6 text-sm text-gray-700">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-black">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.mobileButton}>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700"
            >
              Menü
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className={styles.mobileMenu}>
            <nav className="flex flex-col gap-3 text-sm text-gray-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="transition hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}