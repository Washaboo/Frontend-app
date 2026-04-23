export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Impressum</h1>
        <p className="mt-3 text-base text-gray-600">
          Angaben gemäß § 5 ECG, § 25 MedienG und Offenlegung gemäß UGB
        </p>
      </div>

      <div className="space-y-10 text-sm leading-7 text-gray-800">
        <section>
          <h2 className="text-xl font-semibold">Unternehmensangaben</h2>
          <div className="mt-3 space-y-1">
            <p><strong>Firmenname:</strong> [Unternehmensname]</p>
            <p><strong>Rechtsform:</strong> [z. B. GmbH / Einzelunternehmen]</p>
            <p><strong>Sitz:</strong> [Ort]</p>
            <p><strong>Geschäftsanschrift:</strong> [Straße, Hausnummer, PLZ, Ort, Land]</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Kontakt</h2>
          <div className="mt-3 space-y-1">
            <p><strong>E-Mail:</strong> [E-Mail-Adresse]</p>
            <p><strong>Telefon:</strong> [Telefonnummer]</p>
            <p><strong>Website:</strong> [Webadresse]</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Vertretungsbefugte Person</h2>
          <p className="mt-3">[Name der vertretungsbefugten Person]</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Firmenbuch</h2>
          <div className="mt-3 space-y-1">
            <p><strong>Firmenbuchnummer:</strong> [Firmenbuchnummer]</p>
            <p><strong>Firmenbuchgericht:</strong> [Zuständiges Gericht]</p>
            <p><strong>UID-Nummer:</strong> [UID-Nummer]</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Aufsichtsbehörde / Gewerbebehörde</h2>
          <p className="mt-3">[Behörde, falls erforderlich]</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Haftung für Inhalte</h2>
          <p className="mt-3">
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch
            keine Haftung übernommen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Haftung für Links</h2>
          <p className="mt-3">
            Diese Website kann Links zu externen Websites Dritter enthalten. Auf deren
            Inhalte haben wir keinen Einfluss. Für die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Urheberrecht</h2>
          <p className="mt-3">
            Die Inhalte und Werke auf dieser Website unterliegen dem Urheberrecht.
            Jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf
            der vorherigen schriftlichen Zustimmung der jeweiligen Rechteinhaber.
          </p>
        </section>
      </div>
    </main>
  );
}