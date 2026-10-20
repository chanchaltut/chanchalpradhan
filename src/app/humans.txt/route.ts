import { site } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const body = `/* TEAM */
${site.title}: ${site.name}
Contact: ${site.email}
GitHub: ${site.socials.github}
From: ${site.location}

/* SITE */
Standards: HTML5, CSS3
Components: Next.js, React, Tailwind CSS, Motion
Fonts: Geist, Geist Mono, Geist Pixel
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
