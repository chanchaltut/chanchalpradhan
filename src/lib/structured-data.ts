import { education, experience, faqs, projects, site, stack, tech } from "@/data/site";

const id = (frag: string) => `${site.url}/#${frag}`;

// One linked schema.org graph: search engines and answer engines resolve every entity by @id.
export function structuredData() {
  const person = {
    "@type": "Person",
    "@id": id("person"),
    name: site.name,
    givenName: "Chanchal",
    familyName: "Pradhan",
    url: site.url,
    image: `${site.url}/avatar.jpg`,
    email: `mailto:${site.email}`,
    jobTitle: site.title,
    description: site.summary,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    nationality: { "@type": "Country", name: "India" },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.school,
      sameAs: "https://www.klyuniv.ac.in",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: education.degree,
      recognizedBy: { "@type": "CollegeOrUniversity", name: education.school },
    },
    hasOccupation: {
      "@type": "Occupation",
      name: site.title,
      occupationLocation: { "@type": "City", name: "Kolkata" },
      skills: stack.map((k) => tech[k].name).join(", "),
    },
    knowsAbout: [
      "Full-stack web development",
      "Artificial intelligence",
      "Large language model integration",
      "Multimodal AI pipelines",
      "Real-time data pipelines",
      "Cloud-native application development",
      ...stack.map((k) => tech[k].name),
      ...education.coursework,
    ],
    knowsLanguage: { "@type": "Language", name: "English" },
    affiliation: experience.map((r) => ({
      "@type": "Organization",
      name: r.company,
      ...(r.href ? { url: r.href } : {}),
    })),
    founder: { "@id": id("org-cyi") },
    sameAs: [...Object.values(site.socials), "https://codeyouridea.com"],
  };

  const website = {
    "@type": "WebSite",
    "@id": id("website"),
    url: site.url,
    name: site.name,
    alternateName: site.domain,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": id("person") },
  };

  const profile = {
    "@type": "ProfilePage",
    "@id": id("profilepage"),
    url: site.url,
    name: `${site.name} | ${site.title}`,
    isPartOf: { "@id": id("website") },
    mainEntity: { "@id": id("person") },
    about: { "@id": id("person") },
    dateModified: new Date().toISOString(),
    primaryImageOfPage: `${site.url}/opengraph-image`,
  };

  const agency = {
    "@type": "Organization",
    "@id": id("org-cyi"),
    name: "Code Your Idea",
    url: "https://codeyouridea.com",
    description: "Web and app development agency delivering SaaS and marketplace products.",
    foundingDate: "2025-06",
    foundingLocation: "Kolkata, India",
    founder: { "@id": id("person") },
  };

  const work = {
    "@type": "ItemList",
    "@id": id("projects"),
    name: `Projects by ${site.name}`,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        name: p.name,
        alternativeHeadline: p.tagline,
        description: p.description,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        ...(p.live ? { url: p.live } : {}),
        ...(p.repo ? { codeRepository: p.repo } : {}),
        ...(p.image ? { image: `${site.url}${p.image}` } : {}),
        keywords: p.tech.map((k) => tech[k].name).join(", "),
        creator: { "@id": id("person") },
      },
    })),
  };

  const faq = {
    "@type": "FAQPage",
    "@id": id("faq"),
    isPartOf: { "@id": id("profilepage") },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, profile, agency, work, faq],
  };
}
