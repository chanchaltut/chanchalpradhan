import { site } from "@/data/site";

// Sends contact-form messages through Resend (https://resend.com) when RESEND_API_KEY is set.
// Without it the route answers 503 and the form falls back to opening the visitor's mail app.
export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return Response.json({ error: "Mail not configured" }, { status: 503 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim().slice(0, 100);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, 5000);

  // Honeypot filled in: pretend success so bots don't retry.
  if (body.company) return Response.json({ ok: true });
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please fill in every field" }, { status: 400 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO ?? site.email],
      reply_to: email,
      subject: `Portfolio enquiry from ${name}`,
      text: `${message}\n\n— ${name} <${email}>`,
    }),
  });

  if (!res.ok) return Response.json({ error: "Failed to send" }, { status: 502 });
  return Response.json({ ok: true });
}
