"use client";

import { useState } from "react";

export type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const CELL = 11;
const GAP = 3;
const STEP = CELL + GAP;
const TOP = 18;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parse(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

export function ContributionGraph({ days }: { days: Day[] }) {
  const [hover, setHover] = useState<{ day: Day; x: number; y: number } | null>(null);

  const offset = parse(days[0].date).getUTCDay();
  const cells = days.map((day, i) => {
    const slot = i + offset;
    return { day, col: Math.floor(slot / 7), row: slot % 7 };
  });
  const cols = cells[cells.length - 1].col + 1;
  const width = cols * STEP - GAP;
  const height = TOP + 7 * STEP - GAP;

  const months: { label: string; col: number }[] = [];
  for (const c of cells) {
    const d = parse(c.day.date);
    if (d.getUTCDate() === 1 && c.col < cols - 2) months.push({ label: MONTHS[d.getUTCMonth()], col: c.col });
  }

  return (
    <div className="relative">
      <div className="no-scrollbar -mx-6 overflow-x-auto px-6 sm:mx-0 sm:overflow-visible sm:px-0">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="block h-auto w-full min-w-[620px] sm:min-w-0"
          role="img"
          aria-label="GitHub contribution calendar for the last year"
          onMouseLeave={() => setHover(null)}
        >
          {months.map((m) => (
            <text
              key={`${m.label}-${m.col}`}
              x={m.col * STEP}
              y={10}
              className="fill-[var(--muted)] text-[9.5px] uppercase tracking-[0.14em]"
            >
              {m.label}
            </text>
          ))}
          {cells.map(({ day, col, row }) => (
            <rect
              key={day.date}
              x={col * STEP}
              y={TOP + row * STEP}
              width={CELL}
              height={CELL}
              rx={2.5}
              style={{ fill: `var(--cell-${day.level})` }}
              className="transition-opacity hover:opacity-70"
              onMouseEnter={() => setHover({ day, x: (col * STEP + CELL / 2) / width, y: (TOP + row * STEP) / height })}
            />
          ))}
        </svg>
      </div>

      {hover && (
        <div
          className="pointer-events-none absolute z-20 hidden -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-lg bg-[var(--tip-bg)] px-3 py-1.5 text-[12px] font-medium text-[var(--tip-fg)] shadow-lg sm:block"
          style={{ left: `${hover.x * 100}%`, top: `calc(${hover.y * 100}% - 8px)` }}
        >
          {hover.day.count === 0 ? "No" : hover.day.count} contribution{hover.day.count === 1 ? "" : "s"} on{" "}
          {parse(hover.day.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            timeZone: "UTC",
          })}
        </div>
      )}

      <div className="mt-3 flex items-center justify-end gap-1 text-[10.5px] uppercase tracking-[0.14em] text-muted">
        <span className="mr-1">Less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <span key={l} className="size-[11px] rounded-[2.5px]" style={{ background: `var(--cell-${l})` }} />
        ))}
        <span className="ml-1">More</span>
      </div>
    </div>
  );
}
