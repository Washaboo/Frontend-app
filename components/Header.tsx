"use client";

import Image from "next/image";
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
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
        <div className={clsx(styles.topRow, "gap-4")}>
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex min-w-0 items-center"
            aria-label="Zur Startseite"
          >
            import Image from "next/image";

<Image
  src="/Wash.svg"
  alt="WASHABOO"
  width={140}
  height={40}
  className="h-9 w-auto"
/>
          </Link>

          <div className={styles.desktopNav}>
            <nav className="flex items-center gap-2 rounded-full bg-slate-100/80 p-1 text-sm">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "rounded-full px-4 py-2 font-medium transition",
                      isActive
                        ? "bg-white text-slate-950 shadow-sm"
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
                "inline-flex min-h-[42px] items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition",
                "bg-slate-100 text-slate-700 hover:bg-slate-200",
                "active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26C6DA] focus-visible:ring-offset-2",
                menuOpen && "bg-slate-200 text-slate-950"
              )}
            >
              {menuOpen ? "Schließen" : "Menü"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className={clsx(styles.mobileMenu, "mt-3")}>
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={clsx(
                        "rounded-2xl px-4 py-3 text-sm font-medium transition",
                        isActive
                          ? "bg-[#EAF7FF] font-semibold text-[#1565C0]"
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