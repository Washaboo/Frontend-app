import StationsList from "@/components/StationsList";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      
      {/* HERO */}
      <section className="rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 px-8 py-20 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Einfacher Zugang zur App – für Nutzer und Partner
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Unsere Plattform ermöglicht einen schnellen Einstieg über QR-Code oder
          Direktlink und zeigt sofort, wo die App bereits genutzt werden kann.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/user"
            className="rounded-xl bg-black px-6 py-3 text-white text-sm font-medium transition hover:opacity-90"
          >
            Jetzt nutzen
          </Link>

          <Link
            href="/partner"
            className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-white"
          >
            Partner werden
          </Link>
        </div>
      </section>

      {/* VORTEILE */}
      <section className="mt-20 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold">Schnell</h2>
          <p className="mt-2 text-sm text-gray-600">
            Direkter Einstieg über QR-Code oder Link – ohne Umwege.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold">Einfach</h2>
          <p className="mt-2 text-sm text-gray-600">
            Intuitive Nutzung für alle Zielgruppen, ohne technische Hürden.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold">Skalierbar</h2>
          <p className="mt-2 text-sm text-gray-600">
            Erweiterbar auf neue Standorte und Partner.
          </p>
        </div>
      </section>

      {/* SO FUNKTIONIERTS */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold">So funktioniert’s</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-gray-50 p-6">
            <p className="text-sm font-semibold text-gray-500">1</p>
            <h3 className="mt-2 font-semibold">QR-Code scannen</h3>
            <p className="mt-2 text-sm text-gray-600">
              Nutzer scannen den Code oder klicken auf den Link.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <p className="text-sm font-semibold text-gray-500">2</p>
            <h3 className="mt-2 font-semibold">App öffnen</h3>
            <p className="mt-2 text-sm text-gray-600">
              Direkter Zugriff ohne komplizierte Schritte.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6">
            <p className="text-sm font-semibold text-gray-500">3</p>
            <h3 className="mt-2 font-semibold">Nutzen</h3>
            <p className="mt-2 text-sm text-gray-600">
              Sofortige Nutzung an verfügbaren Stationen.
            </p>
          </div>
        </div>
      </section>

      {/* STATIONEN */}
      <StationsList />

      {/* CTA */}
      <section className="mt-20 rounded-3xl bg-black px-8 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Jetzt starten oder Partner werden
        </h2>

        <p className="mt-4 text-gray-300">
          Werden Sie Teil des Netzwerks oder nutzen Sie die App direkt.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/user"
            className="rounded-xl bg-white px-6 py-3 text-black text-sm font-medium"
          >
            Zur App
          </Link>

          <Link
            href="/partner"
            className="rounded-xl border border-white px-6 py-3 text-sm font-medium"
          >
            Partner werden
          </Link>
        </div>
      </section>

    </main>
  );
}