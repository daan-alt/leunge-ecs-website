import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#13294b",
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            border: "2px solid #ffffff",
            borderRight: "2px solid #f5921e",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
