import { NextResponse } from "next/server";
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
export async function POST(req) {
  const { name, email, type, message, company } = await req.json();
  if (company) return NextResponse.json({ ok: true }); // honeypot
  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email))
    return NextResponse.json({ error: "Please fill all fields with a valid email" }, { status: 400 });
  if (!process.env.RESEND_API_KEY)
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `Portfolio <${process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [process.env.CONTACT_TO_EMAIL || "imanup44@gmail.com"],
      reply_to: email,
      subject: `New ${type || "enquiry"} from ${name}`,
      html: `<p><b>Name:</b> ${esc(name)}</p><p><b>Email:</b> ${esc(email)}</p><p><b>Type:</b> ${esc(type)}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });
  if (!r.ok) return NextResponse.json({ error: "Could not send message" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
