import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/data/site";

export const alt = `${site.name} | ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const avatar = await readFile(join(process.cwd(), "public/avatar.jpg"));
  const src = `data:image/jpeg;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#070709",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          color: "#f0f0f0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <img src={src} width={120} height={120} style={{ borderRadius: 24, border: "2px solid #222" }} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
            <div style={{ fontSize: 32, color: "#8a8a8a" }}>{site.title}</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 34, color: "#b2b2b2", maxWidth: 940, lineHeight: 1.4 }}>
            Building intelligent, production-ready products with Next.js, TypeScript, Google Cloud & Gemini AI.
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#34d399" }}>chanchalpradhan.com</div>
        </div>
      </div>
    ),
    size,
  );
}
