import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #0B1120 0%, #0F172A 45%, #111827 100%)",
          color: "#FFFFFF",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(79,195,247,0.22), transparent 30%), radial-gradient(circle at bottom right, rgba(33,150,243,0.18), transparent 28%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 56,
            left: 72,
            width: 160,
            height: 160,
            borderRadius: 9999,
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 84,
            top: 82,
            width: 220,
            height: 220,
            borderRadius: 9999,
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 180,
            bottom: 92,
            width: 84,
            height: 84,
            borderRadius: 9999,
            border: "1px solid rgba(79,195,247,0.28)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 120,
            bottom: 120,
            width: 14,
            height: 14,
            fontSize: 28,
            fontWeight: 500,
            color: "rgba(255,255,255,0.28)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          +
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 72px 64px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "12px 20px",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.08)",
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            WASHABOO · Waschen ohne Stress
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 860,
            }}
          >
            <div
              style={{
                fontSize: 76,
                lineHeight: 1.02,
                fontWeight: 700,
                letterSpacing: "-0.045em",
                color: "#FFFFFF",
              }}
            >
              Waschgang starten
            </div>

            <div
              style={{
                fontSize: 76,
                lineHeight: 1.02,
                fontWeight: 700,
                letterSpacing: "-0.045em",
                color: "#FFFFFF",
              }}
            >
              per App
            </div>

            <div
              style={{
                marginTop: 22,
                fontSize: 34,
                lineHeight: 1.3,
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "#4FC3F7",
              }}
            >
              Ohne Münzen. Ohne Suchen.
            </div>

            <div
              style={{
                marginTop: 24,
                maxWidth: 760,
                fontSize: 28,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.74)",
              }}
            >
              Digital direkt zur Waschanlage — per QR-Code oder Link.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 22,
              color: "rgba(255,255,255,0.58)",
            }}
          >
            <div>WASHABOO</div>
            <div>Waschen ohne Stress</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}