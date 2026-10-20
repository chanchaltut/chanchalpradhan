// Fixed hairline grid with a soft radial fade, plus a faint glow behind the hero.
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 select-none overflow-hidden">
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,black_40%,transparent_100%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />
      <div className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_9%,transparent),transparent)] blur-2xl" />
    </div>
  );
}
