import type { Metadata } from "next";
import { Suspense } from "react";
import StationsList from "@/components/StationsList";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Auto waschen per App – WASHABOO",
  description:
    "Starte deinen Waschgang direkt per Smartphone. Mit WASHABOO öffnest du die App per QR-Code oder Link, wählst deinen Tarif und legst los.",
  openGraph: {
    title: "Auto waschen per App – WASHABOO",
    description:
      "Per QR-Code direkt zur Waschanlage. Login, Tarif wählen und Waschgang starten – einfach mit WASHABOO.",
    url: "/",
  },
};

function StationsListSkeleton() {
  return (
    <section className="mt-16 md:mt-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="h-4 w-28 animate-pulse rounded-full bg-slate-200" />
          <div className="mt-3 h-9 w-80 max-w-full animate-pulse rounded-xl bg-slate-200" />
          <div className="mt-4 h-5 w-96 max-w-full animate-pulse rounded-xl bg-slate-200" />
        </div>

        <div className="h-10 w-28 animate-pulse rounded-full bg-white ring-1 ring-slate-200/70" />
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="h-3 w-20 animate-pulse rounded-full bg-slate-200" />
            <div className="mt-3 h-7 w-40 animate-pulse rounded-xl bg-slate-200" />

            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <div className="h-4 w-32 animate-pulse rounded-lg bg-slate-200" />
              <div className="mt-2 h-4 w-24 animate-pulse rounded-lg bg-slate-200" />
            </div>

            <div className="mt-5 h-4 w-full animate-pulse rounded-lg bg-slate-200" />
            <div className="mt-2 h-4 w-5/6 animate-pulse rounded-lg bg-slate-200" />
          </Card>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "WASHABOO",
        alternateName: "WASHABOO – Waschen ohne Stress",
        url: "https://frontend-nadja-aarugwnge-washaboo.vercel.app",
        inLanguage: "de-AT",
        description:
          "WASHABOO bringt Nutzer per QR-Code oder Link direkt zur Waschanlage und ermöglicht einen einfachen digitalen Einstieg mit Login und Tarifauswahl.",
      },
      {
        "@type": "Organization",
        name: "WASHABOO",
        url: "https://frontend-nadja-aarugwnge-washaboo.vercel.app",
        slogan: "Waschen ohne Stress",
        description:
          "WASHABOO ermöglicht einen einfachen digitalen Zugang zur Waschanlage per QR-Code oder Link.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#F5F7FA] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12">
        <section className="relative overflow-hidden rounded-[2rem] bg-white px-5 py-10 shadow-[0_18px_50px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 sm:px-8 sm:py-12 md:px-10 md:py-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#4FC3F7]/25" />
          <div className="pointer-events-none absolute -right-10 top-16 h-32 w-32 rounded-full border border-[#2196F3]/20" />
          <div className="pointer-events-none absolute bottom-10 left-8 h-16 w-16 rounded-full border border-[#26C6DA]/25" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-[#EAF7FF] px-4 py-1.5 text-xs font-semibold text-[#1565C0] sm:text-sm">
                WASHABOO · Waschen ohne Stress
              </span>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Auto waschen
                <br />
                <span className="bg-gradient-to-r from-[#4FC3F7] via-[#2196F3] to-[#1E88E5] bg-clip-text text-transparent">
                  direkt per App.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                QR-Code scannen, einloggen, Tarif wählen und Waschgang starten.
                Einfach, digital und ohne Münzen.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="/user" variant="primary" className="w-full sm:w-auto">
                  Waschgang starten
                </Button>

                <Button href="/partner" variant="secondary" className="w-full sm:w-auto">
                  Partner werden
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-600">
                <span className="rounded-full bg-slate-100 px-3 py-1">
                  QR-Code oder Link
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1">
                  Abo oder Einzelnutzung
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1">
                  Login & Bezahlung in der App
                </span>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                Basic ab 35 € / Monat · Premium 40 € / Monat
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-gradient-to-br from-[#4FC3F7] via-[#2196F3] to-[#1E88E5] p-[1px] shadow-[0_20px_50px_rgba(33,150,243,0.18)]">
                <div className="rounded-[2rem] bg-white p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        So funktioniert&apos;s
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                        In 3 Schritten startklar
                      </h2>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF7FF] text-xl font-semibold text-[#2196F3]">
                      +
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      ["1", "QR-Code scannen", "Direkt an der Station oder per Link öffnen."],
                      ["2", "Tarif wählen", "Basic, Premium oder Einzelnutzung auswählen."],
                      ["3", "Waschgang starten", "Ohne Münzen direkt loslegen."],
                    ].map(([number, title, text]) => (
                      <div
                        key={number}
                        className="flex gap-4 rounded-2xl bg-[#F5F7FA] p-4"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#2196F3] shadow-sm">
                          {number}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-950">{title}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button href="/user" variant="primary" className="mt-6 w-full">
                    App öffnen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<StationsListSkeleton />}>
          <StationsList />
        </Suspense>
      </div>
    </main>
  );
}