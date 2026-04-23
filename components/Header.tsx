"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";
import styles from "./Header.module.css";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/user", label: "Für Nutzer" },
  { href: "/partner", label: "Partner werden" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4">
        <div className={clsx(styles.topRow, "gap-4")}>
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="min-w-0"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4FC3F7] via-[#2196F3] to-[#1E88E5] shadow-[0_10px_24px_rgba(33,150,243,0.22)]">
                <div className="h-5 w-5 rounded-full border border-white/45" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
                  {siteConfig.appName}
                </p>
                <p className="hidden text-xs font-medium text-slate-500 sm:block">
                  Waschen ohne Stress
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className={styles.desktopNav}>
            <nav className="flex items-center gap-6 text-sm">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "relative transition",
                      isActive
                        ? "font-semibold text-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {item.label}

                    {isActive && (
                      <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-[#4FC3F7] via-[#2196F3] to-[#1E88E5]" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Button */}
          <div className={styles.mobileButton}>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              className={clsx(
                "inline-flex min-h-[44px] items-center justify-center rounded-2xl border px-4 py-2 text-sm font-semibold transition-all duration-200",
                "border-slate-200 bg-white text-slate-700 shadow-sm",
                "hover:border-slate-300 hover:bg-slate-50",
                "active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26C6DA] focus-visible:ring-offset-2",
                menuOpen && "border-slate-300 bg-slate-100 text-slate-900"
              )}
            >
              {menuOpen ? "Schließen" : "Menü"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={clsx(styles.mobileMenu, "mt-4")}>
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <nav className="flex flex-col gap-2">
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
                          ? "bg-slate-100 font-semibold text-slate-900"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
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