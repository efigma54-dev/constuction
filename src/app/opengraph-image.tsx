import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Aakar Developers · Built on trust. Delivered with proof.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#10201d",
          color: "#eee7dc",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 7,
              color: "#c87348",
            }}
          >
            AAKAR DEVELOPERS
          </div>
          <div style={{ fontSize: 72, lineHeight: 1.03, maxWidth: 900 }}>
            Built on trust. Delivered with proof.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(238,231,220,0.25)",
            paddingTop: 24,
            fontFamily: "Arial, sans-serif",
            fontSize: 20,
            color: "#aeb8b3",
          }}
        >
          <span>Pune · Maharashtra</span>
          <span>Projects · Progress · Transparency</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
