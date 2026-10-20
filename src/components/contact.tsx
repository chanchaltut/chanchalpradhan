"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { Reveal } from "./reveal";
import {
  ArrowUpRightIcon,
  BriefcaseIcon,
  CheckIcon,
  ClockIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  SendIcon,
  XIcon,
} from "./icons";

const channels = [
  { href: `mailto:${site.email}`, icon: <MailIcon size={18} />, title: site.email, sub: "Projects, roles & quick questions" },
  { href: site.socials.linkedin, icon: <LinkedInIcon size={17} />, title: "Connect on LinkedIn", sub: "Professional profile & updates" },
  { href: site.socials.github, icon: <GitHubIcon size={17} />, title: "Browse my GitHub", sub: "Code, experiments & side projects" },
  { href: site.socials.x, icon: <XIcon size={16} />, title: "Follow on X", sub: "Building in public" },
];

const input =
  "w-full rounded-lg border border-line bg-input px-3.5 py-2.5 text-sm text-fg placeholder:text-faint transition-colors hover:border-[color-mix(in_srgb,var(--fg)_16%,transparent)] focus:border-[color-mix(in_srgb,var(--fg)_25%,transparent)] focus:outline-none";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      if (res.status !== 503) throw new Error();
    } catch {
      setStatus("error");
      return;
    }

    // No mail provider configured on the server: hand off to the visitor's mail app.
    const body = `${data.message}\n\n— ${data.name} (${data.email})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Portfolio enquiry from ${data.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("idle");
  }

  return (
    <section id="contact" className="mt-24">
      <Reveal>
        <h2 className="label mb-2">Let&apos;s Work Together</h2>
        <p className="mb-6 max-w-xl text-[14px] leading-[1.75] text-body sm:text-[15px]">
          Have a product to build, an AI feature to ship, or a role to fill? I&apos;m open to full-time roles,
          internships and freelance projects. Tell me what you&apos;re working on.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Reveal className="flex flex-col rounded-xl border border-line bg-card px-6 py-5">
          <div className="mb-4">
            <h3 className="mb-1.5 text-lg font-medium text-fg">Get in touch</h3>
            <p className="text-sm leading-[1.6] text-body">Pick whichever channel suits you best.</p>
          </div>
          <div className="-mx-6 divide-y divide-line border-y border-line">
            {channels.map((c) => (
              <a
                key={c.href}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-6 py-3.5 transition-colors hover:bg-card-hover"
              >
                <span className="text-muted transition-colors group-hover:text-fg">{c.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="mb-0.5 block truncate text-[13px] font-medium text-fg sm:text-sm">{c.title}</span>
                  <span className="block text-[11px] text-muted sm:text-xs">{c.sub}</span>
                </span>
                <ArrowUpRightIcon
                  size={15}
                  className="text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                />
              </a>
            ))}
          </div>
          <div className="mt-auto space-y-2.5 pt-5 text-xs text-muted">
            <div className="flex items-center gap-2.5">
              <ClockIcon size={14} />
              Replies within 24 hours
            </div>
            <div className="flex items-center gap-2.5">
              <BriefcaseIcon size={14} />
              Open to full-time, internships &amp; freelance · Remote or Kolkata
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="rounded-xl border border-line bg-card px-6 py-5">
          <div className="mb-4">
            <h3 className="mb-1.5 text-lg font-medium text-fg">Send a message</h3>
            <p className="text-sm leading-[1.6] text-body">Prefer to write? Drop a note and I&apos;ll get back to you.</p>
          </div>
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center gap-3 py-14 text-center">
              <span className="grid size-10 place-items-center rounded-full bg-[color-mix(in_srgb,var(--accent)_15%,transparent)] text-accent">
                <CheckIcon size={18} />
              </span>
              <p className="text-sm font-medium text-fg">Message sent. Thank you!</p>
              <p className="text-xs text-muted">I&apos;ll reply to your email soon.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-2.5">
              <label className="sr-only" htmlFor="name">Full name</label>
              <input id="name" name="name" required maxLength={100} placeholder="Full Name" className={input} />
              <label className="sr-only" htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" required maxLength={200} placeholder="Email Address" className={input} />
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={5000}
                placeholder="Tell me about your project or role"
                className={`${input} resize-none`}
              />
              {/* Honeypot: real visitors never see or fill this. */}
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-fg px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
                <SendIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              {status === "error" && (
                <p className="text-xs text-red-500">
                  Something went wrong. Please email me directly at {site.email}.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
