export type Station = {
  id: number;
  name: string;
  adresse?: string;
  stadt?: string;
  beschreibung?: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

function normalizeStation(item: any, index: number): Station {
  return {
    id: item.id ?? index,
    name:
      item.name ??
      item.title ??
      item.stationName ??
      item.customerName ??
      "Station",
    adresse:
      item.adresse ??
      item.address ??
      item.street ??
      item.location ??
      "",
    stadt: item.stadt ?? item.city ?? "",
    beschreibung:
      item.beschreibung ?? item.description ?? item.notes ?? "",
  };
}

export async function getStations(): Promise<Station[]> {
  const res = await fetch(`${API_BASE_URL}/api/stations`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Stationen konnten nicht geladen werden.");
  }

  const data = await res.json();

  if (Array.isArray(data)) {
    return data.map(normalizeStation);
  }

  if (Array.isArray(data?.data)) {
    return data.data.map(normalizeStation);
  }

  if (Array.isArray(data?.stations)) {
    return data.stations.map(normalizeStation);
  }

  return [];
}