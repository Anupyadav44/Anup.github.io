// Edit this file to update the whole website.
const phone = "918601040177";
export const site = {
  name: "Anup Yadav",
  title: "Performance Marketing Executive | Digital Marketer",
  tagline: "Performance Marketing | Google Ads | Meta Ads | Growth Strategy",
  headline: "Turning Digital Advertising Strategies into Measurable Business Growth.",
  email: "imanup44@gmail.com",
  phoneDisplay: "+91 86010 40177",
  whatsapp: (msg = "Hi Anup, I'd like to talk about digital marketing.") =>
    `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
  linkedin: "https://www.linkedin.com/in/anupyadav44/",
  url: "https://YOUR-SITE.vercel.app",
  // Festival banner: null hides it. Example: { emoji: "🪔", text: "Happy Diwali", sub: "Wishing you a bright year" }
  festival: null,
  about: [
    "I'm Anup Yadav, a Digital Marketer and Performance Marketing professional currently working at NapTapGo.",
    "I specialise in Google Ads, Meta Ads, lead generation, audience targeting, retargeting and conversion optimisation.",
    "My experience includes managing advertising campaigns, improving customer acquisition, monitoring campaign performance and working with analytics and tracking tools.",
    "I focus on data-driven marketing strategies, campaign efficiency, ROI-focused planning and measurable business growth.",
  ],
};
export const services = [
  ["Google Ads Management", ["Search Campaigns","Display Campaigns","Performance Max Campaigns","YouTube Video Campaigns","Keyword Research and Audience Targeting"]],
  ["Meta Ads Management", ["Facebook & Instagram Advertising","Lead Generation Campaigns","Retargeting Campaigns","Audience Research","Campaign Optimisation"]],
  ["Conversion Rate Optimisation", ["Landing Page Optimisation","Conversion Tracking","A/B Testing","Audience Strategy","Funnel Analysis"]],
  ["Analytics & Performance Reporting", ["Google Analytics 4","Google Tag Manager","Performance Tracking","ROI Analysis","KPI Management and Reporting"]],
];
export const projects = [
  { name: "NapTapGo", industry: "Hospitality", points: ["Google Ads campaign management","Meta Ads campaign management","Lead generation and retargeting","OTA listing and channel management","Performance tracking and reporting","Marketing campaign planning"] },
];
export const tools = ["Google Ads","Meta Ads Manager","Google Analytics 4","Google Tag Manager","Looker Studio","Microsoft Excel","WordPress","Stayflexi","CRM & OTA Platforms"];
export const process = [
  ["Understand","Business goals, audience and requirements."],
  ["Build","Campaign strategy, targeting and tracking."],
  ["Launch","Campaign execution and testing."],
  ["Measure","Performance, conversions and KPIs."],
  ["Optimise","Improve campaigns and scale based on results."],
];
export const faqs = [
  ["What services do you offer?","Google Ads, Meta Ads, lead generation, retargeting, conversion optimisation and analytics."],
  ["Which advertising platforms do you work with?","Google Ads, Facebook Ads and Instagram Ads."],
  ["Do you manage both campaign setup and optimisation?","Yes, including campaign planning, setup, monitoring and optimisation."],
  ["How do you track campaign performance?","Using Google Analytics 4, Google Tag Manager and performance reports."],
  ["Are you open to new opportunities?","Yes, I am open to relevant professional opportunities and collaborations."],
  ["How can someone contact you?","Through email, WhatsApp or LinkedIn."],
];
// Add your 15 certifications. expires: "YYYY-MM-DD" or null. Expired ones are flagged automatically.
export const certifications = [
  // { name: "Google Ads Search Certification", org: "Google Skillshop", issued: "2025-01-15", expires: "2026-01-15" },
];
