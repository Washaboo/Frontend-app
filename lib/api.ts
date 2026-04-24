export type Station = {
  id: number;
  name: string;
  adresse?: string;
  stadt?: string;
  beschreibung?: string;
};

type StationApiItem = {
  id?: number;
  name?: string;
  title?: string;
  stationName?: string;
  customerName?: string;
  adresse?: string;
  address?: string;
  street?: string;
  location?: string;
  stadt?: string;
  city?: string;
  beschreibung?: string;
  description?: string;
  notes?: string;
};

type StationsApiResponse =
  | StationApiItem[]
  | {
      data?: StationApiItem[];
      stations?: StationApiItem[];
    };

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

function normalizeStation(item: StationApiItem, index: number): Station {
  return {
    id: item.id ?? index,
    name:
      item.name ??
      item.title ??
      item.stationName ??
      item.customerName ??
      "Station",
    adresse: item.adresse ?? item.address ?? item.street ?? item.location ?? "",
    stadt: item.stadt ?? item.city ?? "",
    beschreibung: item.beschreibung ?? item.description ?? item.notes ?? "",
  };
}

function extractStations(data: StationsApiResponse): StationApiItem[] {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.data)) return data.data;
  if (Array.isArray(data.stations)) return data.stations;

  return [];
}

export async function getStations(): Promise<Station[]> {
  if (!API_BASE_URL) {
    console.warn("NEXT_PUBLIC_API_URL is not set.");
    return [];
  }

  try {
    const res = await fetch(`${API_BASE_URL}/api/stations`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Stations API responded with ${res.status}`);
    }

    const data = (await res.json()) as StationsApiResponse;
    return extractStations(data).map(normalizeStation);
  } catch (error) {
    console.error("Failed to load stations:", error);
    throw new Error("Stationen konnten nicht geladen werden.");
  }
}