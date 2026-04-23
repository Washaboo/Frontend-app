import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Button from "@/components/ui/Button";

const EMAIL = siteConfig.contactEmail;

export default function PartnerPage() {
  const mailto = `mailto:${EMAIL}?subject=Partneranfrage WASHABOO&body=Hallo,%0D%0A%0D%0AIch habe Interesse an einer Partnerschaft.%0D%0A%0D%0AName:%0D%0AUnternehmen:%0D%0AStandort:%0D%0A%0D%0AViele Grüße`;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 md:py-16">
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
              Für Betreiber
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Mehr Umsatz. Weniger Aufwand.
            </h1>

            <p className="mt-3 text-base text-white/70">
              Ihre Kunden starten den Waschgang direkt per Smartphone —
              ohne Münzen, ohne Wartung zusätzlicher Systeme.
            </p>
          </div>

          {/* VALUE PROPS */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">
                Direkt nutzbar
              </p>
              <p className="mt-1 text-sm text-white/70">
                Kein zusätzlicher Aufwand für Ihre Kunden — sofort verständlich.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">
                Weniger Technik
              </p>
              <p className="mt-1 text-sm text-white/70">
                Keine Münzsysteme oder komplizierte Bedienung notwendig.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">
                Klar skalierbar
              </p>
              <p className="mt-1 text-sm text-white/70">
                Weitere Standorte lassen sich einfach integrieren.
              </p>
            </div>
          </div>

          {/* CTA CARD */}
          <div className="mt-12 rounded-[1.75rem] bg-white p-6 text-slate-900 shadow-2xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Partnerschaft anfragen
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Schreiben Sie uns kurz. Wir melden uns persönlich und zeigen
                  Ihnen, wie WASHABOO bei Ihnen eingesetzt werden kann.
                </p>
              </div>

              <Button href={mailto}>Anfrage starten</Button>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Öffnet Ihr E-Mail-Programm mit vorbereiteter Anfrage
            </p>
          </div>

          {/* BACK */}
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