"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";

const FORM_ENDPOINT = "https://formspree.io/f/xpqkkeyd";

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 md:py-16">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#0B1120] px-6 py-10 text-white shadow-[0_20px_60px_rgba(2,6,23,0.18)] md:px-10 md:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,195,247,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(33,150,243,0.2),_transparent_30%)]" />

        <div className="absolute -left-10 top-10 h-32 w-32 rounded-full border border-white/10" />
        <div className="absolute right-0 top-16 h-40 w-40 translate-x-10 rounded-full border border-white/10" />
        <div className="absolute bottom-10 right-20 h-16 w-16 rounded-full border border-[#4FC3F7]/30" />

        <div className="relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
              Für Betreiber
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Mehr Umsatz. Weniger Aufwand.
            </h1>

            <p className="mt-3 text-base text-white/70">
              Ermöglichen Sie Ihren Kunden einen digitalen Zugang zur
              Waschanlage – ohne Münzen und ohne zusätzlichen Aufwand.
            </p>

            <p className="mt-3 text-sm text-white/70">
              Erste Standorte sind bereits im Einsatz.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">
                Einfach integriert
              </p>
              <p className="mt-1 text-sm text-white/70">
                Schneller Einstieg ohne komplexe Technik.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">
                Digitale Nutzung
              </p>
              <p className="mt-1 text-sm text-white/70">
                Kunden starten direkt per QR-Code oder Link.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">Skalierbar</p>
              <p className="mt-1 text-sm text-white/70">
                Weitere Standorte lassen sich einfach hinzufügen.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-[1.75rem] bg-white p-6 text-slate-900 shadow-2xl">
            {submitted ? (
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Anfrage gesendet
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  Vielen Dank!
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Ihre Anfrage wurde übermittelt. Wir melden uns persönlich bei
                  Ihnen.
                </p>
              </div>
            ) : (
              <form
                action={FORM_ENDPOINT}
                method="POST"
                onSubmit={(e) => {
  setTimeout(() => setSubmitted(true), 100);
}}
                className="space-y-4"
              >
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Partnerschaft anfragen
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Schreiben Sie uns kurz – wir melden uns persönlich und
                    klären die nächsten Schritte.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#26C6DA] focus:ring-2 focus:ring-[#26C6DA]/20"
                  />

                  <input
                    type="text"
                    name="unternehmen"
                    placeholder="Unternehmen"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#26C6DA] focus:ring-2 focus:ring-[#26C6DA]/20"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="standort"
                    placeholder="Standort"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#26C6DA] focus:ring-2 focus:ring-[#26C6DA]/20"
                  />

                  <input
                    type="text"
                    name="anzahl_waschanlagen"
                    placeholder="Anzahl Waschanlagen"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#26C6DA] focus:ring-2 focus:ring-[#26C6DA]/20"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#26C6DA] focus:ring-2 focus:ring-[#26C6DA]/20"
                />

                <textarea
                  name="message"
                  placeholder="Kurze Nachricht (optional)"
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#26C6DA] focus:ring-2 focus:ring-[#26C6DA]/20"
                />

                <Button type="submit" className="w-full">
                  Anfrage senden
                </Button>

                <p className="text-xs text-slate-400">
                  Ihre Anfrage wird direkt an uns übermittelt.
                </p>
              </form>
            )}
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="text-sm font-medium text-white/70 underline underline-offset-4 hover:text-white"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}