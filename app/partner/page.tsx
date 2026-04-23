import Link from "next/link";

const EMAIL = "office@deine-domain.at";

export default function PartnerPage() {
  const mailto = `mailto:${EMAIL}?subject=Partneranfrage&body=Hallo,%0D%0A%0D%0AIch habe Interesse an einer Partnerschaft.%0D%0A%0D%0AName:%0D%0AUnternehmen:%0D%0A%0D%0AViele Grüße`;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-3xl bg-gray-50 p-8 md:p-12">
        <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
          Partner werden
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
          Gemeinsam wachsen
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Werden Sie Partner und integrieren Sie unsere Lösung in Ihr Angebot.
          Wir freuen uns über Ihre Anfrage.
        </p>

        <div className="mt-10">
          <a
            href={mailto}
            className="inline-block rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
          >
            Partner werden
          </a>
        </div>

        <div className="mt-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 underline underline-offset-4"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}