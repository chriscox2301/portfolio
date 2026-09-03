import { ImageResponse } from "next/og";

export const alt = "Chris Cox — Front-end developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#16140f",
          color: "#f8f4f4",
        }}
      >
        <span
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#e1ad66",
          }}
        >
          Portfolio
        </span>
        <span style={{ fontSize: 84, marginTop: 24, lineHeight: 1.05 }}>
          Chris Cox
        </span>
        <span
          style={{
            fontSize: 34,
            marginTop: 16,
            fontStyle: "italic",
            color: "#e1ad66",
          }}
        >
          Front-end developer with a backend habit.
        </span>
      </div>
    ),
    { ...size },
  );
}
