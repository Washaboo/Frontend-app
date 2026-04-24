export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Impressum
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Angaben gemäß § 5 ECG, § 25 MedienG und Offenlegung gemäß UGB
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-8 text-sm leading-6 text-slate-700">

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              Unternehmensangaben
            </h2>
            <p><span className="font-medium">Firmenname:</span> [Unternehmensname]</p>
            <p><span className="font-medium">Rechtsform:</span> [z. B. GmbH / Einzelunternehmen]</p>
            <p><span className="font-medium">Sitz:</span> [Ort]</p>
            <p><span className="font-medium">Geschäftsanschrift:</span> [Adresse]</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              Kontakt
            </h2>
            <p><span className="font-medium">E-Mail:</span> [E-Mail-Adresse]</p>
            <p><span className="font-medium">Telefon:</span> [Telefonnummer]</p>
            <p><span className="font-medium">Website:</span> [Domain]</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              Vertretungsbefugte Person
            </h2>
            <p>[Name]</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              Firmenbuch
            </h2>
            <p><span className="font-medium">Firmenbuchnummer:</span> [Nummer]</p>
            <p><span className="font-medium">Firmenbuchgericht:</span> [Gericht]</p>
            <p><span className="font-medium">UID-Nummer:</span> [UID]</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              Aufsichtsbehörde
            </h2>
            <p>[Behörde]</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              Medieninhaber und Herausgeber
            </h2>
            <p>[Unternehmensname]</p>
            <p className="text-slate-500">
              Betrieb einer Plattform zur digitalen Nutzung von Waschanlagen
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              Haftung für Inhalte
            </h2>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität wird jedoch keine Haftung übernommen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              Haftung für Links
            </h2>
            <p>
              Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte
              kein Einfluss besteht. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter verantwortlich.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              Urheberrecht
            </h2>
            <p>
              Die Inhalte dieser Website unterliegen dem Urheberrecht. Jede Verwertung
              außerhalb der Grenzen des Urheberrechts bedarf der Zustimmung der jeweiligen Rechteinhaber.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}