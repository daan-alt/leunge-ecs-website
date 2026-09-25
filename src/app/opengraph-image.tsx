import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#13294b",
          backgroundImage: "linear-gradient(135deg, #0f1d33 0%, #13294b 60%, #c4750f 100%)",
          padding: "80px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 40,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          <span>LEUNGE</span>
          <span style={{ color: "#f5921e" }}>-</span>
          <span>ECS</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#ffffff",
              maxWidth: 900,
            }}
          >
            Independent technical expertise.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#ebf9ff",
              textTransform: "uppercase",
              letterSpacing: 4,
            }}
          >
            NETHERLANDS / WORLDWIDE
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
