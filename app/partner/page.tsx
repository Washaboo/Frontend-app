"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";

const FORM_ENDPOINT = "https://formspree.io/f/xpqkkeyd";

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
        <section className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="px-5 py-8 sm:px-8 md:px-10 md:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                Für Betreiber
              </p>

              <h1 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Digitale Waschgänge für Ihre Anlage
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Bieten Sie Kunden einen einfachen Einstieg per QR-Code oder
                Link. Ohne Münzen, mit klaren Tarifen und weniger Reibung im
                Ablauf.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  [
                    "Mehr Komfort für Kunden",
                    "Kunden starten den Waschgang direkt per Smartphone.",
                  ],
                  [
                    "Abo und Einzelnutzung",
                    "Flexible Modelle für regelmäßige und spontane Nutzer.",
                  ],
                  [
                    "Einfacher digitaler Zugang",
                    "QR-Code scannen, einloggen, Tarif wählen und starten.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4"
                  >
                    <p className="text-sm font-semibold text-slate-950">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#2563EB]/15 bg-[#EFF6FF] p-4">
                <p className="text-sm font-semibold text-slate-950">
                  Für bestehende Waschanlagen
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  WASHABOO ist für Betreiber gedacht, die ihre Anlage digital
                  zugänglicher machen möchten, ohne den bestehenden Betrieb
                  unnötig zu verkomplizieren.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 bg-[#F8FAFC] px-5 py-8 sm:px-8 md:px-10 md:py-12 lg:border-l lg:border-t-0">
              {submitted ? (
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                    Anfrage gesendet
                  </p>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                    Vielen Dank.
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Ihre Anfrage wurde übermittelt. Wir melden uns persönlich
                    bei Ihnen und klären die nächsten Schritte.
                  </p>

                  <Link
                    href="/"
                    className="mt-6 inline-flex text-sm font-medium text-slate-500 underline underline-offset-4 hover:text-slate-900"
                  >
                    Zurück zur Startseite
                  </Link>
                </div>
              ) : (
                <form
                  action={FORM_ENDPOINT}
                  method="POST"
                  onSubmit={() => {
                    setTimeout(() => setSubmitted(true), 100);
                  }}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                      Partnerschaft
                    </p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                      Standort anfragen
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Schreiben Sie uns kurz. Wir prüfen gemeinsam, wie
                      WASHABOO zu Ihrer Waschanlage passt.
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15"
                      />

                      <input
                        type="text"
                        name="unternehmen"
                        placeholder="Unternehmen"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15"
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        type="text"
                        name="standort"
                        placeholder="Standort"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15"
                      />

                      <input
                        type="text"
                        name="anzahl_waschanlagen"
                        placeholder="Anzahl Waschanlagen"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15"
                      />
                    </div>

                    <input
                      type="email"
                      name="email"
                      placeholder="E-Mail"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15"
                    />

                    <textarea
                      name="message"
                      placeholder="Kurze Nachricht (optional)"
                      rows={4}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/15"
                    />

                    <Button
                      type="submit"
                      className="w-full bg-[#2563EB] hover:bg-[#1E40AF]"
                    >
                      Anfrage senden
                    </Button>

                    <p className="text-xs leading-5 text-slate-400">
                      Ihre Anfrage wird direkt an WASHABOO übermittelt.
                    </p>

                    <Link
                      href="/"
                      className="inline-flex text-sm font-medium text-slate-500 underline underline-offset-4 hover:text-slate-900"
                    >
                      Zurück zur Startseite
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}