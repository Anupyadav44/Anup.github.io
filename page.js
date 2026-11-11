import ContactForm from "../components/ContactForm";
import { site, services, projects, tools, process as steps, faqs, certifications } from "../data/site";

const nav = [["Work","work"],["Services","services"],["About","about"],["Certifications","certs"],["FAQ","faq"]];
const Check = () => <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf-soft text-xs text-leaf">✓</span>;
const List = ({ items }) => <ul className="space-y-2">{items.map(i => <li key={i} className="flex gap-2 text-slate-700"><Check />{i}</li>)}</ul>;
const Head = ({ title, sub }) => <div className="mb-10 max-w-2xl"><h2 className="h2">{title}</h2>{sub && <p className="mt-3 text-slate-600">{sub}</p>}</div>;
const Section = ({ id, children, tint }) => <section id={id} className={tint ? "bg-gradient-to-b from-brand-soft/60 to-white" : ""}><div className="mx-auto max-w-6xl px-5 py-20">{children}</div></section>;
const fmt = d => new Date(d).toLocaleDateString("en-GB", { month: "short", year: "numeric" });

export default function Home() {
  const now = new Date();
  return (
    <main id="top">
      {site.festival && (
        <div className="bg-gradient-to-r from-brand to-leaf px-4 py-2 text-center text-sm text-white">
          {site.festival.emoji} <b>{site.festival.text}</b> {site.festival.sub && `· ${site.festival.sub}`}
        </div>
      )}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-display text-lg font-bold">{site.name}<span className="block text-xs font-normal text-slate-500">Performance Marketer</span></a>
          <nav className="hidden gap-6 text-sm md:flex">{nav.map(([l, id]) => <a key={id} href={`#${id}`} className="text-slate-600 hover:text-brand">{l}</a>)}</nav>
          <a href="#contact" className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark">Let's talk</a>
        </div>
        <nav className="flex gap-5 overflow-x-auto px-5 pb-2 text-sm md:hidden">{nav.map(([l, id]) => <a key={id} href={`#${id}`} className="shrink-0 text-slate-600">{l}</a>)}</nav>
      </header>

      <section className="bg-gradient-to-br from-brand-soft via-white to-leaf-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm text-brand shadow-sm">{site.tagline}</p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{site.headline}</h1>
            <p className="mt-5 max-w-lg text-lg text-slate-600">I'm {site.name}. I run Google Ads and Meta Ads campaigns that bring in qualified leads and track every result.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">View my work</a>
              <a href={site.whatsapp()} className="rounded-full bg-leaf px-6 py-3 font-semibold text-white hover:opacity-90">Chat on WhatsApp</a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold">LinkedIn</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand to-leaf shadow-xl">
              <span className="absolute inset-0 flex items-center justify-center font-display text-7xl font-bold text-white/80">AY</span>
              {/* Put your photo at public/anup.jpg */}
              <img src="/anup.jpg" alt={`${site.name}, ${site.title}`} className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <span className="float absolute -left-6 top-10 rounded-2xl bg-white px-4 py-2 text-sm font-semibold shadow-lg">Google Ads</span>
            <span className="float absolute -right-4 top-1/2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold shadow-lg [animation-delay:1.5s]">Meta Ads</span>
            <span className="float absolute -bottom-4 left-8 rounded-2xl bg-white px-4 py-2 text-sm font-semibold shadow-lg [animation-delay:3s]">GA4 Tracking</span>
          </div>
        </div>
      </section>

      <Section id="tools">
        <Head title="Tools I work with" />
        <div className="flex flex-wrap gap-3">{tools.map(t => <span key={t} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 font-medium shadow-sm">{t}</span>)}</div>
      </Section>

      <Section id="work" tint>
        <Head title="Selected work" sub="More projects will be added here." />
        {projects.map(p => (
          <article key={p.name} className="card max-w-3xl">
            <p className="text-sm font-medium text-leaf">{p.industry}</p>
            <h3 className="font-display text-2xl font-bold">{p.name}</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2"><List items={p.points} /></div>
          </article>
        ))}
      </Section>

      <Section id="services">
        <Head title="How I help businesses grow" sub="Planning, setup, tracking and optimisation, end to end." />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(([t, items]) => <div key={t} className="card"><h3 className="mb-4 font-display text-xl font-bold">{t}</h3><List items={items} /></div>)}
        </div>
      </Section>

      <Section id="process" tint>
        <Head title="How I work" />
        <ol className="grid gap-4 md:grid-cols-5">
          {steps.map(([t, d], i) => (
            <li key={t} className="card !p-5"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-bold">{t}</h3><p className="mt-1 text-sm text-slate-600">{d}</p></li>
          ))}
        </ol>
      </Section>

      <Section id="about">
        <Head title="Marketing that you can measure" />
        <div className="max-w-3xl space-y-4 text-lg text-slate-700">{site.about.map(p => <p key={p}>{p}</p>)}</div>
      </Section>

      <Section id="certs" tint>
        <Head title="Certifications" sub="Google Skillshop, Google Digital Academy, HubSpot Academy, SkillCircle and Semrush." />
        {certifications.length === 0 ? (
          <p className="card max-w-xl text-slate-600">Certifications are being added.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map(c => {
              const expired = c.expires && new Date(c.expires) < now;
              return (
                <div key={c.name} className="card !p-5">
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="text-sm text-slate-600">{c.org}</p>
                  <p className="mt-2 text-xs text-slate-500">Issued {fmt(c.issued)}{c.expires && ` · ${expired ? "Expired" : "Expires"} ${fmt(c.expires)}`}</p>
                  {expired && <span className="mt-2 inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">Expired</span>}
                </div>
              );
            })}
          </div>
        )}
      </Section>

      <Section id="faq">
        <Head title="Questions, answered" />
        <div className="max-w-3xl space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="card !p-5"><summary className="cursor-pointer list-none font-semibold">{q}</summary><p className="mt-3 text-slate-600">{a}</p></details>
          ))}
        </div>
      </Section>

      <Section id="contact" tint>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="h2">Let's talk about growth</h2>
            <p className="mt-3 text-slate-600">Hiring, or have a campaign to run? Pick the channel you prefer.</p>
            <div className="mt-6 space-y-3">
              <a className="card block !p-4 hover:border-brand" href={`mailto:${site.email}?subject=${encodeURIComponent("Enquiry from your portfolio")}`}>Email: {site.email}</a>
              <a className="card block !p-4 hover:border-leaf" href={site.whatsapp()}>WhatsApp: {site.phoneDisplay}</a>
              <a className="card block !p-4 hover:border-brand" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn: anupyadav44</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>

      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">© {now.getFullYear()} {site.name}. All rights reserved.</footer>
      <a href={site.whatsapp("Hi Anup, I'd like a quick chat.")} aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-50 rounded-full bg-leaf px-5 py-3 font-semibold text-white shadow-lg hover:opacity-90">Quick chat</a>
    </main>
  );
}
