import { tech, type TechKey } from "@/data/site";
import { Tooltip } from "./tooltip";

export function TechIcon({ id, className = "size-6" }: { id: TechKey; className?: string }) {
  const t: { name: string; src: string; mono?: boolean; color?: string } = tech[id];
  const masked = t.mono || t.color;

  return (
    <Tooltip label={t.name}>
      {masked ? (
        <span
          role="img"
          aria-label={t.name}
          tabIndex={0}
          className={`${className} inline-block cursor-default bg-current text-fg outline-none transition-transform duration-200 hover:scale-110`}
          style={{
            backgroundColor: t.color,
            maskImage: `url(${t.src})`,
            WebkitMaskImage: `url(${t.src})`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={t.src}
          alt={t.name}
          tabIndex={0}
          className={`${className} cursor-default object-contain outline-none transition-transform duration-200 hover:scale-110`}
        />
      )}
    </Tooltip>
  );
}
