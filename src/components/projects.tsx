import Image from "next/image";
import { moreWork, projects, type Project } from "@/data/site";
import { TechIcon } from "./tech-icon";
import { Tooltip } from "./tooltip";
import { Reveal } from "./reveal";
import { ArrowUpRightIcon, GitHubIcon, GlobeIcon } from "./icons";

// Used when a project has no screenshot: a quiet typographic cover in the site's own style.
function Cover({ project }: { project: Project }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_10%,transparent),transparent_60%)]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative text-center">
        <div className="font-pixel text-4xl tracking-tight text-fg sm:text-5xl">{project.name}</div>
        <div className="label mt-3">{project.tagline}</div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-line bg-card transition-colors duration-200 hover:bg-card-hover">
      <a
        href={project.live ?? project.repo}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        className="relative block aspect-video w-full overflow-hidden rounded-t-xl border-b border-line"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            sizes="(min-width: 640px) 384px, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <Cover project={project} />
        )}
        {project.status && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
            </span>
            {project.status}
          </span>
        )}
      </a>

      <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
        <div className="mb-1 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[15px] font-medium tracking-tight text-fg sm:text-base">{project.name}</h3>
            <p className="text-[12px] text-muted">{project.tagline}</p>
          </div>
          <div className="flex gap-3 pt-0.5">
            {project.live && (
              <Tooltip label="Visit website">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name}`}
                  className="text-muted transition-colors hover:text-fg"
                >
                  <GlobeIcon size={17} />
                </a>
              </Tooltip>
            )}
            {project.repo && (
              <Tooltip label="Source code">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} source on GitHub`}
                  className="text-muted transition-colors hover:text-fg"
                >
                  <GitHubIcon size={16} />
                </a>
              </Tooltip>
            )}
          </div>
        </div>
        <p className="mb-5 mt-2 text-[13.5px] font-[450] leading-[1.75] text-body sm:text-[14px]">{project.description}</p>
        <div className="mt-auto flex flex-wrap items-center gap-3">
          {project.tech.map((t) => (
            <TechIcon key={t} id={t} className="size-5 sm:size-[22px]" />
          ))}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="work" className="mt-24">
      <Reveal>
        <h2 className="label mb-5">Featured Projects</h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.06}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <h2 className="label mb-3">More Shipped Work</h2>
        <ul className="divide-y divide-line border-y border-line">
          {moreWork.map((w) => (
            <li key={w.name}>
              <a
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-3.5 transition-colors"
              >
                <span className="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="text-[14px] font-medium text-fg">{w.name}</span>
                  <span className="truncate text-[12.5px] text-muted">{w.kind}</span>
                </span>
                <ArrowUpRightIcon
                  size={15}
                  className="shrink-0 text-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
