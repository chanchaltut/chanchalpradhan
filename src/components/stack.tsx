import { stack, stats } from "@/data/site";
import { TechIcon } from "./tech-icon";
import { Reveal } from "./reveal";

export function Stats() {
  return (
    <Reveal className="mt-14">
      <dl className="grid grid-cols-2 overflow-hidden rounded-xl border border-line bg-card sm:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col-reverse px-5 py-4 ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line sm:border-t-0" : ""} ${
              i === 2 ? "sm:border-l" : ""
            }`}
          >
            <dt className="mt-2 text-[11.5px] text-muted">{s.label}</dt>
            <dd className="font-pixel text-[26px] leading-none tracking-tight text-fg sm:text-[30px]">{s.value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}

export function Stack() {
  return (
    <Reveal className="mt-14">
      <h2 className="label mb-5">Tech Stack</h2>
      <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
        {stack.map((id) => (
          <TechIcon key={id} id={id} className="size-7 sm:size-8" />
        ))}
      </div>
    </Reveal>
  );
}
