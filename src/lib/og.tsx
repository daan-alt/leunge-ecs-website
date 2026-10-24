import { ImageResponse } from "next/og";

// Shared card for every opengraph-image.tsx. Colors are duplicated by hand
// from the @theme tokens in globals.css (next/og can't read CSS variables).
export function ogImage(eyebrow: string, title: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#08111f",
          backgroundImage: "linear-gradient(135deg, #08111f 0%, #0d1b30 55%, #13294b 100%)",
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

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#f5921e",
              textTransform: "uppercase",
              letterSpacing: 6,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              maxWidth: 980,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", height: 4, width: 96, backgroundColor: "#f5921e" }} />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
