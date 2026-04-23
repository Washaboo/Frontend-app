export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Datenschutzerklärung</h1>
        <p className="mt-3 text-base text-gray-600">
          Informationen zur Verarbeitung personenbezogener Daten.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-7 text-gray-800">
        <section>
          <h2 className="text-xl font-semibold">1. Verantwortlicher</h2>
          <div className="mt-3 space-y-1">
            <p>[Unternehmensname]</p>
            <p>[Straße, Hausnummer]</p>
            <p>[PLZ, Ort, Land]</p>
            <p><strong>E-Mail:</strong> [E-Mail-Adresse]</p>
            <p><strong>Telefon:</strong> [Telefonnummer]</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Allgemeines zur Datenverarbeitung</h2>
          <p className="mt-3">
            Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen.
            Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der DSGVO.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <p className="mt-3">
            Personenbezogene Daten werden nur insoweit verarbeitet, als dies für die
            Bereitstellung dieser Website, der App oder zur Bearbeitung von Anfragen erforderlich ist.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Zwecke der Verarbeitung</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Bereitstellung und Betrieb der Website</li>
            <li>Bereitstellung und Nutzung der App</li>
            <li>Bearbeitung von Kontaktanfragen</li>
            <li>Kommunikation mit potenziellen Partnern</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Rechtsgrundlagen der Verarbeitung</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung</li>
            <li>Art. 6 Abs. 1 lit. b DSGVO – Vertrag oder vorvertragliche Maßnahmen</li>
            <li>Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Server-Logfiles</h2>
          <p className="mt-3">
            Beim Besuch dieser Website werden technische Informationen wie IP-Adresse,
            Datum und Uhrzeit des Zugriffs, Browsertyp und Betriebssystem gespeichert.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Rechte betroffener Personen</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Recht auf Auskunft</li>
            <li>Recht auf Berichtigung</li>
            <li>Recht auf Löschung</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Recht auf Widerspruch</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">8. Änderungen dieser Datenschutzerklärung</h2>
          <p className="mt-3">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets
            den aktuellen rechtlichen Anforderungen entspricht.
          </p>
        </section>
      </div>
    </main>
  );
}