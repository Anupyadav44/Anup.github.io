import "./globals.css";
import Script from "next/script";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { site } from "../data/site";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
export const metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.title}`,
  description: "Performance marketing portfolio of Anup Yadav: Google Ads, Meta Ads, lead generation, conversion optimisation and analytics.",
  keywords: ["Performance Marketing","Google Ads","Meta Ads","Lead Generation","Digital Marketer","Anup Yadav"],
  openGraph: { title: `${site.name} | ${site.title}`, description: site.headline, type: "website" },
};
export default function RootLayout({ children }) {
  const ga = process.env.NEXT_PUBLIC_GA_ID, px = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        {ga && (<>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga}');`}</Script>
        </>)}
        {px && (
          <Script id="fbq" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${px}');fbq('track','PageView');`}</Script>
        )}
      </body>
    </html>
  );
}
