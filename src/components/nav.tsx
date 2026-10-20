"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

const links = [
  { href: "#top", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));

    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-bg [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
      />
      <div className="relative mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-6 lg:px-0">
        <div className="flex items-center gap-5 md:gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-sm transition-colors after:absolute after:-bottom-px after:left-0 after:h-px after:bg-current after:transition-all hover:text-fg md:hover:after:w-full ${
                active === l.href ? "text-fg after:w-full" : "text-muted after:w-0"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          className="group cursor-pointer py-2 text-muted transition-colors hover:text-fg"
        >
          <span className="block transition-transform duration-300 group-hover:-rotate-12">
            {dark ? <MoonIcon size={17} /> : <SunIcon size={17} />}
          </span>
        </button>
      </div>
    </nav>
  );
}
