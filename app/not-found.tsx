import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          404
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Seite nicht gefunden
        </h1>

        <p className="mt-3 text-base text-slate-600">
          Die Seite existiert nicht oder wurde verschoben.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href="/" variant="primary">
            Zur Startseite
          </Button>

          <Button href="/user" variant="secondary">
            Waschgang starten
          </Button>
        </div>
      </div>
    </main>
  );
}