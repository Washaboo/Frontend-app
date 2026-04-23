import Card from "@/components/ui/Card";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* HEADER */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Rechtliches
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Datenschutzerklärung
          </h1>

          <p className="mt-4 max-w-2xl text-base text-slate-600">
            Informationen zur Verarbeitung personenbezogener Daten bei der
            Nutzung von Website und App.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <h2 className="text-lg font-semibold">1. Verantwortlicher</h2>
            <div className="mt-4 space-y-1 text-sm text-slate-700">
              <p>[Unternehmensname]</p>
              <p>[Straße, Hausnummer]</p>
              <p>[PLZ, Ort, Land]</p>
              <p>
                <strong>E-Mail:</strong> [E-Mail-Adresse]
              </p>
              <p>
                <strong>Telefon:</strong> [Telefonnummer]
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes
              Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage
              der DSGVO.
            </p>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold">
              3. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Personenbezogene Daten werden nur insoweit verarbeitet, als dies
              für die Bereitstellung dieser Website, der App oder zur
              Bearbeitung von Anfragen erforderlich ist.
            </p>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold">
              4. Zwecke der Verarbeitung
            </h2>
            <ul className="mt-4 space-y-2 pl-5 text-sm leading-6 text-slate-600 marker:text-slate-400 list-disc">
              <li>Bereitstellung und Betrieb der Website</li>
              <li>Bereitstellung und Nutzung der App</li>
              <li>Bearbeitung von Kontaktanfragen</li>
              <li>Kommunikation mit potenziellen Partnern</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold">
              5. Rechtsgrundlagen der Verarbeitung
            </h2>
            <ul className="mt-4 space-y-2 pl-5 text-sm leading-6 text-slate-600 marker:text-slate-400 list-disc">
              <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung</li>
              <li>
                Art. 6 Abs. 1 lit. b DSGVO – Vertrag oder vorvertragliche
                Maßnahmen
              </li>
              <li>Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse</li>
            </ul>
          </Card>

          <Card variant="soft">
            <h2 className="text-lg font-semibold">6. Server-Logfiles</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Beim Besuch dieser Website werden technische Informationen wie
              IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp und
              Betriebssystem gespeichert.
            </p>
          </Card>

          <Card variant="soft">
            <h2 className="text-lg font-semibold">
              7. Rechte betroffener Personen
            </h2>
            <ul className="mt-4 space-y-2 pl-5 text-sm leading-6 text-slate-600 marker:text-slate-400 list-disc">
              <li>Recht auf Auskunft</li>
              <li>Recht auf Berichtigung</li>
              <li>Recht auf Löschung</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Recht auf Widerspruch</li>
            </ul>
          </Card>

          <Card variant="soft">
            <h2 className="text-lg font-semibold">
              8. Änderungen dieser Datenschutzerklärung
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
              sie stets den aktuellen rechtlichen Anforderungen entspricht.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}