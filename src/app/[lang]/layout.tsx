import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Lora } from "next/font/google";
import {
  getDictionary,
  hasLocale,
  localePath,
  locales,
} from "@/content/dictionaries";
import "@/styles/classical.css";
import "../globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    ),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePath(lang),
      languages: Object.fromEntries(
        locales.map((locale) => [locale, localePath(locale)]),
      ),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: meta.ogLocale,
      url: localePath(lang),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={`${cormorantGaramond.variable} ${lora.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          {dict.skipLink}
        </a>
        {children}
      </body>
    </html>
  );
}
