import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// AI crawlers are welcomed explicitly so answer engines (ChatGPT, Claude, Perplexity,
// Gemini, Copilot) can read and cite the profile.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
  "Meta-ExternalAgent",
  "cohere-ai",
  "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: aiCrawlers, allow: "/", disallow: "/api/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
