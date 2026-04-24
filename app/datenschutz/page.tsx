export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Datenschutzerklärung
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Informationen zur Verarbeitung personenbezogener Daten.
          </p>
        </div>

        <div className="space-y-8 text-sm leading-6 text-slate-700">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              1. Verantwortlicher
            </h2>
            <p>[Unternehmensname]</p>
            <p>[Straße, Hausnummer]</p>
            <p>[PLZ, Ort, Land]</p>
            <p>
              <span className="font-medium">E-Mail:</span> [E-Mail-Adresse]
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes
              Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage
              der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              3. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, USA gehostet. Beim Aufruf der Website werden
              technische Daten wie IP-Adresse, Zeitpunkt des Zugriffs,
              Browsertyp und Betriebssystem verarbeitet.
            </p>
            <p>
              Die Verarbeitung erfolgt zur Sicherstellung des technischen
              Betriebs der Website sowie zur Gewährleistung der Sicherheit.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              4. Server- und API-Verarbeitung
            </h2>
            <p>
              Für bestimmte Funktionen werden Daten an ein Backend-System
              verarbeitet, das bei Render Services Inc., USA gehostet wird.
            </p>
            <p>
              Dabei können technische Daten verarbeitet werden, die für die
              Nutzung der Anwendung erforderlich sind.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              5. Vercel Analytics
            </h2>
            <p>
              Diese Website nutzt Vercel Analytics, einen Webanalysedienst der
              Vercel Inc.
            </p>
            <p>
              Vercel Analytics verarbeitet anonymisierte Nutzungsdaten, um das
              Verhalten auf der Website zu verstehen und das Angebot zu
              verbessern.
            </p>
            <p>
              Es werden keine Cookies gesetzt und keine personenbezogenen Daten
              zur Identifikation einzelner Nutzer verwendet.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              6. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie per E-Mail Kontakt mit uns aufnehmen, werden Ihre
              angegebenen Daten zur Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen gespeichert.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              7. Rechtsgrundlagen der Verarbeitung
            </h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung</li>
              <li>
                Art. 6 Abs. 1 lit. b DSGVO – Vertrag oder vorvertragliche
                Maßnahmen
              </li>
              <li>Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              8. Rechte betroffener Personen
            </h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Recht auf Auskunft</li>
              <li>Recht auf Berichtigung</li>
              <li>Recht auf Löschung</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Recht auf Widerspruch</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950">
              9. Änderungen dieser Datenschutzerklärung
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
              sie stets den aktuellen rechtlichen Anforderungen entspricht.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}