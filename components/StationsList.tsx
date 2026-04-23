import { getStations } from "@/lib/api";

export default async function StationsList() {
  try {
    const stations = await getStations();

    return (
      <section className="mt-20">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Bereits verfügbare Stationen</h2>
            <p className="mt-2 text-gray-600">
              Hier kann die App bereits genutzt werden.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            {stations.length} {stations.length === 1 ? "Standort" : "Standorte"}
          </p>
        </div>

        {stations.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-gray-600">
              Aktuell sind keine Stationen verfügbar.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stations.map((station) => (
              <div
                key={station.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {station.name}
                  </h3>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    Station
                  </span>
                </div>

                {(station.adresse || station.stadt) && (
                  <div className="mt-4 space-y-1 text-sm text-gray-600">
                    {station.adresse && <p>{station.adresse}</p>}
                    {station.stadt && <p>{station.stadt}</p>}
                  </div>
                )}

                {station.beschreibung && (
                  <p className="mt-4 text-sm leading-6 text-gray-700">
                    {station.beschreibung}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    );
  } catch {
    return (
      <section className="mt-20">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-900">
            Stationen konnten nicht geladen werden
          </h2>
          <p className="mt-2 text-sm text-red-700">
            Bitte prüfen Sie, ob das Backend läuft und der Endpoint erreichbar ist.
          </p>
        </div>
      </section>
    );
  }
}