import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Social link-preview card (1200x630) shown when the URL is shared in a text,
 * WhatsApp, or on LinkedIn. Heritage read: navy field, the real BATGA crest sat
 * on a cream badge (so the navy mark reads on the dark card), wordmark and the
 * tagline. The crest is the genuine logo (public/crest.png), read at build and
 * embedded as a data URI so next/og (resvg) can rasterise it.
 */

export const alt =
  "British American Tennis and Golf Academy — private tennis and golf coaching in Atlanta";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The real logo, read from disk and inlined (satori cannot fetch by URL path).
const CREST_URI = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "crest.png")
).toString("base64")}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0b3226 0%, #0e3b2e 58%, #124b3a 100%)",
          padding: "72px 80px",
          color: "#f4f1e8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 150,
              height: 150,
              borderRadius: 28,
              background: "#f4f1e8",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={CREST_URI} width={112} height={86} alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 52, fontWeight: 700, letterSpacing: "-0.01em" }}>
              British American
            </span>
            <span
              style={{
                fontSize: 26,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#bcc9c0",
                marginTop: 8,
              }}
            >
              Tennis and Golf Academy
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              maxWidth: 940,
            }}
          >
            Private tennis and golf coaching in Atlanta.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#bcc9c0",
              marginTop: 24,
            }}
          >
            British-trained · USPTR certified · a +2.4 handicap · Learn properly.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
