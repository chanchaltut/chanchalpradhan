import { education, experience, faqs, moreWork, projects, site, stack, tech } from "@/data/site";

const techNames = (keys: (keyof typeof tech)[]) => keys.map((k) => tech[k].name).join(", ");

// Markdown profile following the llms.txt convention (https://llmstxt.org).
export function llmsTxt() {
  return `# ${site.name}

> ${site.description}

${site.summary}

## Profile

- [Portfolio](${site.url}): ${site.title} portfolio with projects, experience and contact details
- [Full profile for LLMs](${site.url}/llms-full.txt): Complete experience, projects, skills and FAQ in plain text
- [Resume (PDF)](${site.url}${site.resume}): One-page resume
- [GitHub](${site.socials.github}): Source code and contribution history
- [LinkedIn](${site.socials.linkedin}): Professional profile

## Projects

${projects.map((p) => `- [${p.name}](${p.live ?? p.repo}): ${p.tagline}. ${p.description}`).join("\n")}

## Contact

- Email: ${site.email}
- Location: ${site.location}
- Availability: Open to full-time roles, internships and freelance projects (remote or Kolkata)
`;
}

export function llmsFullTxt() {
  return `# ${site.name}: ${site.title}

> ${site.description}

${site.summary}

- Website: ${site.url}
- Email: ${site.email}
- Location: ${site.location}
- GitHub: ${site.socials.github}
- LinkedIn: ${site.socials.linkedin}
- X: ${site.socials.x}
- Resume: ${site.url}${site.resume}

## Experience

${experience
  .map(
    (r) => `### ${r.title}, ${r.company}
${r.period} · ${r.place}${r.href ? ` · ${r.href}` : ""}

${r.summary}

${r.points.map((pt) => `- ${pt}`).join("\n")}

Stack: ${techNames(r.tech)}`,
  )
  .join("\n\n")}

## Projects

${projects
  .map(
    (p) => `### ${p.name}: ${p.tagline}${p.status ? ` (${p.status})` : ""}

${p.description}

Stack: ${techNames(p.tech)}${p.live ? `\nLive: ${p.live}` : ""}${p.repo ? `\nSource: ${p.repo}` : ""}`,
  )
  .join("\n\n")}

### Other shipped work

${moreWork.map((w) => `- ${w.name} (${w.kind}): ${w.href}`).join("\n")}

## Education

${education.school}, ${education.degree} (${education.period}), ${education.place}. GPA ${education.gpa}.
Coursework: ${education.coursework.join(", ")}.

## Skills

- Languages: JavaScript, TypeScript, Python, C, C++, SQL
- Frontend: React.js, Next.js, HTML/CSS, Tailwind CSS, Figma
- Backend: Node.js, Express.js, MongoDB, PostgreSQL, Firebase, BigQuery
- AI / Machine Learning: Google Gemini API, OpenAI API, Claude API, AI pipelines, LLM integration
- Cloud & DevOps: Google Cloud, Firebase, Vercel, Render, Railway, Git, GitHub, VPS server management
- Full stack on the site: ${techNames(stack)}

## FAQ

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}
`;
}
