"use client";

import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { siteConfig } from "@/lib/siteConfig";
import Button from "@/components/ui/Button";

const APP_URL = siteConfig.appUrl;

export default function UserPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#0B1120] px-5 py-8 text-white shadow-[0_20px_60px_rgba(2,6,23,0.18)] sm:px-6 sm:py-10 md:px-10 md:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,195,247,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(33,150,243,0.2),_transparent_30%)]" />

        <div className="absolute -left-10 top-10 h-32 w-32 rounded-full border border-white/10" />
        <div className="absolute right-0 top-16 h-40 w-40 translate-x-10 rounded-full border border-white/10" />
        <div className="absolute bottom-10 right-20 h-16 w-16 rounded-full border border-[#4FC3F7]/30" />

        <div className="relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
              Nutzerzugang
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Waschgang starten
            </h1>

            <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
              Starte deinen Waschgang direkt an der Waschanlage – per App, mit
              Login und flexibler Nutzung.
            </p>
          </div>

          <div className="mt-8 grid items-center gap-8 md:mt-10 md:grid-cols-2 md:gap-10">
            <div className="flex justify-center">
              <div className="w-full max-w-[320px] rounded-[1.75rem] border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                <div className="relative rounded-[1.5rem] bg-white p-5 shadow-2xl sm:p-6">
                  <div className="absolute -right-4 -top-4 h-10 w-10 rounded-full border border-sky-200" />

                  <div className="flex flex-col items-center text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      QR-Code
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      Mit dem Smartphone scannen und direkt starten
                    </p>

                    <div className="mt-5">
                      <QRCodeSVG value={APP_URL} size={220} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm sm:p-5">
                <p className="text-sm font-semibold text-white">
                  1. QR-Code scannen
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Direkt an der Station oder von diesem Bildschirm.
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm sm:p-5">
                <p className="text-sm font-semibold text-white">
                  2. Login in der App
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Melde dich an oder erstelle ein Konto.
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm sm:p-5">
                <p className="text-sm font-semibold text-white">
                  3. Waschgang starten
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Tarif wählen und direkt loslegen.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm text-white/80">
                <p className="font-semibold text-white">Preise</p>
                <ul className="mt-2 space-y-1 text-white/70">
                  <li>Basic: 4× Waschen / Monat – 35 €</li>
                  <li>Premium: 1× täglich – 40 €</li>
                  <li>Einzelnutzung ebenfalls möglich</li>
                </ul>
                <p className="mt-2 text-xs text-white/50">
                  Abrechnung erfolgt monatlich
                </p>
              </div>

              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs uppercase tracking-wider text-white/40">
                  kein QR-Code?
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <Button
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                App direkt öffnen
              </Button>

              <p className="mt-3 text-xs text-white/55">
                Öffnet den Einstieg direkt im Browser
              </p>

              <p className="mt-3 break-all text-xs text-white/35">{APP_URL}</p>

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