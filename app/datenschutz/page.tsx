export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          Datenschutzerklärung
        </h1>
        <p className="mt-3 text-base text-gray-600">
          Informationen zur Verarbeitung personenbezogener Daten.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-7 text-gray-800">
        {/* Verantwortlicher */}
        <section>
          <h2 className="text-xl font-semibold">1. Verantwortlicher</h2>
          <div className="mt-3 space-y-1">
            <p>[Unternehmensname]</p>
            <p>[Straße, Hausnummer]</p>
            <p>[PLZ, Ort, Land]</p>
            <p>
              <strong>E-Mail:</strong> [E-Mail-Adresse]
            </p>
          </div>
        </section>

        {/* Allgemeines */}
        <section>
          <h2 className="text-xl font-semibold">
            2. Allgemeines zur Datenverarbeitung
          </h2>
          <p className="mt-3">
            Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes
            Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage
            der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
          </p>
        </section>

        {/* Hosting */}
        <section>
          <h2 className="text-xl font-semibold">3. Hosting</h2>
          <p className="mt-3">
            Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, USA gehostet. Beim Aufruf der Website werden
            technische Daten wie IP-Adresse, Zeitpunkt des Zugriffs,
            Browsertyp und Betriebssystem verarbeitet.
          </p>
          <p className="mt-2">
            Die Verarbeitung erfolgt zur Sicherstellung des technischen
            Betriebs der Website sowie zur Gewährleistung der Sicherheit.
          </p>
        </section>

        {/* Backend */}
        <section>
          <h2 className="text-xl font-semibold">
            4. Server- und API-Verarbeitung
          </h2>
          <p className="mt-3">
            Für bestimmte Funktionen werden Daten an ein Backend-System
            verarbeitet, das bei Render Services Inc., USA gehostet wird.
          </p>
          <p className="mt-2">
            Dabei können technische Daten verarbeitet werden, die für die
            Nutzung der Anwendung erforderlich sind.
          </p>
        </section>

        {/* Analytics */}
        <section>
          <h2 className="text-xl font-semibold">
            5. Vercel Analytics
          </h2>
          <p className="mt-3">
            Diese Website nutzt Vercel Analytics, einen Webanalysedienst der
            Vercel Inc.
          </p>
          <p className="mt-2">
            Vercel Analytics verarbeitet anonymisierte Nutzungsdaten, um das
            Verhalten auf der Website zu verstehen und das Angebot zu
            verbessern.
          </p>
          <p className="mt-2">
            Es werden keine Cookies gesetzt und keine personenbezogenen Daten
            zur Identifikation einzelner Nutzer verwendet.
          </p>
        </section>

        {/* Kontakt */}
        <section>
          <h2 className="text-xl font-semibold">
            6. Kontaktaufnahme
          </h2>
          <p className="mt-3">
            Wenn Sie per E-Mail Kontakt mit uns aufnehmen, werden Ihre
            angegebenen Daten zur Bearbeitung der Anfrage und für den Fall
            von Anschlussfragen gespeichert.
          </p>
        </section>

        {/* Rechtsgrundlagen */}
        <section>
          <h2 className="text-xl font-semibold">
            7. Rechtsgrundlagen der Verarbeitung
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>
              Art. 6 Abs. 1 lit. a DSGVO – Einwilligung (falls zutreffend)
            </li>
            <li>
              Art. 6 Abs. 1 lit. b DSGVO – Vertrag oder vorvertragliche Maßnahmen
            </li>
            <li>
              Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse
            </li>
          </ul>
        </section>

        {/* Rechte */}
        <section>
          <h2 className="text-xl font-semibold">
            8. Rechte betroffener Personen
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Recht auf Auskunft</li>
            <li>Recht auf Berichtigung</li>
            <li>Recht auf Löschung</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Recht auf Widerspruch</li>
          </ul>
        </section>

        {/* Änderungen */}
        <section>
          <h2 className="text-xl font-semibold">
            9. Änderungen dieser Datenschutzerklärung
          </h2>
          <p className="mt-3">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
            damit sie stets den aktuellen rechtlichen Anforderungen
            entspricht.
          </p>
        </section>
      </div>
    </main>
  );
}