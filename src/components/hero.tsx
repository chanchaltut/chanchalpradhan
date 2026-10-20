import Image from "next/image";
import { site } from "@/data/site";
import { RotatingText } from "./rotating-text";
import { Tooltip } from "./tooltip";
import { Reveal } from "./reveal";
import {
  ArrowRightIcon,
  FileIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
  SparkIcon,
  XIcon,
} from "./icons";

const inlineLink = "text-fg underline decoration-faint underline-offset-[3px] transition-colors hover:decoration-fg";

export function Hero() {
  const socials = [
    { label: "GitHub", href: site.socials.github, icon: <GitHubIcon size={18} /> },
    { label: "LinkedIn", href: site.socials.linkedin, icon: <LinkedInIcon size={18} /> },
    { label: "X (Twitter)", href: site.socials.x, icon: <XIcon size={17} /> },
    { label: "Email", href: `mailto:${site.email}`, icon: <MailIcon size={19} /> },
  ];

  return (
    <div className="pt-30 md:pt-36">
      <Reveal>
        <div className="mb-7 flex items-center gap-4">
          <div className="relative shrink-0">
            <Image
              src="/avatar.jpg"
              alt={site.name}
              width={128}
              height={128}
              priority
              className="size-15 rounded-xl border border-line object-cover sm:size-16"
            />
            <span
              aria-hidden
              className="absolute -bottom-1 -right-1 size-3.5 rounded-full border-[2.5px] border-bg bg-emerald-400"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-[2rem]">
              {site.name}
            </h1>
            <div className="mt-0.5 text-sm text-muted sm:text-[15px]">
              <RotatingText items={site.roles} />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <dl className="mb-7 mt-10 flex flex-wrap items-start gap-x-8 gap-y-4">
          <div className="space-y-1">
            <dt className="label">Location</dt>
            <dd className="flex items-center gap-2 text-[13.5px] font-medium text-body sm:text-[15px]">
              <PinIcon size={14} className="text-muted" />
              {site.location}
            </dd>
          </div>
          <div className="space-y-1">
            <dt className="label">Email</dt>
            <dd>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-2 text-[13.5px] font-medium text-body transition-colors hover:text-fg sm:text-[15px]"
              >
                <MailIcon size={14} className="text-muted" />
                <span className="underline-offset-[3px] group-hover:underline">{site.email}</span>
              </a>
            </dd>
          </div>
          <div className="space-y-1">
            <dt className="label">Currently</dt>
            <dd>
              <a
                href={site.now.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[13.5px] font-medium text-body transition-colors hover:text-fg sm:text-[15px]"
              >
                <SparkIcon size={14} className="text-accent" />
                <span className="underline-offset-[3px] group-hover:underline">{site.now.label}</span>
              </a>
            </dd>
          </div>
        </dl>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mb-8 text-[14px] font-[450] leading-[1.85] text-body sm:text-[15.5px]">
          I build intelligent, production-ready products where modern web meets AI. From multimodal{" "}
          Gemini pipelines that read the air we breathe, to SaaS and
          marketplace platforms shipped for clients in India and France. I co-founded and ran a dev agency, so I
          think about the business behind the code as much as the code itself. Currently working with{" "}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className={inlineLink}>
            Next.js
          </a>
          ,{" "}
          <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className={inlineLink}>
            TypeScript
          </a>
          ,{" "}
          <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer" className={inlineLink}>
            Google Cloud
          </a>{" "}
          and{" "}
          <a href="https://ai.google.dev" target="_blank" rel="noopener noreferrer" className={inlineLink}>
            Gemini
          </a>
          .
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              className="group inline-flex h-9 items-center gap-2 rounded-lg bg-fg px-4 text-[13.5px] font-medium text-bg transition-opacity hover:opacity-90"
            >
              Let&apos;s work together
              <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-line bg-card px-4 text-[13.5px] font-medium text-body transition-colors hover:bg-card-hover hover:text-fg"
            >
              <FileIcon size={14} />
              Resume
            </a>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <Tooltip key={s.label} label={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted transition-colors duration-150 hover:text-fg"
                >
                  {s.icon}
                </a>
              </Tooltip>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
