import { education, experience } from "@/data/site";
import { TechIcon } from "./tech-icon";
import { Reveal } from "./reveal";
import { GradIcon } from "./icons";

export function Experience() {
  return (
    <section id="experience" className="mt-24">
      <Reveal>
        <h2 className="label mb-6">Experience</h2>
      </Reveal>
      <div className="relative">
        <div aria-hidden className="absolute bottom-2 left-[3px] top-2 w-px bg-line" />
        <ol className="space-y-10">
          {experience.map((role, i) => (
            <Reveal as="li" key={role.company} className="relative pl-7">
              <span
                aria-hidden
                className={`absolute left-0 top-[7px] size-[7px] rounded-full ${
                  i === 0 ? "bg-fg ring-4 ring-line" : "bg-faint"
                }`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-[14px] font-medium tracking-tight text-fg sm:text-[15px]">{role.title}</h3>
                  <span className="text-faint">·</span>
                  {role.href ? (
                    <a
                      href={role.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-[450] text-body transition-colors hover:text-fg sm:text-[13.5px]"
                    >
                      {role.company}
                    </a>
                  ) : (
                    <span className="text-[13px] font-[450] text-body sm:text-[13.5px]">{role.company}</span>
                  )}
                </div>
                <span className="whitespace-nowrap text-[11.5px] font-medium tabular-nums text-muted sm:text-xs">
                  {role.period}
                </span>
              </div>
              <div className="mt-0.5 text-[12px] text-muted sm:text-[12.5px]">{role.place}</div>
              <p className="mt-3 text-[13.5px] font-[450] leading-[1.7] text-body sm:text-[14px]">{role.summary}</p>
              <ul className="mt-2 space-y-1">
                {role.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-[13px] font-[450] leading-[1.6] text-body sm:text-[13.5px]">
                    <span className="mt-[9px] size-[3px] shrink-0 rounded-full bg-muted" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                {role.tech.map((t) => (
                  <TechIcon key={t} id={t} className="size-[18px] sm:size-5" />
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal className="mt-16">
        <h2 className="label mb-5">Education</h2>
        <div className="rounded-xl border border-line bg-card p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-line text-muted">
              <GradIcon size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[15px] font-medium tracking-tight text-fg">{education.school}</h3>
                <span className="text-[12px] font-medium tabular-nums text-muted">{education.period}</span>
              </div>
              <p className="mt-0.5 text-[13.5px] text-body">{education.degree}</p>
              <p className="mt-0.5 text-[12.5px] text-muted">
                {education.place} · GPA <span className="font-medium text-fg">{education.gpa}</span>
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {education.coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-line bg-card px-2 py-1 text-[11.5px] text-body"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
