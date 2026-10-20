import { site } from "@/data/site";
import { ContributionGraph, type Day } from "./contribution-graph";

const username = site.socials.github.split("/").pop()!;

async function getContributions(): Promise<{ total: number; days: Day[] } | null> {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, {
        next: { revalidate: 60 * 60 * 6 },
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: { total: { lastYear: number }; contributions: Day[] } = await res.json();
      return { total: data.total.lastYear, days: data.contributions };
    } catch (err) {
      console.warn(`[contributions] attempt ${attempt + 1} failed:`, err);
    }
  }
  return null;
}

export async function Contributions() {
  const data = await getContributions();
  if (!data) return null;

  return (
    <div className="mt-14">
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <h2 className="label">GitHub Activity</h2>
        <a
          href={site.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-muted transition-colors hover:text-fg"
        >
          <span className="font-medium text-fg tabular-nums">{data.total}</span> contributions in the last year
        </a>
      </div>
      <ContributionGraph days={data.days} />
    </div>
  );
}
