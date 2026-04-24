"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import styles from "./Header.module.css";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/user", label: "Für Nutzer" },
  { href: "/partner", label: "Partner werden" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
        <div className={clsx(styles.topRow, "gap-4")}>
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex shrink-0 items-center"
            aria-label="Zur Startseite"
          >
            <img
              src="/washaboo-logo.svg"
              alt="WASHABOO"
              className="h-10 w-auto object-contain sm:h-11 md:h-12"
              draggable="false"
            />
          </Link>

          <div className={styles.desktopNav}>
            <nav className="flex items-center gap-5 text-sm">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "font-medium transition",
                      isActive
                        ? "text-[#2563EB]"
                        : "text-slate-600 hover:text-slate-950"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className={styles.mobileButton}>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              className={clsx(
                "inline-flex min-h-[42px] items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition",
                "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                "active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2",
                menuOpen && "border-[#2563EB]/30 bg-[#EFF6FF] text-[#2563EB]"
              )}
            >
              {menuOpen ? "Schließen" : "Menü"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className={clsx(styles.mobileMenu, "mt-3")}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={clsx(
                        "rounded-xl px-4 py-3 text-sm font-medium transition",
                        isActive
                          ? "bg-[#EFF6FF] font-semibold text-[#2563EB]"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}