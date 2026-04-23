"use client";

import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { siteConfig } from "@/lib/siteConfig";
import Button from "@/components/ui/Button";

const APP_URL = siteConfig.appUrl;

export default function UserPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#0B1120] px-6 py-10 text-white shadow-[0_20px_60px_rgba(2,6,23,0.18)] md:px-10 md:py-12">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,195,247,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(33,150,243,0.2),_transparent_30%)]" />

        {/* Bubbles */}
        <div className="absolute -left-10 top-10 h-32 w-32 rounded-full border border-white/10" />
        <div className="absolute right-0 top-16 h-40 w-40 translate-x-10 rounded-full border border-white/10" />
        <div className="absolute bottom-10 right-20 h-16 w-16 rounded-full border border-[#4FC3F7]/30" />

        <div className="relative z-10">
          {/* HEADER */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
              Nutzerzugang
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Jetzt Waschgang starten
            </h1>

            <p className="mt-3 text-base text-white/70">
              Scanne den QR-Code und starte direkt an der Waschanlage.
            </p>
          </div>

          <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
            {/* QR CODE */}
            <div className="flex justify-center">
              <div className="relative rounded-[1.75rem] bg-white p-6 shadow-2xl">
                <div className="absolute -right-4 -top-4 h-10 w-10 rounded-full border border-sky-200" />
                <QRCodeSVG value={APP_URL} size={220} />
              </div>
            </div>

            {/* ACTION FLOW */}
            <div>
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white">
                  QR-Code scannen
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Direkt an der Station oder von diesem Bildschirm.
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white">
                  App öffnet sich sofort
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Du bist direkt im richtigen Einstieg.
                </p>
              </div>

              {/* Divider */}
              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs uppercase tracking-wider text-white/40">
                  kein QR-Code?
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* CTA */}
              <Button
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                App direkt öffnen
              </Button>

              <p className="mt-3 break-all text-xs text-white/40">
                {APP_URL}
              </p>

              {/* BACK */}
              <div className="mt-6">
                <Link
                  href="/"
                  className="text-sm font-medium text-white/70 underline underline-offset-4 hover:text-white"
                >
                  Zurück zur Startseite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}