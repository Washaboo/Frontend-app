import { getStations } from "@/lib/api";
import Card from "@/components/ui/Card";

export default async function StationsList() {
  try {
    const stations = await getStations();

    return (
      <section className="mt-14 md:mt-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
              Standorte
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Verfügbare Waschanlagen
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Diese Standorte unterstützen WASHABOO bereits.
            </p>
          </div>

          <div className="inline-flex w-fit items-center rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-600 shadow-sm">
            {stations.length} {stations.length === 1 ? "Standort" : "Standorte"}
          </div>
        </div>

        {stations.length === 0 ? (
          <Card className="mt-8">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                Noch nicht verfügbar
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
                Aktuell sind keine Stationen sichtbar
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                WASHABOO wird laufend erweitert. Neue Standorte werden hier
                angezeigt, sobald sie verfügbar sind.
              </p>
            </div>
          </Card>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stations.map((station) => (
              <Card key={station.id} className="overflow-hidden">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Standort
                    </p>

                    <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
                      {station.name}
                    </h3>
                  </div>

                  <span className="shrink-0 rounded-xl border border-[#2563EB]/15 bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#2563EB]">
                    Verfügbar
                  </span>
                </div>

                {(station.adresse || station.stadt) && (
                  <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Adresse
                    </p>

                    {station.adresse && (
                      <p className="mt-2 text-sm font-medium text-slate-700">
                        {station.adresse}
                      </p>
                    )}

                    {station.stadt && (
                      <p className="mt-1 text-sm text-slate-500">
                        {station.stadt}
                      </p>
                    )}
                  </div>
                )}

                {station.beschreibung && (
                  <p className="mt-5 text-sm leading-6 text-slate-600">
                    {station.beschreibung}
                  </p>
                )}
              </Card>
            ))}
          </div>
        )}
      </section>
    );
  } catch {
    return (
      <section className="mt-14 md:mt-16">
        <Card className="border border-red-100 bg-red-50">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Problem beim Laden
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
              Standorte sind gerade nicht erreichbar
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Die Standortdaten konnten im Moment nicht geladen werden.
              Versuche es bitte gleich noch einmal.
            </p>
          </div>
        </Card>
      </section>
    );
  }
}