import { getStations } from "@/lib/api";
import Card from "@/components/ui/Card";

export default async function StationsList() {
  try {
    const stations = await getStations();

    return (
      <section className="relative mt-20">
        <div className="absolute -left-4 top-0 h-16 w-16 rounded-full border border-sky-100" />
        <div className="absolute right-8 top-6 text-sky-200">+</div>

        <div className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Standorte
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Hier kannst du WASHABOO schon nutzen
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Diese Standorte sind bereits verfügbar.
            </p>
          </div>

          <div className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            {stations.length} {stations.length === 1 ? "Standort" : "Standorte"}
          </div>
        </div>

        {stations.length === 0 ? (
          <Card className="mt-8">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Noch nicht verfügbar
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                Aktuell sind noch keine Stationen sichtbar
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                WASHABOO wird laufend erweitert. Schau bald noch einmal vorbei,
                um neue verfügbare Standorte zu sehen.
              </p>
            </div>
          </Card>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stations.map((station) => (
              <Card
                key={station.id}
                className="group relative overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full border border-sky-100" />
                <div className="absolute right-10 top-8 h-3 w-3 rounded-full border border-sky-200" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Standort
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                        {station.name}
                      </h3>
                    </div>

                    <span className="shrink-0 rounded-full bg-gradient-to-r from-[#4FC3F7]/10 via-[#2196F3]/10 to-[#26C6DA]/10 px-3 py-1 text-xs font-semibold text-[#1565C0]">
                      Verfügbar
                    </span>
                  </div>

                  {(station.adresse || station.stadt) && (
                    <div className="mt-5 rounded-2xl bg-slate-50 p-4">
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
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    );
  } catch {
    return (
      <section className="mt-20">
        <Card className="mt-8 border border-red-100">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-500">
              Problem beim Laden
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
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