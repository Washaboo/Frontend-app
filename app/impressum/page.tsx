import Card from "@/components/ui/Card";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* HEADER */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Rechtliches
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Impressum
          </h1>

          <p className="mt-4 max-w-2xl text-base text-slate-600">
            Angaben gemäß § 5 ECG, § 25 MedienG und Offenlegung gemäß UGB.
          </p>
        </div>

        <div className="space-y-6">
          {/* Unternehmensangaben */}
          <Card>
            <h2 className="text-lg font-semibold">Unternehmensangaben</h2>
            <div className="mt-4 space-y-1 text-sm text-slate-700">
              <p><strong>Firmenname:</strong> [Unternehmensname]</p>
              <p><strong>Rechtsform:</strong> [z. B. GmbH / Einzelunternehmen]</p>
              <p><strong>Sitz:</strong> [Ort]</p>
              <p><strong>Geschäftsanschrift:</strong> [Straße, Hausnummer, PLZ, Ort, Land]</p>
            </div>
          </Card>

          {/* Kontakt */}
          <Card>
            <h2 className="text-lg font-semibold">Kontakt</h2>
            <div className="mt-4 space-y-1 text-sm text-slate-700">
              <p><strong>E-Mail:</strong> [E-Mail-Adresse]</p>
              <p><strong>Telefon:</strong> [Telefonnummer]</p>
              <p><strong>Website:</strong> [Webadresse]</p>
            </div>
          </Card>

          {/* Vertretung */}
          <Card>
            <h2 className="text-lg font-semibold">
              Vertretungsbefugte Person
            </h2>
            <p className="mt-4 text-sm text-slate-700">
              [Name der vertretungsbefugten Person]
            </p>
          </Card>

          {/* Firmenbuch */}
          <Card>
            <h2 className="text-lg font-semibold">Firmenbuch</h2>
            <div className="mt-4 space-y-1 text-sm text-slate-700">
              <p><strong>Firmenbuchnummer:</strong> [Firmenbuchnummer]</p>
              <p><strong>Firmenbuchgericht:</strong> [Zuständiges Gericht]</p>
              <p><strong>UID-Nummer:</strong> [UID-Nummer]</p>
            </div>
          </Card>

          {/* Behörde */}
          <Card>
            <h2 className="text-lg font-semibold">
              Aufsichtsbehörde / Gewerbebehörde
            </h2>
            <p className="mt-4 text-sm text-slate-700">
              [Behörde, falls erforderlich]
            </p>
          </Card>

          {/* Haftung Inhalte */}
          <Card variant="soft">
            <h2 className="text-lg font-semibold">Haftung für Inhalte</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
              erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte wird jedoch keine Haftung übernommen.
            </p>
          </Card>

          {/* Haftung Links */}
          <Card variant="soft">
            <h2 className="text-lg font-semibold">Haftung für Links</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Diese Website kann Links zu externen Websites Dritter enthalten.
              Auf deren Inhalte haben wir keinen Einfluss. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich.
            </p>
          </Card>

          {/* Urheberrecht */}
          <Card variant="soft">
            <h2 className="text-lg font-semibold">Urheberrecht</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Die Inhalte und Werke auf dieser Website unterliegen dem
              Urheberrecht. Jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechts bedarf der vorherigen schriftlichen Zustimmung der
              jeweiligen Rechteinhaber.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}