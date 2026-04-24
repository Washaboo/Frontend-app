import type { Metadata } from "next";
import { Suspense } from "react";
import StationsList from "@/components/StationsList";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Waschgang starten per App – ohne Münzen",
  description:
    "Starte deinen Waschgang direkt per Smartphone. Mit WASHABOO findest du Waschanlagen, öffnest die App per QR-Code und legst sofort los – ohne Münzen und ohne Aufwand.",
  openGraph: {
    title: "Waschgang starten per App – WASHABOO",
    description:
      "Per QR-Code direkt zur Waschanlage. Waschgang starten, Standorte finden und Waschen ohne Stress erleben.",
    url: "/",
  },
};

function StationsListSkeleton() {
  return (
    <section className="mt-20 md:mt-24">
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
          "WASHABOO bringt Nutzer per QR-Code oder Link direkt zur Waschanlage und ermöglicht einen schnellen digitalen Einstieg.",
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

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <section className="relative overflow-hidden rounded-[2rem] bg-[#0B1120] px-5 py-8 text-white shadow-[0_20px_60px_rgba(2,6,23,0.18)] sm:px-6 sm:py-10 md:px-10 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,195,247,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(33,150,243,0.18),_transparent_28%),linear-gradient(135deg,_#0B1120_0%,_#0F172A_45%,_#111827_100%)]" />

          <div className="relative z-10 grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm sm:px-4 sm:text-sm">
                WASHABOO · Waschen ohne Stress
              </span>

              <h1 className="mt-5 text-[2rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-4xl md:text-6xl md:leading-[1.02]">
                Auto waschen per App
                <br />
                <span className="bg-gradient-to-r from-[#4FC3F7] via-[#2196F3] to-[#26C6DA] bg-clip-text text-transparent">
                  Direkt. Einfach. Ohne Münzen.
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7 md:text-lg">
                Starte deinen Waschgang direkt an der Waschanlage — per QR-Code
                oder Link und ohne Umwege.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <Button href="/user" variant="primary" className="w-full sm:w-auto">
                  Waschgang starten
                </Button>

                <Button
                  href="/partner"
                  variant="secondary"
                  className="w-full border-white/15 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
                >
                  Partner werden
                </Button>
              </div>

              <p className="mt-3 text-xs text-white/60">
                Kein Login nötig · Direkt startklar
              </p>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/65 sm:text-sm">
                <span>QR-Code oder Link</span>
                <span className="text-white/25">•</span>
                <span>Sofort verständlich</span>
                <span className="text-white/25">•</span>
                <span>Ohne Umwege</span>
              </div>

              <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                Bereits an ersten Standorten im Einsatz
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-3 backdrop-blur-md sm:rounded-[2rem] sm:p-4">
                <div className="rounded-[1.5rem] bg-white p-4 text-slate-900 shadow-2xl sm:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-xs">
                        Nutzerzugang
                      </p>
                      <h2 className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">
                        In weniger als einer Minute startklar
                      </h2>
                    </div>
                    <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#4FC3F7] via-[#2196F3] to-[#1E88E5] sm:h-11 sm:w-11" />
                  </div>

                  <div className="mt-5 space-y-3 sm:mt-6">
                    <div className="rounded-2xl bg-slate-50 p-3.5 sm:p-4">
                      <p className="text-sm font-semibold text-slate-900">
                        1. QR-Code scannen
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Direkt an der Station oder per Link öffnen.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-3.5 sm:p-4">
                      <p className="text-sm font-semibold text-slate-900">
                        2. App öffnet sofort
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Ohne Registrierung direkt in den Einstieg.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-3.5 sm:p-4">
                      <p className="text-sm font-semibold text-slate-900">
                        3. Waschgang starten
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Direkt loslegen und verfügbare Standorte sehen.
                      </p>
                    </div>
                  </div>

                  <Button
                    href="/user"
                    variant="primary"
                    className="mt-5 w-full bg-slate-950 shadow-none hover:bg-slate-800 sm:mt-6"
                  >
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