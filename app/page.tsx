import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
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
    <section className="mt-14 md:mt-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="h-4 w-28 animate-pulse rounded-full bg-slate-200" />
          <div className="mt-3 h-9 w-80 max-w-full animate-pulse rounded-xl bg-slate-200" />
          <div className="mt-4 h-5 w-96 max-w-full animate-pulse rounded-xl bg-slate-200" />
        </div>

        <div className="h-10 w-28 animate-pulse rounded-xl bg-white ring-1 ring-slate-200" />
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
    <main className="min-h-screen bg-[#F8FAFC] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12">
        <section className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="px-5 py-10 sm:px-8 md:px-10 md:py-14">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                WASHABOO · Waschen ohne Stress
              </p>

              <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.04] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Auto waschen. Einfach per Smartphone.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
                Kein Kleingeld, kein Umweg. QR-Code scannen, Tarif wählen und
                den Waschgang direkt per App starten.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/user" className="w-full sm:w-auto">
                  Jetzt Waschgang starten
                </Button>

                <Button
                  href="/partner"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Für Betreiber
                </Button>
              </div>

              <p className="mt-5 text-sm text-slate-500">
                Bereits an ersten Standorten im Einsatz.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["Kein Kleingeld", "Waschgang digital starten"],
                  ["Flexibel nutzen", "Abo oder Einzelnutzung"],
                  ["Schnell starten", "Scannen und loslegen"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4"
                  >
                    <p className="text-sm font-semibold text-slate-950">
                      {title}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-slate-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-slate-500">
                Basic ab 35 € / Monat · Premium 40 € / Monat · Einzelnutzung möglich
              </p>
            </div>

            <div className="border-t border-slate-200 bg-[#F8FAFC] px-5 py-8 sm:px-8 md:px-10 md:py-14 lg:border-l lg:border-t-0">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                  So funktioniert es
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                  In 3 Schritten waschen
                </h2>

                <div className="mt-6 space-y-3">
                  {[
                    ["1", "QR-Code scannen", "Direkt an der Waschanlage öffnen."],
                    ["2", "Tarif wählen", "Abo oder Einzelnutzung auswählen."],
                    ["3", "Waschgang starten", "Ohne Münzen direkt loslegen."],
                  ].map(([number, title, text]) => (
                    <div
                      key={number}
                      className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4"
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

                <Button href="/user" className="mt-6 w-full">
                  App öffnen
                </Button>
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-950">
                  Für Waschanlagen-Betreiber
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Bieten Sie Kunden einen digitalen Zugang zur Waschanlage —
                  einfach per QR-Code und Link.
                </p>

                <Link
                  href="/partner"
                  className="mt-4 inline-flex text-sm font-semibold text-[#2563EB] hover:text-[#1E40AF]"
                >
                  Partnerschaft anfragen
                </Link>
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