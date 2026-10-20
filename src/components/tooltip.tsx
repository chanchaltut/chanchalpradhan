import type { ReactNode } from "react";

// CSS-only tooltip: shows on hover and keyboard focus, no client JS needed.
export function Tooltip({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span className="group/tip relative inline-flex">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg bg-[var(--tip-bg)] px-3 py-1.5 text-[12.5px] font-medium text-[var(--tip-fg)] opacity-0 shadow-lg shadow-black/20 transition-all duration-100 ease-out group-hover/tip:translate-y-0 group-hover/tip:opacity-100 group-focus-within/tip:translate-y-0 group-focus-within/tip:opacity-100"
      >
        {label}
        <span className="absolute left-1/2 top-full -mt-px -translate-x-1/2 border-x-[6px] border-t-[6px] border-x-transparent border-t-[var(--tip-bg)]" />
      </span>
    </span>
  );
}
