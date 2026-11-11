# Anup Yadav Portfolio (Next.js + Tailwind)

## Run locally
npm install && npm run dev   -> http://localhost:3000

## Edit content
All text, links, services, FAQs and certifications live in `data/site.js`.
Put your photo at `public/anup.jpg`. Festival banner: set `festival` in `data/site.js`, or null to hide.

## Deploy
1. Push to a GitHub repo.
2. vercel.com > Add New > Project > import the repo > Deploy.
3. Project Settings > Environment Variables: add values from `.env.example` (RESEND_API_KEY etc.), then Redeploy.
4. Set your real URL in `site.url` in `data/site.js`.
