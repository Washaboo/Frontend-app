"use client";

import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { siteConfig } from "@/lib/siteConfig";

const APP_URL = siteConfig.appUrl;

export default function UserPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-3xl bg-gray-50 p-8 md:p-12">
        <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
          Für Nutzer
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
          Direkt zur App
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Nutzer können die App entweder direkt über den Link öffnen oder den
          QR-Code mit dem Smartphone scannen.
        </p>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <div className="flex justify-center">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <QRCodeSVG value={APP_URL} size={220} />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold">App-Link</h2>
            <p className="mt-3 break-all text-sm text-gray-600">{APP_URL}</p>

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90"
            >
              App öffnen
            </a>

            <div className="mt-6">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 underline underline-offset-4"
              >
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}