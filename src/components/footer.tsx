"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Tooltip } from "./tooltip";
import { GitHubIcon, LinkedInIcon, MailIcon, XIcon } from "./icons";

function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-IN", {
      timeZone: site.timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums">
      {time ?? "--:--"} in Kolkata
    </span>
  );
}

export function Footer() {
  const socials = [
    { label: "GitHub", href: site.socials.github, icon: <GitHubIcon size={16} /> },
    { label: "LinkedIn", href: site.socials.linkedin, icon: <LinkedInIcon size={16} /> },
    { label: "X (Twitter)", href: site.socials.x, icon: <XIcon size={15} /> },
    { label: "Email", href: `mailto:${site.email}`, icon: <MailIcon size={17} /> },
  ];

  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-5 px-6 py-8 text-xs text-muted sm:text-[13px] md:flex-row lg:px-0">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-5">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <span aria-hidden className="hidden h-4 w-px bg-line md:block" />
          <LocalTime />
        </div>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <Tooltip key={s.label} label={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex text-muted transition-colors hover:text-fg"
              >
                {s.icon}
              </a>
            </Tooltip>
          ))}
        </div>
      </div>
    </footer>
  );
}
