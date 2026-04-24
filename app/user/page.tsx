"use client";

import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { siteConfig } from "@/lib/siteConfig";
import Button from "@/components/ui/Button";

const APP_URL = siteConfig.appUrl;

export default function UserPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-14">
        <section className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 md:grid-cols-[1fr_0.95fr]">
            <div className="px-5 py-8 sm:px-8 md:px-10 md:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                Nutzerzugang
              </p>

              <h1 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Waschgang ohne Münzen starten
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Scanne den QR-Code an der Waschanlage, wähle deinen Tarif und
                starte den Waschgang direkt per App.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  ["1", "QR-Code scannen", "Direkt an der Waschanlage öffnen."],
                  ["2", "Tarif wählen", "Abo oder Einzelnutzung auswählen."],
                  ["3", "Waschgang starten", "Ohne Münzen direkt loslegen."],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-sm font-semibold text-white">
                      {number}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        {title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">
                  Verfügbare Tarife
                </p>
                <div className="mt-3 grid gap-2 text-sm text-slate-600">
                  <div className="flex items-center justify-between gap-4">
                    <span>Basic · 4× Waschen / Monat</span>
                    <span className="font-semibold text-slate-950">35 €</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Premium · 1× täglich</span>
                    <span className="font-semibold text-slate-950">40 €</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Einzelnutzung</span>
                    <span className="font-semibold text-slate-950">möglich</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 bg-[#F8FAFC] px-5 py-8 sm:px-8 md:px-10 md:py-12 md:border-l md:border-t-0">
              <div className="mx-auto max-w-sm">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                    App öffnen
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    QR-Code mit dem Smartphone scannen oder direkt öffnen.
                  </p>

                  <div className="mt-6 flex justify-center rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                    <QRCodeSVG value={APP_URL} size={220} />
                  </div>
                </div>

                <div className="my-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-200" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    oder
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <Button
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#2563EB] hover:bg-[#1E40AF]"
                >
                  App direkt öffnen
                </Button>

                <p className="mt-3 text-center text-xs text-slate-500">
                  Öffnet den Einstieg direkt im Browser.
                </p>

                <div className="mt-6 text-center">
                  <Link
                    href="/"
                    className="text-sm font-medium text-slate-500 underline underline-offset-4 hover:text-slate-900"
                  >
                    Zurück zur Startseite
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}