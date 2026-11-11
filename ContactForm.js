"use client";
import { useState } from "react";
const types = ["Marketing Project","Job Opportunity","Partnership","Other"];
export default function ContactForm() {
  const [state, setState] = useState({ status: "idle", msg: "" });
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));
    setState({ status: "loading", msg: "" });
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Something went wrong");
      form.reset();
      setState({ status: "ok", msg: "Message sent. I'll reply within 1–2 working days." });
    } catch (err) {
      setState({ status: "error", msg: `${err.message}. Please email or WhatsApp me instead.` });
    }
  }
  const f = "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";
  return (
    <form onSubmit={onSubmit} className="card space-y-4">
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <label className="block text-sm font-medium">Name<input required name="name" className={`${f} mt-1`} /></label>
      <label className="block text-sm font-medium">Email<input required type="email" name="email" className={`${f} mt-1`} /></label>
      <label className="block text-sm font-medium">Enquiry type
        <select name="type" className={`${f} mt-1`}>{types.map(t => <option key={t}>{t}</option>)}</select></label>
      <label className="block text-sm font-medium">Message<textarea required name="message" rows={5} className={`${f} mt-1`} /></label>
      <button disabled={state.status === "loading"} className="w-full rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60">
        {state.status === "loading" ? "Sending..." : "Send message"}
      </button>
      {state.msg && <p role="status" className={state.status === "ok" ? "text-leaf" : "text-red-600"}>{state.msg}</p>}
    </form>
  );
}
