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
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className={styles.topRow}>
          <Link href="/" className="text-lg font-semibold tracking-tight">
            {siteConfig.appName}
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
                        ? "text-slate-900 font-semibold"
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
              className={clsx(
                "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
                "border border-slate-300 text-slate-700 bg-white",
                "hover:bg-slate-50 hover:-translate-y-[1px]",
                "active:scale-[0.97]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26C6DA] focus-visible:ring-offset-2",
                menuOpen && "bg-slate-100 border-slate-400"
              )}
            >
              {menuOpen ? "Schließen" : "Menü"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={clsx(styles.mobileMenu, "mt-4")}>
            <nav className="flex flex-col gap-3 text-sm">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={clsx(
                      "rounded-lg px-3 py-2 transition",
                      isActive
                        ? "bg-slate-100 text-slate-900 font-semibold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}